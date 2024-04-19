using EventSuite.Core.DTOs.Responses.EventResource;
using EventSuite.Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.Resource
{
    public class ResourceResponse
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string Type { get; set; }
        public decimal Price { get; set; }
        public virtual ICollection<EventResourcePropsResponse>? EventResources { get; set; }
    }
}
