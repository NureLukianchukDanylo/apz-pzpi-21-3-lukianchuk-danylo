using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Models
{
    public class Ticket: BaseEntity
    {
        public decimal Price { get; set; }
        public string? Type { get; set; }
        public int? RegistrationId { get; set; }
        public virtual Registration? Registration { get; set; }
    }
}
