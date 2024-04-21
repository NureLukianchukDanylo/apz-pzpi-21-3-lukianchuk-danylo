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
            CreateMap<Event, FinishedEventResponse>()
                .ForMember(dest => dest.Visitors, opt => opt.MapFrom(src => src.PaidEntrance ? src.Registrations.Sum(x => x.Tickets.Count()) : src.Registrations.Count()))
                .ForMember(dest => dest.TicketsIncome, opt => opt.MapFrom(src => src.PaidEntrance ? src.Registrations.Sum(x => x.Tickets.Sum(x => x.Price)) : 0))
                .ForMember(dest => dest.ResourcesUsed, opt => opt.MapFrom(src => src.EventResources.Count()))
                .ForMember(dest => dest.ResourcesSpendings, opt => opt.MapFrom(src => src.EventResources.Sum(x => x.Amount * x.Resource.Price)))
                .ForMember(dest => dest.RoomsUsed, opt => opt.MapFrom(src => src.Reservations.Count()))
                .ReverseMap();
        }
    }
}
