using EventSuite.Core.Extra;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.BLL.Services.Interfaces
{
    public interface IEventResourceService
    {
        Task<EventResource> CreateEventResourceAsync(EventResource eventResource);
        Task<EventResource> UpdateEventResourceAsync(int id, EventResource eventResource);
        Task<EventResource> GetEventResourceByIdAsync(int id);
        Task<IEnumerable<EventResource>> GetEventResourcesAsync(PageInfo pageInfo);
        Task<bool> DeleteEventResourceAsync(int id);
        Task<IEnumerable<EventResource>> GetEventResourcesByEventIdAsync(int eventId);
    }
}
