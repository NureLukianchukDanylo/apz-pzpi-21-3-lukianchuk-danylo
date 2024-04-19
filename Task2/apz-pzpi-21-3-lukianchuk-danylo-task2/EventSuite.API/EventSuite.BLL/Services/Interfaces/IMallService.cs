using EventSuite.Core.Extra;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.BLL.Services.Interfaces
{
    public interface IMallService
    {
        Task<Mall> CreateMallAsync(Mall mall);
        Task<Mall> UpdateMallAsync(int id, Mall mall);
        Task<Mall> GetMallByIdAsync(int id);
        Task<IEnumerable<Mall>> GetMallsAsync(PageInfo pageInfo);
        Task<bool> DeleteMallAsync(int id);
        Task<IEnumerable<Mall>> GetMallsByLocationIdAsync(int locationId);
    }
}
