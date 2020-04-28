using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ProjectLibrary.Database;

namespace TeamplateHotel.Models
{
    public class FilterTourModel
    {
        public Menu MenuDes { get; set; }
        public List<Menu> ListMenuDes { get; set; } 
        public Menu MenuCate { get; set; }
        public List<Menu> ListMenuCate { get; set; }
        public List<Tour> result { get; set; }
    }
}