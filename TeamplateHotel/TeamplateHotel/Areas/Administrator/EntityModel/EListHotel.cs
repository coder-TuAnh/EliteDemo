using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TeamplateHotel.Areas.Administrator.EntityModel
{
    public class EListHotel
    {
        public int ID { get; set; }
        public int LocationId { get; set; }

        [DisplayName("Menu")]
        [Range(1, int.MaxValue, ErrorMessage = "Please select a Menu")]
        public int MenuID { get; set; }

        [DisplayName("Hotel Name")]
        [Required(ErrorMessage = "Please enter hotel name")]
        public string HotelName { get; set; }

        [DisplayName("Alias")]
        public string Alias { get; set; }

        [DisplayName("Image")]
        [Required(ErrorMessage = "Please select image")]
        public string ImageHotel { get; set; }

        [DisplayName("Price from")]
        [Range(1, double.MaxValue, ErrorMessage = "Please enter Price from.")]
        public float PriceFrom { get; set; }

        [DisplayName("Location")]
        [Required(ErrorMessage = "Please enter location")]
        public string LocationHotel { get; set; }

        [DisplayName("Address")]
        [Required(ErrorMessage = "Please enter Address")]
        public string Address { get; set; }


        [DisplayName("Status")]
        public bool Status { get; set; }

        [DisplayName("Index")]
        public int Index { get; set; }

        [DisplayName("Star")]
        [Range(1, int.MaxValue, ErrorMessage = "Please select Star.")]
        public int Star { get; set; }

        public bool Home { get; set; }

        public string Description { get; set; }
        public string MetaKeyword { get; set; }
        public string MetaDescription { get; set; }
        public string Facility { get; set; }
        public string Content { get; set; }
        public string Note { get; set; }

        public List<EGalleryITem> EGalleryITems { get; set; }
        public class EGalleryITem
        {
            public string Image { get; set; }
        }
    }
}