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
    public class ReservationService : IReservationService
    {
        private readonly IUnitOfWork _unitOfWork;
        public ReservationService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<Reservation> CreateReservationAsync(Reservation reservation)
        {
            if (reservation == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var result = await _unitOfWork.Reservations.AddAsync(reservation);
            await _unitOfWork.Reservations.SaveAsync();
            return result;
        }

        public async Task<bool> DeleteReservationAsync(int id)
        {
            var location = await _unitOfWork.Reservations.GetByIdAsync(id);
            var result = _unitOfWork.Reservations.Delete(location);
            await _unitOfWork.Reservations.SaveAsync();
            return result;
        }

        public async Task<Reservation> GetReservationByIdAsync(int id)
        {
            var result = await _unitOfWork.Reservations.GetByConditionAsync(x => x.Id == id, EntitySelector.ReservationSelector);
            return result.FirstOrDefault();
        }

        public async Task<IEnumerable<Reservation>> GetReservationsAsync(PageInfo pageInfo)
        {
            return await _unitOfWork.Reservations.GetPageWithMultiplePredicatesAsync(null, pageInfo, EntitySelector.ReservationSelector);
        }

        public async Task<IEnumerable<Reservation>> GetReservationsByEventIdAsync(int eventId)
        {
            return await _unitOfWork.Reservations.GetByConditionAsync(x => x.EventId == eventId, EntitySelector.ReservationSelector);
        }

        public async Task<Reservation> UpdateReservationAsync(int id, Reservation reservation)
        {
            if (reservation == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var existingReservation = await _unitOfWork.Reservations.GetByIdAsync(id);
            if (existingReservation == null)
                return null;
            existingReservation.Description = reservation.Description;
            existingReservation.EventId = reservation.EventId;
            existingReservation.VenueId = reservation.VenueId;
            existingReservation.DateUpdated = DateTime.Now;
            var result = _unitOfWork.Reservations.Update(existingReservation);
            await _unitOfWork.Reservations.SaveAsync();
            return result;
        }
    }
}
