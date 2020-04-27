using ProjectLibrary.Config;
using ProjectLibrary.Database;
using ProjectLibrary.Utility;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TeamplateHotel.Areas.Administrator.EntityModel;

namespace TeamplateHotel.Areas.Administrator.Controllers
{
    public class ListHotelController : BaseController
    {
        //
        // GET: /Administrator/ListHotel/

        public ActionResult Index()
        {
            ViewBag.Messages = CommentController.Messages(TempData["Messages"]);
            ViewBag.Title = "Hotels";
            LoadData();
            return View();
        }
        [HttpPost]
        public ActionResult UpdateIndex()
        {
            int menuId;
            int.TryParse(Request.Params["ListMenu"], out menuId);

            if (menuId == 0)
            {

                TempData["Messages"] = "Please select a menu.";
                return RedirectToAction("Index");
            }

            using (var db = new MyDbDataContext())
            {
                var records = db.ListHotels.Where(r => r.MenuID == menuId).ToList();
                foreach (var record in records)
                {
                    var itemHotel = Request.Params[string.Format("Sort[{0}].Index", record.ID)];
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
        public JsonResult List(int menuId = 0, int locationId = 0, int jtStartIndex = 0, int jtPageSize = 0,
            string jtSorting = null)
        {
            //End check
            try
            {
                var db = new MyDbDataContext();
                //var listHotel = menuId == 0
                //    ? db.Hotels.ToList()
                //    : db.Hotels.Where(a => a.MenuId == menuId).ToList();

                if (menuId != 0)
                {
                    var listHotel = menuId == 0
                        ? db.ListHotels.Join(db.Menus.Where(m => m.LanguageID == Request.Cookies["lang_client"].Value),
                            a => a.MenuID, b => b.ID, (a, b) => new { a, b }).ToList()
                        : db.ListHotels.Join(
                            db.Menus.Where(m => m.ID == menuId && m.LanguageID == Request.Cookies["lang_client"].Value),
                            a => a.MenuID, b => b.ID, (a, b) => new { a, b }).ToList();

                    var records = listHotel.Select(a => new
                    {
                        ID = a.a.ID,
                        NameMenu = a.b.Title,
                        HotelName = a.a.HotelName,
                        Home = a.a.Home,
                        Index = a.a.Index,
                        Status = a.a.Status,
                    }).OrderByDescending(a => a.ID).Skip(jtStartIndex).Take(jtPageSize).ToList();
                    //Return result to jTable
                    return Json(new { Result = "OK", Records = records, TotalRecordCount = listHotel.Count },
                        JsonRequestBehavior.AllowGet);
                }
                else
                {

                    var listHotel2 = locationId == 0
                        ? db.ListHotels.Join(db.Menus.Where(m => m.LanguageID == Request.Cookies["lang_client"].Value),
                            a => a.LocationId, b => b.ID, (a, b) => new { a, b }).ToList()
                        : db.ListHotels.Join(
                            db.Menus.Where(m =>
                                m.ID == locationId && m.LanguageID == Request.Cookies["lang_client"].Value),
                            a => a.LocationId, b => b.ID, (a, b) => new { a, b }).ToList();

                    var records2 = listHotel2.Select(a => new
                    {
                        ID = a.a.ID,
                        HotelName = a.a.HotelName,
                        Home = a.a.Home,
                        NameMenu = a.b.Title,
                        Index = a.a.Index,
                        Status = a.a.Status,
                    }).OrderByDescending(a => a.ID).Skip(jtStartIndex).Take(jtPageSize).ToList();
                    //Return result to jTable
                    return Json(new { Result = "OK", Records = records2, TotalRecordCount = listHotel2.Count },
                        JsonRequestBehavior.AllowGet);

                }

            }
            catch (Exception ex)
            {
                return Json(new { Result = "ERROR", Message = ex.Message }, JsonRequestBehavior.AllowGet);
            }

        }


        [HttpGet]
        public ActionResult Create()
        {
            ViewBag.Title = "Add new hotel";
            LoadData();
            var hotel = new EListHotel();

            return View(hotel);
        }
        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Create(EListHotel model)
        {
            //End check
            using (var db = new MyDbDataContext())
            {

                //Kiểm tra xem alias thuộc hotel này đã tồn tại chưa
                var checkAlias =
                    db.ListHotels.FirstOrDefault(
                        m => m.Alias == model.Alias && m.MenuID == model.MenuID);
                if (checkAlias != null)
                {
                    ModelState.AddModelError("AliasRoom", "Hotel is exist.");
                }
                //Kiểm tra xem đã chọn đến chuyên mục con cuối cùng chưa
                if (db.Menus.Any(a => a.ParentID == model.MenuID))
                {
                    ModelState.AddModelError("MenuId", "You haven't selected the last tour category");
                }
                if (!string.IsNullOrEmpty(model.HotelName))
                {
                    model.Alias = StringHelper.ConvertToAlias(model.HotelName);
                }
                if (ModelState.IsValid)
                {
                    if (string.IsNullOrEmpty(model.Alias))
                    {
                        model.Alias = StringHelper.ConvertToAlias(model.Alias);
                    }
                    try
                    {
                        var hotel = new ListHotel
                        {
                            CreateDate = DateTime.Now,
                            MenuID = model.MenuID,
                            LocationId = model.LocationId,
                            HotelName = model.HotelName,
                            Alias = model.Alias,
                            ImageHotel = model.ImageHotel,
                            PriceFrom = model.PriceFrom,
                            Description = model.Description,
                            Address = model.Address,
                            Status = model.Status,
                            Index = model.Index,
                            Star = model.Star,
                            Home = model.Home,
                            LocationHotel = model.LocationHotel,
                            MetaKeyword = model.MetaKeyword,
                            MetaDescription = model.MetaDescription,
                            Facility = model.Facility,
                            Content = model.Content,
                            Note = model.Note,
                        };

                        db.ListHotels.InsertOnSubmit(hotel);
                        db.SubmitChanges();

                        //Thêm hình ảnh cho tour
                        if (model.EGalleryITems != null)
                        {
                            foreach (EListHotel.EGalleryITem itemGallery in model.EGalleryITems)
                            {
                                var gallery = new HotelGallery
                                {
                                    ImageLage = itemGallery.Image,
                                    ImageThump = ReturnSmallImage.GetImageSmall(itemGallery.Image),
                                    HotelId = hotel.ID,
                                };
                                db.HotelGalleries.InsertOnSubmit(gallery);
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
            ListHotel detailHotel = db.ListHotels.FirstOrDefault(a => a.ID == id);
            if (detailHotel == null)
            {
                TempData["Messages"] = "Hotel is not exist";
                return RedirectToAction("Index");
            }
            ViewBag.Title = "Update Hotel";
            LoadData();
            EListHotel hotel = new EListHotel
            {
                ID = detailHotel.ID,
                MenuID = detailHotel.MenuID,
                LocationId = detailHotel.LocationId,
                HotelName = detailHotel.HotelName,
                Alias = detailHotel.Alias,
                ImageHotel = detailHotel.ImageHotel,
                PriceFrom = (float)detailHotel.PriceFrom,
                Description = detailHotel.Description,
                LocationHotel = detailHotel.LocationHotel,
                Status = detailHotel.Status,
                Index = (int)detailHotel.Index,
                Star = detailHotel.Star,
                Address = detailHotel.Address,
                Home = detailHotel.Home,
                MetaKeyword = detailHotel.MetaKeyword,
                MetaDescription = detailHotel.MetaDescription,
                Facility = detailHotel.Facility,
                Content = detailHotel.Content,
                Note = detailHotel.Note,
            };
            //lấy danh sách hình ảnh

            hotel.EGalleryITems = db.HotelGalleries.Where(a => a.HotelId == detailHotel.ID).Select(a => new EListHotel.EGalleryITem
            {
                Image = a.ImageLage
            }).ToList();

            return View(hotel);
        }
        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Update(EListHotel model)
        {

            //Kiểm tra xem alias đã tồn tại chưa
            var db = new MyDbDataContext();
            var checkAlias =
                db.ListHotels.FirstOrDefault(
                    m => m.Alias == model.Alias && m.MenuID == model.MenuID && m.ID != model.ID);
            if (checkAlias != null)
            {
                ModelState.AddModelError("AliasRoom", "Hotel is exist.");
            }
            //Kiểm tra xem đã chọn đến chuyên mục con cuối cùng chưa
            if (db.Menus.Any(a => a.ParentID == model.MenuID))
            {
                ModelState.AddModelError("MenuId", "You haven't selected the last tour category");
            }
            if (string.IsNullOrEmpty(model.HotelName))
            {
                model.Alias = StringHelper.ConvertToAlias(model.HotelName);
            }
            if (ModelState.IsValid)
            {
                if (string.IsNullOrEmpty(model.Alias))
                {
                    model.Alias = StringHelper.ConvertToAlias(model.Alias);
                }
                try
                {
                    var hotel = db.ListHotels.FirstOrDefault(b => b.ID == model.ID);
                    if (hotel != null)
                    {
                        hotel.MenuID = model.MenuID;
                        hotel.LocationId = model.LocationId;
                        hotel.HotelName = model.HotelName;
                        hotel.Alias = model.Alias;
                        hotel.ImageHotel = model.ImageHotel;
                        hotel.PriceFrom = model.PriceFrom;
                        hotel.Description = model.Description;
                        hotel.LocationHotel = model.LocationHotel;
                        hotel.Status = model.Status;
                        hotel.Index = model.Index;
                        hotel.Star = model.Star;
                        hotel.Address = model.Address;
                        hotel.Home = model.Home;
                        hotel.MetaKeyword = model.MetaKeyword;
                        hotel.MetaDescription = model.MetaDescription;
                        hotel.Facility = model.Facility;
                        hotel.Content = model.Content;
                        hotel.Note = model.Note;

                        db.SubmitChanges();

                        //xóa gallery 
                        db.HotelGalleries.DeleteAllOnSubmit(db.HotelGalleries.Where(a => a.HotelId == hotel.ID).ToList());
                        //Thêm gallery mới
                        if (model.EGalleryITems != null)
                        {
                            foreach (EListHotel.EGalleryITem itemGallery in model.EGalleryITems)
                            {
                                var gallery = new HotelGallery
                                {
                                    ImageLage = itemGallery.Image,
                                    ImageThump = ReturnSmallImage.GetImageSmall(itemGallery.Image),
                                    HotelId = hotel.ID,
                                };
                                db.HotelGalleries.InsertOnSubmit(gallery);
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
                    var del = db.ListHotels.FirstOrDefault(c => c.ID == ID);
                    if (del != null)
                    {
                        //xóa hết hình ảnh của phòng này
                        db.HotelGalleries.DeleteAllOnSubmit(db.HotelGalleries.Where(a => a.HotelId == del.ID).ToList());
                        //Xoa het  phong cua hotel 
                        db.Rooms.DeleteAllOnSubmit(db.Rooms.Where(a => a.HotelId == del.ID).ToList());
                        db.ListHotels.DeleteOnSubmit(del);
                        db.SubmitChanges();
                        return Json(new { Result = "OK", Message = "Delete successful" });
                    }
                    return Json(new { Result = "ERROR", Message = "Hotel is not exist" });
                }
            }
            catch (Exception ex)
            {
                return Json(new { Result = "ERROR", Message = ex.Message });
            }
        }
       

        public void LoadData()
        {
            var listMenu = new List<SelectListItem>();
            listMenu.Add(new SelectListItem { Value = "0", Text = "---Select a menu---" });
            var getListMenu = new List<Menu>();
            getListMenu = MenuController.GetListMenu(SystemMenuLocation.MainMenu, Request.Cookies["lang_client"].Value).Where(a => a.Type == SystemMenuType.Hotel  && a.LanguageID == Request.Cookies["lang_client"].Value).ToList();
            foreach (var menu in getListMenu)
            {
                string subTitle = "";
                for (int i = 1; i <= menu.Level; i++)
                {
                    subTitle += "|--";
                }
                menu.Title = subTitle + menu.Title;
            }
            //getListMenu = GetListMenu().Where( a =>
            //  a.Type == SystemMenuType.Hotel).ToList();
            listMenu.AddRange(getListMenu.Select(a => new SelectListItem
            {
                Value =
                    a.ID.ToString(
                        CultureInfo.InvariantCulture),
                Text = a.Title
            }).ToList());
            ViewBag.ListMenu = listMenu;

            var listMenu2 = new List<SelectListItem>();
            listMenu2.Add(new SelectListItem { Value = "0", Text = "---Select a menu---" });
            var getListMenu2 = new List<Menu>();
            getListMenu2 = MenuController.GetListMenu(SystemMenuLocation.MainMenu, Request.Cookies["LanguageID"].Value).Where(a => a.Type == SystemMenuType.Tour).ToList();
            foreach (var menu in getListMenu2)
            {
                string subTitle = "";
                for (int i = 1; i <= menu.Level; i++)
                {
                    subTitle += "|--";
                }
                menu.Title = subTitle + menu.Title;
            }
            listMenu2.AddRange(getListMenu2.Select(a => new SelectListItem
            {
                Value =
                    a.ID.ToString(
                        CultureInfo.InvariantCulture),
                Text = a.Title
            }).ToList());
            ViewBag.ListMenuLocation = listMenu2;

            List<SelectListItem> listStar = new List<SelectListItem>();
            listStar.Add(new SelectListItem
            {
                Text = "Select star",
                Value = ""
            });
            listStar.Add(new SelectListItem
            {
                Text = "2",
                Value = "2"
            });
            listStar.Add(new SelectListItem
            {
                Text = "3",
                Value = "3"
            });
            listStar.Add(new SelectListItem
            {
                Text = "4",
                Value = "4"
            });
            listStar.Add(new SelectListItem
            {
                Text = "5",
                Value = "5"
            });
            ViewBag.ListStar = listStar;
        }

    }
}
