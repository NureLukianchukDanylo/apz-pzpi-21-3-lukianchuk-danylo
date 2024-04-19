using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.Registration
{
    public class RegistrationPropsResponse
    {
        public int Id { get; set; }
        public int? EventId { get; set; }
        public string? UserId { get; set; }
        public DateTime Date { get; set; }
    }
}
