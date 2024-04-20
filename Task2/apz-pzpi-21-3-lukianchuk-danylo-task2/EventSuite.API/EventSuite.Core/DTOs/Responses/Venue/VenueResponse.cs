using EventSuite.Core.DTOs.Responses.Mall;
using EventSuite.Core.DTOs.Responses.Reservation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.Venue
{
    public class VenueResponse
    {
        public int Id { get; set; }
        public string? Type { get; set; }
        public string? Description { get; set; }
        public double? Square { get; set; }
        public int MaxSize { get; set; }
        public string? Services { get; set; }
        public string? RoomNumber { get; set; }
        public int Floor { get; set; }
        public MallPropsResponse Mall { get; set; }
        public virtual ICollection<ReservationPropsResponse> Reservations { get; set; }
    }
}
