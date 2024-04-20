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
    public class VenueService : IVenueService
    {
        private readonly IUnitOfWork _unitOfWork;
        public VenueService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<Venue> CreateVenueAsync(Venue venue)
        {
            if (venue == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var result = await _unitOfWork.Venues.AddAsync(venue);
            await _unitOfWork.Venues.SaveAsync();
            return result;
        }

        public async Task<bool> DeleteVenueAsync(int id)
        {
            var resource = await _unitOfWork.Venues.GetByIdAsync(id);
            var result = _unitOfWork.Venues.Delete(resource);
            await _unitOfWork.Venues.SaveAsync();
            return result;
        }

        public async Task<Venue> GetVenueByIdAsync(int id)
        {
            var result = await _unitOfWork.Venues.GetByConditionAsync(x => x.Id == id, EntitySelector.VenueSelector);
            return result.FirstOrDefault();
        }

        public async Task<IEnumerable<Venue>> GetVenuesAsync(PageInfo pageInfo)
        {
            return await _unitOfWork.Venues.GetPageWithMultiplePredicatesAsync(null, pageInfo, EntitySelector.VenueSelector);
        }

        public async Task<IEnumerable<Venue>> GetVenuesByMallIdAsync(int mallId)
        {
            return await _unitOfWork.Venues.GetByConditionAsync(x => x.MallId == mallId, EntitySelector.VenueSelector);
        }

        public async Task<Venue> UpdateVenueAsync(int id, Venue venue)
        {
            if (venue == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var existingVenue = await _unitOfWork.Venues.GetByIdAsync(id);
            if (existingVenue == null)
                return null;
            existingVenue.Type = venue.Type;
            existingVenue.Description = venue.Description;
            existingVenue.Square = venue.Square;
            existingVenue.MaxSize = venue.MaxSize;
            existingVenue.Services = venue.Services;
            existingVenue.RoomNumber = venue.RoomNumber;
            existingVenue.Floor = venue.Floor;
            existingVenue.MallId = venue.MallId;
            existingVenue.DateUpdated = DateTime.Now;
            var result = _unitOfWork.Venues.Update(existingVenue);
            await _unitOfWork.Venues.SaveAsync();
            return result;
        }
    }
}
