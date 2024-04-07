using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Models
{
    public class Venue: BaseEntity
    {
        public string? Type { get; set; }
        public string? Description { get; set; }
        public double? Square { get; set; }
        public int Size { get; set; }
        public string? Services { get; set; }
        public string? RoomNumber { get; set; }
        public int Floor { get; set; }
        public int? MallId { get; set; }
        public virtual Mall? Mall { get; set; }
        public virtual ICollection<Reservation>? Reservations { get; set; }
    }
}
