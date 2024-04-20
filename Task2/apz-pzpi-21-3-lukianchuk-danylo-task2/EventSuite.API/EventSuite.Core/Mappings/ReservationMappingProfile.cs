using AutoMapper;
using EventSuite.Core.DTOs.Requests.Reservation;
using EventSuite.Core.DTOs.Responses.Reservation;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Mappings
{
    public class ReservationMappingProfile: Profile
    {
        public ReservationMappingProfile() 
        {
            CreateMap<Reservation, ReservationPropsResponse>().ReverseMap();
            CreateMap<Reservation, ReservationResponse>().ReverseMap();
            CreateMap<ReservationRequest, Reservation>().ReverseMap();
        }
    }
}
