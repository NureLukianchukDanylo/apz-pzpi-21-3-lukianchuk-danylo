using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Models
{
    public class Event: BaseEntity
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public bool PaidEntrance { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public virtual ICollection<Reservation> Reservations { get; set; }
        public string? UserId { get; set; }
        public virtual User? User { get; set; }
    }
}
