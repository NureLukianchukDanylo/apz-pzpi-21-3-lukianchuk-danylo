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
    public class EventResourceService : IEventResourceService
    {
        private readonly IUnitOfWork _unitOfWork;
        public EventResourceService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<EventResource> CreateEventResourceAsync(EventResource eventResource)
        {
            if (eventResource == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var result = await _unitOfWork.EventResources.AddAsync(eventResource);
            await _unitOfWork.EventResources.SaveAsync();
            return result;
        }

        public async Task<bool> DeleteEventResourceAsync(int id)
        {
            var location = await _unitOfWork.EventResources.GetByIdAsync(id);
            var result = _unitOfWork.EventResources.Delete(location);
            await _unitOfWork.EventResources.SaveAsync();
            return result;
        }

        public async Task<EventResource> GetEventResourceByIdAsync(int id)
        {
            var result = await _unitOfWork.EventResources.GetByConditionAsync(x => x.Id == id, EntitySelector.EventResourceSelector);
            return result.FirstOrDefault();
        }

        public async Task<IEnumerable<EventResource>> GetEventResourcesAsync(PageInfo pageInfo)
        {
            return await _unitOfWork.EventResources.GetPageWithMultiplePredicatesAsync(null, pageInfo, EntitySelector.EventResourceSelector);
        }

        public async Task<IEnumerable<EventResource>> GetEventResourcesByEventIdAsync(int eventId)
        {
            return await _unitOfWork.EventResources.GetByConditionAsync(x => x.EventId == eventId, EntitySelector.EventResourceSelector);
        }

        public async Task<EventResource> UpdateEventResourceAsync(int id, EventResource eventResource)
        {
            if (eventResource == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var existingEventResource = await _unitOfWork.EventResources.GetByIdAsync(id);
            if (existingEventResource == null)
                return null;
            existingEventResource.Amount = eventResource.Amount;
            existingEventResource.EventId = eventResource.EventId;
            existingEventResource.ResourceId = eventResource.ResourceId;
            existingEventResource.DateUpdated = DateTime.Now;
            var result = _unitOfWork.EventResources.Update(existingEventResource);
            await _unitOfWork.EventResources.SaveAsync();
            return result;
        }
    }
}
