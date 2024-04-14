using EventSuite.Core.Models;
using EventSuite.Core.Extra;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.BLL.Services.Interfaces
{
    public interface ILocationService
    {
        Task<Location> CreateLocationAsync(Location location);
        Task<Location> UpdateLocationAsync(int id, Location location);
        Task<Location> GetLocationByIdAsync(int id);
        Task<IEnumerable<Location>> GetLocationsAsync(PageInfo page);
        Task<bool> DeleteLocationAsync(int id);
    }
}
