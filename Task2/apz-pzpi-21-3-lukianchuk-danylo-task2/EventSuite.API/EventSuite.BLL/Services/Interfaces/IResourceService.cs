using EventSuite.Core.Extra;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.BLL.Services.Interfaces
{
    public interface IResourceService
    {
        Task<Resource> CreateResourceAsync(Resource resource);
        Task<Resource> UpdateResourceAsync(int id, Resource resource);
        Task<Resource> GetResourceByIdAsync(int id);
        Task<IEnumerable<Resource>> GetResourcesAsync(PageInfo pageInfo);
        Task<bool> DeleteResourceAsync(int id);
    }
}
