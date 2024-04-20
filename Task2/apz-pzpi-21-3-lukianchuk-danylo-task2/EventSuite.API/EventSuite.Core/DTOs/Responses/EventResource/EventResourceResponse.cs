using EventSuite.Core.DTOs.Responses.Event;
using EventSuite.Core.DTOs.Responses.Resource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.EventResource
{
    public class EventResourceResponse
    {
        public int Id { get; set; }
        public int Amount { get; set; }
        public EventPropsResponse Event {  get; set; }
        public ResourcePropsResponse Resource { get; set; }
    }
}
