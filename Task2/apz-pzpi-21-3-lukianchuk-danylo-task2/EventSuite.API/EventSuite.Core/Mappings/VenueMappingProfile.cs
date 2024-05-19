using AutoMapper;
using EventSuite.Core.DTOs.Requests.Venue;
using EventSuite.Core.DTOs.Responses.Venue;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Mappings
{
    public class VenueMappingProfile: Profile
    {
        public VenueMappingProfile() 
        {
            CreateMap<Venue, VenuePropsResponse>().ReverseMap();
            CreateMap<Venue, VenueResponse>().ReverseMap();
            CreateMap<Venue, VenueRequest>().ReverseMap();
        }
    }
}
