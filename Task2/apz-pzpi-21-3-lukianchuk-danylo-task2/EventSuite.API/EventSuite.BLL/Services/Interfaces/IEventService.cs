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
        Task<IEnumerable<Event>> GetEventsByUserIdAsync(string id);
        /*Task<IEnumerable<Event>> GetEventsByLocationAsync(Location location);
        Task<IEnumerable<Event>> GetEventsByVenueTypeAsync(VenueType venueType);
        Task<IEnumerable<Event>> GetEventsByTicketTypeAsync(TicketType ticketType);
        Task<IEnumerable<Event>> GetEventsByResourceTypeAsync(ResourceType resourceType);*/
    }
}
