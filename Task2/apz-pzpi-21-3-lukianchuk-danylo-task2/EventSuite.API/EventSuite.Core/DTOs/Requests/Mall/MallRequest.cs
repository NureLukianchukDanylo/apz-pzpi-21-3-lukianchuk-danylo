using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Requests.Mall
{
    public class MallRequest
    {
        public string? Name { get; set; }
        public double? Square { get; set; }
        public int? LocationId { get; set; }
    }
}
