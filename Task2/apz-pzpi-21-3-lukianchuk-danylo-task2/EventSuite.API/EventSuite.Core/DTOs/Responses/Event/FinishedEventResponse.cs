using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.Event
{
    public class FinishedEventResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public bool PaidEntrance { get; set; }
        public int Size { get; set; }
        public int Visitors { get; set; }
        public decimal TicketsIncome { get; set; }
        public int ResourcesUsed { get; set; }
        public decimal ResourcesSpendings { get; set; }
        public int RoomsUsed { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}
