using EventSuite.Core.DTOs.Responses.Event;
using EventSuite.Core.Extra;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.BLL.Services.Interfaces
{
    public interface IEventService
    {
        Task<Event> CreateEventAsync(Event @event);
        Task<Event> UpdateEventAsync(int id, Event @event);
        Task<Event> GetEventByIdAsync(int id);
        Task<IEnumerable<Event>> GetEventsAsync(PageInfo pageInfo);
        Task<bool> DeleteEventAsync(int id);
        Task<IEnumerable<Event>> GetEventsByUserIdAsync(string userId);
        Task<IEnumerable<Event>> GetFinishedEventsByUserIdAsync(string userId, PageInfo pageInfo);
    }
}
