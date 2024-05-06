using AutoMapper;
using EventSuite.Core.DTOs.Requests.SmartBracelet;
using EventSuite.Core.DTOs.Responses.SmartBracelet;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Mappings
{
    public class SmartBraceletMappingProfile: Profile
    {
        public SmartBraceletMappingProfile()
        {
            CreateMap<SmartBracelet, SmartBraceletResponse>()
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status.ToString())).ReverseMap();
            CreateMap<SmartBraceletRequest, SmartBracelet>().ReverseMap();
        }
    }
}
