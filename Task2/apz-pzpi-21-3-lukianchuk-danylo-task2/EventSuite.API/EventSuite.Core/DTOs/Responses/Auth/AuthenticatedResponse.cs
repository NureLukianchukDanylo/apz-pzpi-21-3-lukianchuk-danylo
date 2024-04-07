using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.DTOs.Responses.Auth
{
    public class AuthenticatedResponse
    {
        public string TokenType { get; set; }

        public string Token { get; set; }

        public DateTime Expiration { get; set; }

        public string RefreshToken { get; set; }

    }
}
