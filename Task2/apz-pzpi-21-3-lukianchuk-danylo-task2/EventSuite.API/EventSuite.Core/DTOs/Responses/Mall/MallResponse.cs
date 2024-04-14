using EventSuite.Core.DTOs.Responses.Location;
using EventSuite.Core.DTOs.Responses.Venue;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.Mall
{
    public class MallResponse
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public double? Square { get; set; }
        public virtual LocationPropsResponse? Location { get; set; }
        public virtual ICollection<VenuePropsResponse>? Venues { get; set; }
    }
}
