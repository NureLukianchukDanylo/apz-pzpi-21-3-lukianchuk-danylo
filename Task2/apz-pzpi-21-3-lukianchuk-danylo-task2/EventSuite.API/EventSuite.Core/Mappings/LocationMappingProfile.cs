using AutoMapper;
using EventSuite.Core.DTOs.Requests.Location;
using EventSuite.Core.DTOs.Responses.Location;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Mappings
{
    public class LocationMappingProfile: Profile
    {
        public LocationMappingProfile() 
        {
            CreateMap<LocationRequest, Location>().ReverseMap();
            CreateMap<Location, LocationResponse>().ReverseMap();
            CreateMap<Location, LocationPropsResponse>().ReverseMap();
        }
    }
}
