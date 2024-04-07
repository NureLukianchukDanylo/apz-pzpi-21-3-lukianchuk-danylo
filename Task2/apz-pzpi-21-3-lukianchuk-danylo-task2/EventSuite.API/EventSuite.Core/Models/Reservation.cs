using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Models
{
    public class Reservation: BaseEntity
    {
        public string? Description { get; set; }
        public int? EventId { get; set; }
        public virtual Event? Event { get; set; }
        public int? VenueId { get; set; }
        public virtual Venue? Venue { get; set; }
    }
}
