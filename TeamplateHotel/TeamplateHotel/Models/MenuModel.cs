using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TeamplateHotel.Models
{
    public class MenuModel
    {
        public int ID { get; set; }
        public string LanguageID { get; set; }
        public string Title { get; set; }
        public string Alias { get; set; }
        public int? ParentID { get; set; }
        public int Type { get; set; }
        public int? Index { get; set; }
        public int Location { get; set; }
        public int Level { get; set; }
        public string Link { get; set; }
        public string MetaTitle { get; set; }
        public string MetaDescription { get; set; }
        public bool Status { get; set; }
        public string Image { get; set; }
        public bool? Showhome { get; set; }
        public string Description { get; set; }
        public string Image_icon { get; set; }
     
    }
}