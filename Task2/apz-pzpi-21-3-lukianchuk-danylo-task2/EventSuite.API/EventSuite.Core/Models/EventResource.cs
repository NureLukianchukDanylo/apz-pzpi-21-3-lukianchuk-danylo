using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Models
{
    public class EventResource: BaseEntity
    {
        public int Amount { get; set; }
        public int? EventId { get; set; }
        public virtual Event? Event { get; set; }
        public int? ResourceId { get; set; }
        public virtual Resource? Resource { get; set; }
    }
}
