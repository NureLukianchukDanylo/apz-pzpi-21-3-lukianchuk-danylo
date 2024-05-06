using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Extra
{
    [Serializable]
    public class SmartBraceletException : Exception
    {

        public SmartBraceletException() { }

        public SmartBraceletException(string message) : base(message) { }
    }
}
