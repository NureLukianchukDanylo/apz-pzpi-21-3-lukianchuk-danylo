using AutoMapper;
using EventSuite.Core.DTOs.Requests.Mall;
using EventSuite.Core.DTOs.Responses.Mall;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Mappings
{
    public class MallMappingProfile: Profile
    {
        public MallMappingProfile() 
        {
            CreateMap<Mall, MallPropsResponse>().ReverseMap();
            CreateMap<Mall, MallResponse>().ReverseMap();
            CreateMap<MallRequest, Mall>().ReverseMap();
        }
    }
}
