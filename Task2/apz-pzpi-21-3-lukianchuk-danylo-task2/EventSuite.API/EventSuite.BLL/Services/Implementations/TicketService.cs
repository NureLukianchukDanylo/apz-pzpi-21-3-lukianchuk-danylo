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
    public class TicketService : ITicketService
    {
        private readonly IUnitOfWork _unitOfWork;
        public TicketService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<Ticket> CreateTicketAsync(Ticket ticket)
        {
            if (ticket == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var result = await _unitOfWork.Tickets.AddAsync(ticket);
            await _unitOfWork.Tickets.SaveAsync();
            return result;
        }

        public async Task<bool> DeleteTicketAsync(int id)
        {
            var ticket = await _unitOfWork.Tickets.GetByIdAsync(id);
            var result = _unitOfWork.Tickets.Delete(ticket);
            await _unitOfWork.Tickets.SaveAsync();
            return result;  
        }

        public async Task<Ticket> GetTicketByIdAsync(int id)
        {
            var result = await _unitOfWork.Tickets.GetByConditionAsync(x => x.Id == id, EntitySelector.TicketSelector);
            return result.FirstOrDefault();
        }

        public async Task<IEnumerable<Ticket>> GetTicketsAsync(PageInfo pageInfo)
        {
            return await _unitOfWork.Tickets.GetPageWithMultiplePredicatesAsync(null, pageInfo, EntitySelector.TicketSelector);
        }

        public async Task<IEnumerable<Ticket>> GetTicketsByRegistrationIdAsync(int registrationId)
        {
            return await _unitOfWork.Tickets.GetByConditionAsync(x => x.RegistrationId == registrationId, EntitySelector.TicketSelector);
        }

        public async Task<Ticket> UpdateTicketAsync(int id, Ticket ticket)
        {
            if (ticket == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var existingTicket = await _unitOfWork.Tickets.GetByIdAsync(id);
            if (existingTicket == null)
                return null;
            existingTicket.Price = ticket.Price;
            existingTicket.RegistrationId = ticket.RegistrationId;
            existingTicket.Type = ticket.Type;
            existingTicket.DateUpdated = DateTime.Now;
            var result = _unitOfWork.Tickets.Update(existingTicket);
            await _unitOfWork.Tickets.SaveAsync();
            return result;
        }
    }
}
