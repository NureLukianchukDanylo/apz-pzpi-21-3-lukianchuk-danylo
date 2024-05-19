using EventSuite.Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.Ticket
{
    public class TicketPropsResponse
    {
        public int Id { get; set; }
        public decimal Price { get; set; }
        public TicketType? Type { get; set; }
    }
}
