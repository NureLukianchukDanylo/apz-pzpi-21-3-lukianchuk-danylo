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
    public class MallService : IMallService
    {
        private readonly IUnitOfWork _unitOfWork;
        public MallService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<Mall> CreateMallAsync(Mall mall)
        {
            if (mall == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var result = await _unitOfWork.Malls.AddAsync(mall);
            await _unitOfWork.Malls.SaveAsync();
            return result;
        }

        public async Task<bool> DeleteMallAsync(int id)
        {
            var mall = await _unitOfWork.Malls.GetByIdAsync(id);
            var result = _unitOfWork.Malls.Delete(mall);
            await _unitOfWork.Malls.SaveAsync();
            return result;
        }

        public async Task<Mall> GetMallByIdAsync(int id)
        {
            var result = await _unitOfWork.Malls.GetByConditionAsync(x => x.Id == id, EntitySelector.MallSelector);
            return result.FirstOrDefault();
        }

        public async Task<IEnumerable<Mall>> GetMallsAsync(PageInfo pageInfo)
        {
            return await _unitOfWork.Malls.GetPageWithMultiplePredicatesAsync(null, pageInfo, EntitySelector.MallSelector);
        }

        public async Task<IEnumerable<Mall>> GetMallsByLocationIdAsync(int locationId)
        {
            return await _unitOfWork.Malls.GetByConditionAsync(x => x.LocationId == locationId, EntitySelector.MallSelector);
        }

        public async Task<Mall> UpdateMallAsync(int id, Mall mall)
        {
            if (mall == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var existingMall = await _unitOfWork.Malls.GetByIdAsync(id);
            if (existingMall == null)
                return null;
            existingMall.Name = mall.Name;
            existingMall.Square = mall.Square;
            existingMall.LocationId = mall.LocationId;
            existingMall.DateUpdated = DateTime.Now;
            var result = _unitOfWork.Malls.Update(existingMall);
            await _unitOfWork.Malls.SaveAsync();
            return result;
        }
    }
}
