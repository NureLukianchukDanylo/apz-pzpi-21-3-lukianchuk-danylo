using EventSuite.Core.DTOs.Responses.Event;
using EventSuite.Core.DTOs.Responses.EventResource;
using EventSuite.Core.DTOs.Responses.Ticket;
using EventSuite.Core.DTOs.Responses.User;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.Registration
{
    public class RegistrationResponse
    {
        public int Id { get; set; }
        public virtual EventPropsResponse Event { get; set; }
        public virtual UserResponse User { get; set; }
        public DateTime Date { get; set; }
        public int? TicketsAmount { get; set; }
        public virtual ICollection<TicketPropsResponse>? Tickets { get; set; }
    }
}
