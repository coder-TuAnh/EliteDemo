using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web.Mvc;
using ProjectLibrary.Config;
using ProjectLibrary.Database;
using ProjectLibrary.Utility;
using TeamplateHotel.Areas.Administrator.EntityModel;

namespace TeamplateHotel.Areas.Administrator.Controllers
{
    public class RoomController : BaseController
    {
        // GET: /Administrator/Room/
        public ActionResult Index()
        {
            ViewBag.Messages = CommentController.Messages(TempData["Messages"]);
            ViewBag.Title = "Rooms";
            LoadData();
            return View();
        }
        [HttpPost]
        public ActionResult UpdateIndex()
        {
            int hotelId;
            int.TryParse(Request.Params["ListHotel"], out hotelId);

            if (hotelId == 0)
            {

                TempData["Messages"] = "Please select a menu.";
                return RedirectToAction("Index");
            }

            using (var db = new MyDbDataContext())
            {
                var records = db.Rooms.Where(r => r.ID == hotelId).ToList();
                foreach (var record in records)
                {
                    var itemHotel = Request.Params[string.Format("Sort[{0}].Index", record.HotelId)];
                    int index;
                    int.TryParse(itemHotel, out index);
                    record.Index = index;
                    db.SubmitChanges();
                }

                TempData["Messages"] = "Sort successfull";
                return RedirectToAction("Index");
            }
        }

        [HttpPost]
        public JsonResult List(int hotelId = 0, int jtStartIndex = 0, int jtPageSize = 0, string jtSorting = null)
        {
            try
            {
                var db = new MyDbDataContext();
                var listArticle = db.Rooms.Where(a => a.LanguageID == Request.Cookies["lang_client"].Value).Join(db.ListHotels, a => a.HotelId, b => b.ID, (a, b) => new { a, b }).ToList();
                var menu = db.Menus.Where(a => a.LanguageID == Request.Cookies["lang_client"].Value).ToList();

                if (hotelId != 0)
                {
                    listArticle = listArticle.Where(a => a.a.HotelId == hotelId).ToList();
                }
                var records = listArticle.Select(a => new
                {
                    ID = a.a.ID,
                    Title = a.a.Title,
                    HotelName = a.b.HotelName,
                    Index = a.a.Index,
                    Status = a.a.Status,
                }).Skip(jtStartIndex).Take(jtPageSize).ToList();
                //Return result to jTable
                return Json(new { Result = "OK", Records = records, TotalRecordCount = listArticle.Count });
            }
            catch (Exception ex)
            {
                return Json(new { Result = "ERROR", Message = ex.Message });
            }
        }

        //Lấy danh sách menu khi thay đổi hotel
        [HttpGet]
        public ActionResult Create()
        {
            ViewBag.Title = "Add new room";
            LoadData();
            var eRoom = new ERoom();

            return View(eRoom);
        }
        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Create(ERoom model)
        {
            using (var db = new MyDbDataContext())
            {
                if (ModelState.IsValid)
                {
                    try
                    {
                        Room room = new Room
                        {
                            LanguageID = Request.Cookies["lang_client"].Value,
                            HotelId = model.HotelId,
                            Title = model.Title,
                            Image = model.Image,
                            MaxPeople = model.MaxPeople,
                            Price = model.Price,
                            Index = model.Index,
                            Status = model.Status,
                            PriceNet = model.PriceNet,
                            Description = model.Description,
                            Content = model.Content,
                        };

                        db.Rooms.InsertOnSubmit(room);
                        db.SubmitChanges();

                        //Thêm hình ảnh cho phòng
                        if (model.EGalleryITems != null)
                        {
                            foreach (EGalleryITem itemGallery in model.EGalleryITems)
                            {
                                var roomGallery = new RoomGallery
                                {
                                    ImageLarge = itemGallery.Image,
                                    ImageSmall = ReturnSmallImage.GetImageSmall(itemGallery.Image),
                                    RoomId = room.ID,
                                };
                                db.RoomGalleries.InsertOnSubmit(roomGallery);
                            }
                            db.SubmitChanges();
                        }


                        TempData["Messages"] = "Insert successfull.";
                        return RedirectToAction("Index");
                    }
                    catch (Exception exception)
                    {
                        LoadData();
                        TempData["Messages"] = "Error: " + exception.Message;
                        return View();
                    }
                }
                LoadData();
                return View();
            }
        }

        [HttpGet]
        public ActionResult Update(int id)
        {
            var db = new MyDbDataContext();
            Room detailRoom = db.Rooms.FirstOrDefault(a => a.ID == id);
            if (detailRoom == null)
            {

                TempData["Messages"] = "Room is not exist";
                return RedirectToAction("Index");
            }
            ViewBag.Title = "Update room";
            LoadData();
            ERoom room = new ERoom
            {
                ID = detailRoom.ID,
                HotelId = detailRoom.HotelId,
                Title = detailRoom.Title,
                Image = detailRoom.Image,
                Index = detailRoom.Index ?? 0,
                Status = detailRoom.Status,
                Price = detailRoom.Price,
                MaxPeople = detailRoom.MaxPeople,
                PriceNet = detailRoom.PriceNet ?? 0,
                Description = detailRoom.Description,
                Content = detailRoom.Content
            };
            //lấy danh sách hình ảnh
            room.EGalleryITems = db.RoomGalleries.Where(a => a.RoomId == detailRoom.ID).Select(a => new EGalleryITem
            {
                Image = a.ImageLarge
            }).ToList();

            return View(room);
        }
        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Update(ERoom model)
        {
            //Kiểm tra xem alias thuộc hotel này đã tồn tại chưa
            var db = new MyDbDataContext();

            if (ModelState.IsValid)
            {
                try
                {
                    var room = db.Rooms.FirstOrDefault(b => b.ID == model.ID);
                    if (room != null)
                    {
                        room.HotelId = model.HotelId;
                        room.Title = model.Title;
                        room.Image = model.Image;
                        room.MaxPeople = model.MaxPeople;
                        room.Price = model.Price;
                        room.Index = model.Index;
                        room.Status = model.Status;
                        room.PriceNet = model.PriceNet;
                        room.Description = model.Description;
                        room.Content = model.Content;
                        db.SubmitChanges();
                        //xóa gallery cho phòng
                        db.RoomGalleries.DeleteAllOnSubmit(db.RoomGalleries.Where(a => a.RoomId == room.ID).ToList());
                        //Thêm hình ảnh cho phòng
                        if (model.EGalleryITems != null)
                        {
                            foreach (EGalleryITem itemGallery in model.EGalleryITems)
                            {
                                var roomGallery = new RoomGallery
                                {
                                    ImageLarge = itemGallery.Image,
                                    ImageSmall = ReturnSmallImage.GetImageSmall(itemGallery.Image),
                                    RoomId = room.ID,
                                };
                                db.RoomGalleries.InsertOnSubmit(roomGallery);
                            }
                            db.SubmitChanges();
                        }
                        TempData["Messages"] = "Update successful.";
                        return RedirectToAction("Index");
                    }

                }
                catch (Exception exception)
                {
                    LoadData();
                    TempData["Messages"] = "Error: " + exception.Message;
                    return View();
                }
            }
            LoadData();
            return View(model);
        }

        [HttpPost]
        public JsonResult Delete(int ID)
        {
            try
            {
                using (var db = new MyDbDataContext())
                {
                    var del = db.Rooms.FirstOrDefault(c => c.ID == ID);
                    if (del != null)
                    {
                        db.RoomGalleries.DeleteAllOnSubmit(db.RoomGalleries.Where(a => a.RoomId == del.ID).ToList());

                        db.Rooms.DeleteOnSubmit(del);
                        db.SubmitChanges();
                        return Json(new { Result = "OK", Message = "Delete successful" });
                    }
                    return Json(new { Result = "ERROR", Message = "Room is not exist" });
                }
            }
            catch (Exception ex)
            {
                return Json(new { Result = "ERROR", Message = ex.Message });
            }
        }
        public void LoadData()
        {

            using (var db = new MyDbDataContext())
            {
                int menuId = 0;
                var listHotel = new List<SelectListItem>();
                //var listHotels =
                //    db.Hotels.Select(
                //        a =>
                //            new SelectListItem
                //                { Text = a.HotelName, Value = a.HotelId.ToString(CultureInfo.InvariantCulture) }).ToList();


                var listHotels = menuId == 0
                    ? db.ListHotels.Join(db.Menus.Where(m => m.LanguageID == Request.Cookies["lang_client"].Value),
                        a => a.MenuID, b => b.ID, (a, b) => new { a, b }).ToList()
                    : db.ListHotels.Join(
                        db.Menus.Where(m => m.ID == menuId && m.LanguageID == Request.Cookies["lang_client"].Value),
                        a => a.MenuID, b => b.ID, (a, b) => new { a, b }).ToList();

                var records = listHotels.Select(a => new SelectListItem()
                {
                    Text = a.a.HotelName,
                    Value = a.a.ID.ToString(CultureInfo.InvariantCulture),

                }).ToList();

                listHotel.Add(new SelectListItem()
                {

                    Text = "Select a hotel",
                    Value = "0"
                });
                listHotel.AddRange(records);
                ViewBag.ListHotel = listHotel;

            }

            //ViewBag.ListHotel = CommentController.SelectListHotel();
        }

    }
}