using EventSuite.Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Requests.Venue
{
    public class VenueRequest
    {
        public VenueType Type { get; set; }
        public string? Description { get; set; }
        public double? Square { get; set; }
        public int MaxSize { get; set; }
        public string? Services { get; set; }
        public string? RoomNumber { get; set; }
        public int Floor { get; set; }
        public int? MallId { get; set; }
    }
}
