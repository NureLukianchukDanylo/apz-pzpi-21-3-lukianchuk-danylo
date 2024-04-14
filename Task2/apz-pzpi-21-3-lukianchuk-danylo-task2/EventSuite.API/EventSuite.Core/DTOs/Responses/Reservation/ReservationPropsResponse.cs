using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.Reservation
{
    public class ReservationPropsResponse
    {
        public int Id { get; set; }
        public string? Description { get; set; }
        public int? VenueId { get; set; }
    }
}
