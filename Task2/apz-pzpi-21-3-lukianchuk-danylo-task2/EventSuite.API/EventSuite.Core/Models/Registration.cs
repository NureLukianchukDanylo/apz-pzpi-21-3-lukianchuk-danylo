using EventSuite.Core.DTOs.Responses.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Models
{
    public class Registration: BaseEntity
    {
        public int? EventId { get; set; }
        public virtual Event? Event { get; set; }
        public string? UserId { get; set; }
        public virtual User? User { get; set; }
        public virtual ICollection<Ticket>? Tickets { get; set; }
    }
}
