using EventSuite.BLL.Services.Interfaces;
using EventSuite.Core.Enums;
using EventSuite.Core.Extra;
using EventSuite.Core.Models;
using EventSuite.Core.Resources;
using EventSuite.DAL.Repositories.Interfaces;
using Newtonsoft.Json;
using System.Globalization;

namespace EventSuite.BLL.Services.Implementations
{
    public class SmartBraceletService: ISmartBraceletService
    {
        private readonly IUnitOfWork _unitOfWork;
        public SmartBraceletService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<SmartBracelet> CreateSmartBraceletAsync(SmartBracelet smartBracelet)
        {
            if (smartBracelet == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var result = await _unitOfWork.SmartBracelets.AddAsync(smartBracelet);
            await _unitOfWork.SmartBracelets.SaveAsync();
            return result;
        }

        public async Task<bool> DeleteSmartBraceletAsync(int id)
        {
            var ticket = await _unitOfWork.SmartBracelets.GetByIdAsync(id);
            var result = _unitOfWork.SmartBracelets.Delete(ticket);
            await _unitOfWork.SmartBracelets.SaveAsync();
            return result;
        }

        public async Task<bool> UpdateCoordinates(int id)
        {
            var smartBracelet = await _unitOfWork.SmartBracelets.GetByIdAsync(id);
            if (smartBracelet == null)
                return false;
            if (smartBracelet.Status != SmartBraceletStatus.Active)
                throw new SmartBraceletException(Resources.Get("Not active"));
            double[] coordinates = new double[2];
            using (var httpClient = new HttpClient())
            {
                httpClient.Timeout = TimeSpan.FromSeconds(60);
                httpClient.BaseAddress = new Uri("http://localhost:9080/");

                string requestUrl = $"get-coordinates";
                HttpResponseMessage response = await httpClient.GetAsync(requestUrl);
                string content = await response.Content.ReadAsStringAsync();
                var result = JsonConvert.DeserializeAnonymousType(content, new { latitude = 0.0, longitude = 0.0});
                coordinates[0] = result.latitude;
                coordinates[1] = result.longitude;
            }
            if (coordinates[0] != 0 && coordinates[1] != 0) 
            {
                smartBracelet.CurrentLatitude = coordinates[0];
                smartBracelet.CurrentLongitude = coordinates[1];
                await UpdateSmartBraceletAsync(id, smartBracelet);
            }
            else 
            {
                throw new SmartBraceletException(Resources.Get("Invalid coordinates"));
            }
            if(!ValidateCoordinatesAsync(coordinates, smartBracelet)) 
            {
                throw new SmartBraceletException(Resources.Get("No access"));
            }
            return true;
        }

        private bool ValidateCoordinatesAsync(double[] coordinates, SmartBracelet smartBracelet)
        {
            if (smartBracelet.AccessLatitude1 == null || smartBracelet.AccessLatitude2 == null || smartBracelet.AccessLongitude1 == null || smartBracelet.AccessLongitude2 == null)
                return true;
            if (coordinates[0] < Math.Min((double)smartBracelet.AccessLatitude1, (double)smartBracelet.AccessLatitude2) || coordinates[0] > Math.Max((double)smartBracelet.AccessLatitude1, (double)smartBracelet.AccessLatitude2))
                return false;

            if (coordinates[1] < Math.Min((double)smartBracelet.AccessLongitude1, (double)smartBracelet.AccessLongitude2) || coordinates[0] > Math.Max((double)smartBracelet.AccessLongitude1, (double)smartBracelet.AccessLongitude2))
                return false;

            return true;
        }

        public async Task<SmartBracelet> GetSmartBraceletByIdAsync(int id)
        {
            var result = await _unitOfWork.SmartBracelets.GetByConditionAsync(x => x.Id == id, EntitySelector.SmartBraceletSelector);
            return result.FirstOrDefault();
        }

        public async Task<IEnumerable<SmartBracelet>> GetSmartBraceletsAsync(PageInfo pageInfo)
        {
            return await _unitOfWork.SmartBracelets.GetPageWithMultiplePredicatesAsync(null, pageInfo, EntitySelector.SmartBraceletSelector);
        }

        public async Task<SmartBracelet> UpdateSmartBraceletAsync(int id, SmartBracelet smartBracelet)
        {
            if (smartBracelet == null)
                throw new ArgumentException(Resources.Get("Invalid arguments"));
            var existingSmartBracelet = await _unitOfWork.SmartBracelets.GetByIdAsync(id);
            if (existingSmartBracelet == null)
                return null;
            existingSmartBracelet.SerialNumber = smartBracelet.SerialNumber;
            existingSmartBracelet.Status = smartBracelet.Status;
            existingSmartBracelet.StartUsageDate = smartBracelet.StartUsageDate;
            existingSmartBracelet.EndUsageDate = smartBracelet.EndUsageDate;
            existingSmartBracelet.AccessLatitude1 = smartBracelet.AccessLatitude1;
            existingSmartBracelet.AccessLatitude2 = smartBracelet.AccessLatitude2;
            existingSmartBracelet.AccessLongitude1 = smartBracelet.AccessLongitude1;
            existingSmartBracelet.AccessLongitude2 = smartBracelet.AccessLongitude2;
            existingSmartBracelet.CurrentLatitude = smartBracelet.CurrentLatitude;
            existingSmartBracelet.CurrentLongitude = smartBracelet.CurrentLongitude;
            existingSmartBracelet.DateUpdated = DateTime.Now;
            var result = _unitOfWork.SmartBracelets.Update(existingSmartBracelet);
            await _unitOfWork.SmartBracelets.SaveAsync();
            return result;
        }

        public async Task<bool> GrantAccess(int id)
        {
            var result = (await _unitOfWork.SmartBracelets.GetByConditionAsync(x => x.Id == id)).FirstOrDefault();
            if (result == null) 
            {
                return false;
            }
            return true;
        }
    }
}
