using ProjectLibrary.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TeamplateHotel.Models
{
    public class ShowDetailHotel
    {
        public List<ListHotel> ListHotels { get; set; }
        public ListHotel ListHotel { get; set; }
        public List<HotelGallery> HotelGalleries { get; set; }
        public List<Room> Rooms { get; set; }
        public List<RoomGallery> RoomGalleries { get; set; }
        public string AliasMenu { get; set; }
        public string Title { get; set; }
        public float Price { get; set; }
    }
}