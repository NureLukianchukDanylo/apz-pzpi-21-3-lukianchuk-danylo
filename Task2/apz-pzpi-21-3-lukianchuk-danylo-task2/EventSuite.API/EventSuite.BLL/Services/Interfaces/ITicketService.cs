using EventSuite.Core.Extra;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.BLL.Services.Interfaces
{
    public interface ITicketService
    {
        Task<Ticket> CreateTicketAsync(Ticket ticket);
        Task<Ticket> UpdateTicketAsync(int id, Ticket ticket);
        Task<Ticket> GetTicketByIdAsync(int id);
        Task<IEnumerable<Ticket>> GetTicketsAsync(PageInfo pageInfo);
        Task<bool> DeleteTicketAsync(int id);
        Task<IEnumerable<Ticket>> GetTicketsByRegistrationIdAsync(int registrationId);
    }
}
