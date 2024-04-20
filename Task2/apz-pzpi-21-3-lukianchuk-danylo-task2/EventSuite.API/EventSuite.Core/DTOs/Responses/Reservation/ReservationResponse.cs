using EventSuite.Core.DTOs.Responses.Event;
using EventSuite.Core.DTOs.Responses.Venue;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.Reservation
{
    public class ReservationResponse
    {
        public int Id { get; set; }
        public string? Description { get; set; }
        public VenuePropsResponse Venue { get; set; }
        public EventPropsResponse Event { get; set; }
    }
}
