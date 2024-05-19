using AutoMapper;
using EventSuite.Core.DTOs.Requests.Ticket;
using EventSuite.Core.DTOs.Responses.Ticket;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Mappings
{
    public class TicketMappingProfile: Profile
    {
        public TicketMappingProfile()
        {
            CreateMap<Ticket, TicketPropsResponse>().ReverseMap();
            CreateMap<TicketRequest, Ticket>().ReverseMap();
            CreateMap<Ticket, TicketResponse>().ReverseMap();
        }
    }
}
