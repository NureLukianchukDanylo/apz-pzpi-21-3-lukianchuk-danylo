using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Models
{
    public class Mall: BaseEntity
    {
        public string? Name { get; set; }
        public double? Square { get; set; }
        public int? LocationId { get; set; }
        public virtual Location? Location { get; set; }
    }
}
