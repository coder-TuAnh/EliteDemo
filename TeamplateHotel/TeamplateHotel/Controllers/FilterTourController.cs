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

        private const int FILTER_PARAM = -1;

        //
        // GET: /FilterTour/
        public ActionResult ViewFilter(SearchTourModelInput input)
        {
            string lan = Request.Cookies["LanguageID"].Value;

            ViewBag.MenuId = input.MenuId;

            var db = new MyDbDataContext();
            var queryMenus = db.Menus;
            List<Menu> listDes = queryMenus.Where(a => a.Type == SystemMenuType.Tour && a.Status && a.LanguageID == lan).ToList();
            List<Menu> listCate = queryMenus.Where(a => a.Type == SystemMenuType.Activities && a.Status && a.LanguageID == lan).ToList();

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
            string lan = Request.Cookies["LanguageID"].Value;

            var db = new MyDbDataContext();

            var queryTours = db.Tours;
            var queryMenus = db.Menus;

            Expression<Func<Tour, bool>> expression = tour => tour.Status && tour.Combo == false && tour.LanguageCode == lan;
            // var getall = queryTours.Where(a => a.MenuID == 50 && a.ActivitiesID == 3141).FirstOrDefault();
            if (!string.IsNullOrEmpty(model.SearchString))
            {
                expression = expression.AndAlso(tour => tour.Title.ToLower().Replace(" ", string.Empty).Contains(model.SearchString.ToLower().Replace(" ", string.Empty)));
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

            if (model.Sort.Recommend == FILTER_PARAM)
            {
                expression = expression.AndAlso(tour => tour.Like.Value);
            }

            var getDataQuery = queryTours.Where(expression);

            if (model.Sort.Price == FILTER_PARAM)
            {
                getDataQuery = getDataQuery.OrderBy(a => a.PriceSale);
            }
            else if (model.Sort.Price == FILTER_PARAM * -1)
            {
                getDataQuery = getDataQuery.OrderByDescending(a => a.PriceSale);
            }
            else
            {
                getDataQuery = getDataQuery.OrderByDescending(a => a.ID);
            }


            //OrderByDescending(a => a.ID);
            var getData = getDataQuery.ToPagedList(model.Paging.Page, model.Paging.PageSize).Select(x => new TourModel()
            {
                ID = x.ID,
                Image = x.Image,
                Alias = x.Alias,
                MenuAlias = queryMenus.Where(a => a.ID == x.MenuID).Select(a => a.Alias).FirstOrDefault().ToString(),
                Title = x.Title,
                Description = x.Description,
                Price = x.Price,
                PriceSale = x.PriceSale,
                Location = x.Location
            }).ToList();
            var total = getDataQuery.Count();

            //var TitleMenu = getData.Where(a => a.ID == a.MenuID).Select(a => a.Alias).FirstOrDefault().ToString();

            return Json(new { data = getData, count = total, status = true }, JsonRequestBehavior.AllowGet);
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
        
    }
}
