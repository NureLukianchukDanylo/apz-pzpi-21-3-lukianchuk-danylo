using AutoMapper;
using EventSuite.Core.DTOs.Requests.Event;
using EventSuite.Core.DTOs.Responses.Event;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Mappings
{
    public class EventMappingProfile : Profile
    {
        public EventMappingProfile()
        {
            CreateMap<Event, EventResponse>().ReverseMap();
            CreateMap<EventRequest, Event>().ReverseMap();
            CreateMap<Event, EventPropsResponse>().ReverseMap();
            CreateMap<Event, FinishedEventResponse>().ReverseMap();
        }
    }
}
