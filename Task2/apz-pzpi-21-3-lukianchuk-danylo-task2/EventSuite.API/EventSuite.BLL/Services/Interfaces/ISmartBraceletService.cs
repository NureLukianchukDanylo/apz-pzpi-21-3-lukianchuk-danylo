using EventSuite.Core.Extra;
using EventSuite.Core.Models;

namespace EventSuite.BLL.Services.Interfaces
{
    public interface ISmartBraceletService
    {
        Task<SmartBracelet> CreateSmartBraceletAsync(SmartBracelet smartBracelet);
        Task<SmartBracelet> UpdateSmartBraceletAsync(int id, SmartBracelet smartBracelet);
        Task<SmartBracelet> GetSmartBraceletByIdAsync(int id);
        Task<IEnumerable<SmartBracelet>> GetSmartBraceletsAsync(PageInfo pageInfo);
        Task<bool> DeleteSmartBraceletAsync(int id);
        Task<bool> UpdateCoordinates(int id);
        Task<bool> GrantAccess(int id);
    }
}
