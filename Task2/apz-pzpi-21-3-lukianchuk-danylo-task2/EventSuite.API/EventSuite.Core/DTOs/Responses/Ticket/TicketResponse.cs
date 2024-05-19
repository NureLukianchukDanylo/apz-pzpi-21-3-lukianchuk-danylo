using EventSuite.Core.DTOs.Responses.Registration;
using EventSuite.Core.DTOs.Responses.SmartBracelet;
using EventSuite.Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.Ticket
{
    public class TicketResponse
    {
        public int Id { get; set; }
        public decimal Price { get; set; }
        public TicketType? Type { get; set; }
        public virtual RegistrationPropsResponse Registration { get; set; }
        public virtual SmartBraceletResponse SmartBracelet { get; set; }
    }
}
