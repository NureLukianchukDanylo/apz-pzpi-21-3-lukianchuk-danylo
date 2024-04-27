using AutoMapper;
using EventSuite.BLL.Services.Interfaces;
using EventSuite.Core.DTOs.Responses.Event;
using EventSuite.Core.Extra;
using EventSuite.Core.Models;
using EventSuite.Core.Resources;
using EventSuite.DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore.Internal;
using System.Linq.Expressions;

namespace EventSuite.BLL.Services.Implementations
{
    public class EventService : IEventService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public EventService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
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

        public async Task<IEnumerable<Event>> GetEventsByUserIdAsync(string userId)
        {
            return await _unitOfWork.Events.GetByConditionAsync(x => x.UserId == userId, EntitySelector.EventSelector);
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

        private static bool CheckDates(Event @event)
        {
            if (@event.StartDate >= @event.EndDate || @event.EndDate <= DateTime.Now)
                return false;
            return true;
        }

        public async Task<IEnumerable<FinishedEventResponse>> GetFinishedEventsByUserIdAsync(string userId, PageInfo pageInfo)
        {
            var predicates = new List<Expression<Func<Event, bool>>>
            {
                x => x.UserId == userId,
                x => x.EndDate < DateTime.Now
            };
            var finishedEvents = await _unitOfWork.Events.GetPageWithMultiplePredicatesAsync(predicates, pageInfo, EntitySelector.EventSelector);
            var result = new List<FinishedEventResponse>();
            var res = new FinishedEventResponse();
            foreach (var finishedEvent in finishedEvents)
            {
                res = _mapper.Map<FinishedEventResponse>(finishedEvent);
                res.Visitors = finishedEvent.PaidEntrance ? finishedEvent.Registrations.Sum(x => x.Tickets.Count()) : finishedEvent.Registrations.Count();
                res.TicketsIncome = finishedEvent.PaidEntrance ? finishedEvent.Registrations.Sum(x => x.Tickets.Sum(x => x.Price)) : 0;
                res.ResourcesUsed = finishedEvent.EventResources.Count();
                res.ResourcesSpendings = (decimal)finishedEvent.EventResources.Sum(x => x.Amount * x.Resource?.Price);
                res.RoomsUsed = finishedEvent.Reservations.Count();
                result.Add(res);
            }
            return result;
        }
    }
}
