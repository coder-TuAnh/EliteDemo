using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using Microsoft.Ajax.Utilities;
using Microsoft.Data.Edm.Csdl;
using PagedList;
using ProjectLibrary.Config;
using ProjectLibrary.Database;
using TeamplateHotel.Models;
using Expression = System.Linq.Expressions.Expression;

namespace TeamplateHotel.Controllers
{
    public class FilterTourController : Controller
    {
        //
        // GET: /FilterTour/
        public ActionResult ViewFilter()
        {
            var db = new MyDbDataContext();
            var queryMenus = db.Menus;
            List<Menu> listDes = queryMenus.Where(a => a.Type == SystemMenuType.Tour && a.Status && a.LanguageID == "en").ToList();
            List<Menu> listCate = queryMenus.Where(a => a.Type == SystemMenuType.Activities && a.Status && a.LanguageID == "en").ToList();

            FilterTourModel filterTourModel = new FilterTourModel()
            {
                ListMenuCate = listCate,
                ListMenuDes = listDes,
            };
            return View(filterTourModel);
        }

        [HttpPost]
        public JsonResult FilterData(SearchInputModel model)
        {
            var db = new MyDbDataContext();

            var queryTours = db.Tours;
            var queryMenus = db.Menus;

            Expression<Func<Tour, bool>> expression = tour => tour.Status && tour.LanguageCode == "en";
           // var getall = queryTours.Where(a => a.MenuID == 50 && a.ActivitiesID == 3141).FirstOrDefault();
            if (!string.IsNullOrEmpty(model.SearchString))
            {
                expression = expression.AndAlso(tour =>
                    tour.Title.ToLower().RemoveWhiteSpaces()
                        .Contains(model.SearchString.ToLower().RemoveWhiteSpaces()));
            }
            else 
            {

                if (model.Filter.Menus != null)
                {
                    expression = expression.AndAlso(tour => model.Filter.Menus.Contains(tour.MenuID));
                }

                if (model.Filter.Activities != null)
                {  
                    expression = expression.AndAlso(tour => model.Filter.Activities.Contains(tour.ActivitiesID.Value));

                }
                
            }

            var getData = queryTours.Where(expression).OrderByDescending(a => a.ID).ToPagedList(model.Paging.Page , model.Paging.PageSize).Select(x=>new TourModel()
            {

                ID = x.ID,
                Image = x.Image,
                Alias = x.Alias,
                MenuAlias = queryMenus.Where(a => a.ID == x.MenuID).Select(a=>a.Alias).FirstOrDefault().ToString(),
                Title = x.Title,
                Description = x.Description,
                Price = x.Price,
                PriceSale = x.PriceSale,
                Location = x.Location
            }).ToList();

            return Json(new {data = getData, status = true }, JsonRequestBehavior.AllowGet);
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
 

    }

    public static class Extension
    {
        public static Expression<Func<T, bool>> AndAlso<T>(
            this Expression<Func<T, bool>> expr1,
            Expression<Func<T, bool>> expr2)
        {
            // need to detect whether they use the same
            // parameter instance; if not, they need fixing
            ParameterExpression param = expr1.Parameters[0];
            if (ReferenceEquals(param, expr2.Parameters[0]))
            {
                // simple version
                return Expression.Lambda<Func<T, bool>>(
                    Expression.AndAlso(expr1.Body, expr2.Body), param);
            }
            // otherwise, keep expr1 "as is" and invoke expr2
            return Expression.Lambda<Func<T, bool>>(
                Expression.AndAlso(
                    expr1.Body,
                    Expression.Invoke(expr2, param)), param);
        }
        public static string RemoveWhiteSpaces(this string str)
        {
            return Regex.Replace(str, @"\s+", String.Empty);
        }
    }
}
