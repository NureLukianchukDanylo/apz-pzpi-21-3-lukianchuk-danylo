using EventSuite.Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Requests.SmartBracelet
{
    public class SmartBraceletRequest
    {
        public string? SerialNumber { get; set; }
        public SmartBraceletStatus Status { get; set; } = SmartBraceletStatus.Active;
        public DateTime? StartUsageDate { get; set; }
        public DateTime? EndUsageDate { get; set; }
        public double? AccessLatitude1 { get; set; }
        public double? AccessLatitude2 { get; set; }
        public double? AccessLongitude1 { get; set; }
        public double? AccessLongitude2 { get; set; }
        public double? CurrentLatitude { get; set; }
        public double? CurrentLongitude { get; set; }
    }
}
