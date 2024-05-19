using AutoMapper;
using EventSuite.Core.DTOs.Requests.Resource;
using EventSuite.Core.DTOs.Responses.Resource;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Mappings
{
    public class ResourceMappingProfile: Profile
    {
        public ResourceMappingProfile()
        {
            CreateMap<Resource, ResourceResponse>().ReverseMap();
            CreateMap<ResourceRequest, Resource>().ReverseMap();
            CreateMap<Resource, ResourcePropsResponse>().ReverseMap();
        }
    }
}
