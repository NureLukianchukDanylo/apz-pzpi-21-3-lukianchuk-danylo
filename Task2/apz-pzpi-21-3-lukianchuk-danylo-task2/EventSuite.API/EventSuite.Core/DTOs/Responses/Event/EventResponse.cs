using EventSuite.Core.DTOs.Responses.EventResource;
using EventSuite.Core.DTOs.Responses.Registration;
using EventSuite.Core.DTOs.Responses.Reservation;
using EventSuite.Core.DTOs.Responses.User;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.Event
{
    public class EventResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public bool PaidEntrance { get; set; }
        public int Size { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public virtual ICollection<ReservationPropsResponse> Reservations { get; set; }
        public virtual ICollection<RegistrationPropsResponse> Registrations { get; set; }
        public virtual ICollection<EventResourcePropsResponse> EventResources { get; set; }
        public virtual UserResponse? User { get; set; }
    }
}
