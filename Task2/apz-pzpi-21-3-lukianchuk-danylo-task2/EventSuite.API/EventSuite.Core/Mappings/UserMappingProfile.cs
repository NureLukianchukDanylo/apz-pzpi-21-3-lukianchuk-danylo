using AutoMapper;
using EventSuite.Core.DTOs.Requests.Auth;
using EventSuite.Core.DTOs.Requests.User;
using EventSuite.Core.DTOs.Responses.Auth;
using EventSuite.Core.DTOs.Responses.User;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Mappings
{
    public class UserMappingProfile: Profile
    {
        public UserMappingProfile() 
        {
            CreateMap<LoginRequest, User>().ReverseMap();
            CreateMap<RegisterRequest, User>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email)).ReverseMap();
            CreateMap<User, UserResponse>().ReverseMap();
            CreateMap<UpdateUserRequest, User>().ReverseMap();
        }
    }
}
