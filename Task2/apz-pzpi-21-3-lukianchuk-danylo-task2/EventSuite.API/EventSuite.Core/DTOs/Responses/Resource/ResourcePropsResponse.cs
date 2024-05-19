using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.Resource
{
    public class ResourcePropsResponse
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public ResourceType Type { get; set; }
        public decimal Price { get; set; }
    }
}
