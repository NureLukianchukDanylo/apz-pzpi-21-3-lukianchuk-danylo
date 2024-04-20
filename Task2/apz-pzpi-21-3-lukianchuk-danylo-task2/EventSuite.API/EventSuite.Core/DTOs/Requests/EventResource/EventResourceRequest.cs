using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Requests.EventResource
{
    public class EventResourceRequest
    {
        public int Amount { get; set; }
        public int? EventId { get; set; }
        public int? ResourceId { get; set; }
    }
}
