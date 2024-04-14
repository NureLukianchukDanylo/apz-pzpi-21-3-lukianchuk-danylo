using EventSuite.BLL.Services.Interfaces;
using EventSuite.Core.Extra;
using EventSuite.Core.Models;
using EventSuite.Core.Resources;
using EventSuite.DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.BLL.Services.Implementations
{
    public class EventService : IEventService
    {
        private readonly IUnitOfWork _unitOfWork;
        public EventService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<Event> CreateEventAsync(Event @event)
        {
            if (@event == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            if (!ValidateDates(@event))
                throw new ArgumentException(Resources.Get("Invalid dates"));
            var result = await _unitOfWork.Events.AddAsync(@event);
            await _unitOfWork.Events.SaveAsync();
            return result;
        }

        public async Task<bool> DeleteEventAsync(int id)
        {
            var @event = await _unitOfWork.Events.GetByIdAsync(id);
            var result = _unitOfWork.Events.Delete(@event);
            await _unitOfWork.Events.SaveAsync();
            return result;
        }

        public async Task<Event> GetEventByIdAsync(int id)
        {
            var result = await _unitOfWork.Events.GetByConditionAsync(x => x.Id == id, EntitySelector.EventSelector);
            return result.FirstOrDefault();
        }

        public async Task<IEnumerable<Event>> GetEventsAsync(PageInfo pageInfo)
        {
            return await _unitOfWork.Events.GetPageWithMultiplePredicatesAsync(null, pageInfo, EntitySelector.EventSelector);
        }

        public async Task<IEnumerable<Event>> GetEventsByUserIdAsync(string id)
        {
            return await _unitOfWork.Events.GetByConditionAsync(x => x.UserId == id, EntitySelector.EventSelector);
        }

        public async Task<Event> UpdateEventAsync(int id,Event @event)
        {
            if (@event == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var existingEvent = await _unitOfWork.Events.GetByIdAsync(id);
            if (existingEvent == null)
                return null;
            if (!ValidateDates(@event))
                throw new ArgumentException(Resources.Get("Invalid dates"));
            existingEvent.Name = @event.Name;
            existingEvent.Description = @event.Description;
            existingEvent.PaidEntrance = @event.PaidEntrance;
            existingEvent.Size = @event.Size;
            existingEvent.StartDate = @event.StartDate;
            existingEvent.EndDate = @event.EndDate;
            existingEvent.UserId = @event.UserId;
            existingEvent.DateUpdated = DateTime.Now;
            var result = _unitOfWork.Events.Update(existingEvent);
            await _unitOfWork.Events.SaveAsync();
            return result;
        }

        private bool ValidateDates(Event @event)
        {
            if (!CheckDates(@event))
                return false;
            if (@event.StartDate <= DateTime.Now)
            {
                @event.StartDate = DateTime.Now;
            }
            return true;
        }

        private bool CheckDates(Event @event)
        {
            if (@event.StartDate >= @event.EndDate || @event.EndDate <= DateTime.Now)
                return false;
            return true;
        }
    }
}
