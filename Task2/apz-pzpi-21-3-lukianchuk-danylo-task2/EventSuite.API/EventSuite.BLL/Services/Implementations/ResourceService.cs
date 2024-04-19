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
    public class ResourceService : IResourceService
    {
        private readonly IUnitOfWork _unitOfWork;
        public ResourceService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<Resource> CreateResourceAsync(Resource resource)
        {
            if (resource == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var result = await _unitOfWork.Resources.AddAsync(resource);
            await _unitOfWork.Resources.SaveAsync();
            return result;
        }

        public async Task<bool> DeleteResourceAsync(int id)
        {
            var resource = await _unitOfWork.Resources.GetByIdAsync(id);
            var result = _unitOfWork.Resources.Delete(resource);
            await _unitOfWork.Resources.SaveAsync();
            return result;
        }

        public async Task<Resource> GetResourceByIdAsync(int id)
        {
            var result = await _unitOfWork.Resources.GetByConditionAsync(x => x.Id == id, EntitySelector.ResourceSelector);
            return result.FirstOrDefault();
        }

        public async Task<IEnumerable<Resource>> GetResourcesAsync(PageInfo pageInfo)
        {
            return await _unitOfWork.Resources.GetPageWithMultiplePredicatesAsync(null, pageInfo, EntitySelector.ResourceSelector);
        }

        public async Task<Resource> UpdateResourceAsync(int id, Resource resource)
        {
            if (resource == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var existingResource = await _unitOfWork.Resources.GetByIdAsync(id);
            if (existingResource == null)
                return null;
            existingResource.Name = resource.Name;
            existingResource.Description = resource.Description;
            existingResource.Price = resource.Price;
            existingResource.Type = resource.Type;
            existingResource.DateUpdated = DateTime.Now;
            var result = _unitOfWork.Resources.Update(existingResource);
            await _unitOfWork.Resources.SaveAsync();
            return result;
        }
    }
}
