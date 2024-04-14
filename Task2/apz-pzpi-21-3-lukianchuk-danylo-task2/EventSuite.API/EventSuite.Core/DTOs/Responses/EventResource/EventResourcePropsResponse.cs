using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.EventResource
{
    public class EventResourcePropsResponse
    {
        public int Id { get; set; }
        public int Amount { get; set; }
        public int? EventId { get; set; }
        public int? ResourceId { get; set; }
    }
}
