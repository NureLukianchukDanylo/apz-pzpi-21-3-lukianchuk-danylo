using EventSuite.Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Requests.Resource
{
    public class ResourceRequest
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public ResourceType Type { get; set; }
        public decimal Price { get; set; }
    }
}
