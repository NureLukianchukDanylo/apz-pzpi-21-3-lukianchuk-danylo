using AutoMapper;
using EventSuite.Core.DTOs.Requests.Registration;
using EventSuite.Core.DTOs.Responses.Registration;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Mappings
{
    public class RegistrationMappingProfile: Profile
    {
        public RegistrationMappingProfile()
        {
            CreateMap<Registration, RegistrationPropsResponse>()
                .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.DateCreated)).ReverseMap();
            CreateMap<Registration, RegistrationResponse>()
                .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.DateCreated))
                .ForMember(dest => dest.TicketsAmount, opt => opt.MapFrom(src => src.Tickets.Count())).ReverseMap();
            CreateMap<RegistrationRequest, Reservation>().ReverseMap();
        }
    }
}
