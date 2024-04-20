using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Requests.Reservation
{
    public class ReservationRequest
    {
        public string? Description { get; set; }
        public int? VenueId { get; set; }
        public int? EventId { get; set; }
    }
}
