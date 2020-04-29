using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TeamplateHotel.Models
{
    public class SearchInputModel
    {
        public SearchInputModel()
        {
            Filter = new Filter();
            Paging = new Paging();
            Sort = new Sort();
        }

        public string SearchString { get; set; }

        public Paging Paging { get; set; }
        public Filter Filter { get; set; }
        public Sort Sort { get; set; }
    }

    public class Paging
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
    }

    public class Filter
    {
     
        public List<int> Menus { get; set; }

        public List<int> Activities { get; set; }
    }

    public class Sort
    {
        public int Recommend { get; set; }
        public int Price { get; set; }
    }
}