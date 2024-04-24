using Castle.Core.Resource;
using EventSuite.BLL.Services.Interfaces;
using EventSuite.Core.Extra;
using EventSuite.Core.Models;
using EventSuite.Core.Resources;
using EventSuite.DAL.Repositories.Interfaces;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.BLL.Services.Implementations
{
    public class RegistrationService : IRegistrationService
    {
        private readonly IUnitOfWork _unitOfWork;
        public RegistrationService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<Registration> CreateRegistrationAsync(Registration registration)
        {
            if (registration == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var result = await _unitOfWork.Registrations.AddAsync(registration);
            await _unitOfWork.Registrations.SaveAsync();
            return result;
        }

        public async Task<bool> DeleteRegistrationAsync(int id)
        {
            var resource = await _unitOfWork.Registrations.GetByIdAsync(id);
            var result = _unitOfWork.Registrations.Delete(resource);
            await _unitOfWork.Registrations.SaveAsync();
            return result;
        }

        public async Task<Registration> GetRegistrationByIdAsync(int id)
        {
            var result = await _unitOfWork.Registrations.GetByConditionAsync(x => x.Id == id, EntitySelector.RegistrationSelector);
            return result.FirstOrDefault();
        }

        public async Task<IEnumerable<Registration>> GetRegistrationsAsync(PageInfo pageInfo)
        {
            return await _unitOfWork.Registrations.GetPageWithMultiplePredicatesAsync(null, pageInfo, EntitySelector.RegistrationSelector);
        }

        public async Task<IEnumerable<Registration>> GetRegistrationsByEventIdAsync(int eventId)
        {
            return await _unitOfWork.Registrations.GetByConditionAsync(x => x.EventId == eventId, EntitySelector.RegistrationSelector);
        }

        public async Task<IEnumerable<Registration>> GetRegistrationsByUserIdAsync(string userId)
        {
            return await _unitOfWork.Registrations.GetByConditionAsync(x => x.UserId == userId, EntitySelector.RegistrationSelector);
        }

        public async Task<Registration> UpdateRegistrationAsync(int id, Registration registration)
        {
            if (registration == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var existingRegistration = await _unitOfWork.Registrations.GetByIdAsync(id);
            if (existingRegistration == null)
                return null;
            existingRegistration.EventId = registration.EventId;
            existingRegistration.DateUpdated = DateTime.Now;
            var result = _unitOfWork.Registrations.Update(existingRegistration);
            await _unitOfWork.Registrations.SaveAsync();
            return result;
        }
    }
}
