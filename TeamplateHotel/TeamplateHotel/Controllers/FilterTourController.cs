using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using Microsoft.Data.Edm.Csdl;
using PagedList;
using ProjectLibrary.Config;
using ProjectLibrary.Database;
using TeamplateHotel.Models;

namespace TeamplateHotel.Controllers
{
    public class FilterTourController : Controller
    {
        //
        // GET: /FilterTour/
        public ActionResult IndexFilter()
        {
            return View();
        }

        [HttpGet]
        public JsonResult ViewFilter(string input, int? page)
        
        {
            var db = new MyDbDataContext();

            var mapperConfig = new AutoMapper.MapperConfiguration(config =>
            {
                config.CreateMap<List<Tour>, List<TourModel>>();
            });
            var mapper = mapperConfig.CreateMapper();

            var queryTours = db.Tours;

            var queryMenus = db.Menus;

            List<Tour> tours = new List<Tour>();

            var listDes = queryMenus.Where(a => a.Type == SystemMenuType.Tour && a.Status && a.LanguageID == "en");
            var listCate = queryMenus.Where(a => a.Type == SystemMenuType.Activities && a.Status && a.LanguageID == "en");

            if (!String.IsNullOrEmpty(input))
            {
                tours = queryTours.Where(a => a.Title.ToLower() == input.ToLower()).ToList();
            }
            else
            {
                tours = queryTours.Where(a => a.LanguageCode == "en").ToList();

            }
            //Tour tours = new Tour {ID = 1, Title = "Hello"};

            var results = mapper.Map<List<Tour>, List<TourModel>>(tours);

            return Json(new { data = results, status = true }, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult Filter(string input, int menuId = 0, int desId = 0, int categoryId = 0)
        {
            var db = new MyDbDataContext();
            List<Tour> tours = new List<Tour>();
            switch (input != null)
            {
                case true:
                    tours = db.Tours.Where(a => a.Title.ToLower() == input.ToLower()).ToList();
                    break;
            }

            var data = tours;

            return Json(data, JsonRequestBehavior.AllowGet);
        }

        //static void MapperTour()
        //{
        //    var mapperConfig = new AutoMapper.MapperConfiguration(config =>
        //    {
        //        config.CreateMap<Tour, TourModel>();
        //    });
        //    var mapper = mapperConfig.CreateMapper();
        //}
    }
}
