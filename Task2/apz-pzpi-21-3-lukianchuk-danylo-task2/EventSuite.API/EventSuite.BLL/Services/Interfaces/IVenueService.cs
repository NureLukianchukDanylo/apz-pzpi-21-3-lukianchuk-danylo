using EventSuite.Core.Extra;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.BLL.Services.Interfaces
{
    public interface IVenueService
    {
        Task<Venue> CreateVenueAsync(Venue venue);
        Task<Venue> UpdateVenueAsync(int id, Venue venue);
        Task<Venue> GetVenueByIdAsync(int id);
        Task<IEnumerable<Venue>> GetVenuesAsync(PageInfo pageInfo);
        Task<bool> DeleteVenueAsync(int id);
        Task<IEnumerable<Venue>> GetVenuesByMallIdAsync(int mallId);
    }
}
