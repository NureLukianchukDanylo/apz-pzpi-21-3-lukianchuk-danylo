using AutoMapper;
using EventSuite.Core.DTOs.Responses.EventResource;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Mappings
{
    public class EventResourceMappingProfile: Profile
    {
        public EventResourceMappingProfile()
        {
            CreateMap<EventResource, EventResourcePropsResponse>();
        }
    }
}
