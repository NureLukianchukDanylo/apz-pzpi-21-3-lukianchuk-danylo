using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Requests.Event
{
    public class EventRequest
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public bool PaidEntrance { get; set; } = false;
        public int Size { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string? UserId { get; set; }
    }
}
