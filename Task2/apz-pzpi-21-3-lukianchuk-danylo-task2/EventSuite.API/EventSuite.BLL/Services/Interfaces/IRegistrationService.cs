using EventSuite.Core.Extra;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.BLL.Services.Interfaces
{
    public interface IRegistrationService
    {
        Task<Registration> CreateRegistrationAsync(Registration registration);
        Task<Registration> UpdateRegistrationAsync(int id, Registration registration);
        Task<Registration> GetRegistrationByIdAsync(int id);
        Task<IEnumerable<Registration>> GetRegistrationsAsync(PageInfo pageInfo);
        Task<bool> DeleteRegistrationAsync(int id);
        Task<IEnumerable<Registration>> GetRegistrationsByEventIdAsync(int eventId);
        Task<IEnumerable<Registration>> GetRegistrationsByUserIdAsync(string userId);
    }
}
