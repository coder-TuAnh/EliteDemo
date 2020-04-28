using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ProjectLibrary.Database;

namespace TeamplateHotel.Models
{
      public class TourModel
    {
        public int ID { get; set; }
        public string LanguageCode { get; set; }
        public int MenuID { get; set; }
        public int? ActivitiesID { get; set; }
        public string Title { get; set; }
        public string Alias { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public int? Index { get; set; }
        public string MetaTitle { get; set; }
        public string MetaDescription { get; set; }
        public bool Status { get; set; }
        public bool? Hot { get; set; }
        public decimal PriceSale { get; set; }
        public decimal Price { get; set; }
        public bool? TourOther { get; set; }
        public bool? Time { get; set; }
        public bool Deal { get; set; }
        public bool? CheckCruise { get; set; }
        public bool? Like { get; set; }
        public string Location { get; set; }
        public string TourIncluded { get; set; }
        public string TourExcluded { get; set; }
        public bool? StatusPrice { get; set; }

    }
}