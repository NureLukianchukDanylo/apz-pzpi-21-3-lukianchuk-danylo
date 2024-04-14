using EventSuite.Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Models
{
    public class Resource: BaseEntity
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public ResourceType Type { get; set; }
        public decimal Price { get; set; }
        public virtual ICollection<EventResource>? EventResources { get; set; }
    }
}
