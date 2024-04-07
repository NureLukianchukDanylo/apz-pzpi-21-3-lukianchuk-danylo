using Microsoft.AspNetCore.Identity;
using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.BLL.Services.Interfaces
{
    public interface IUserService
    {
        Task<bool> ValidateUserAsync(string username, string password);

        Task<IdentityResult> RegisterUserAsync(User user, string password, string role);

        Task<IdentityResult> RevokeToken(string username);

        Task<string[]?> GenerateTokensAsync();

        Task<string[]?> RefreshTokensAsync(string accessToken, string refreshToken);

        Task<IEnumerable<User?>> GetUsersAsync();

        Task<string> GetRole(User user);

        Task<User> GetUserByNameAsync(string userName);

        Task<IdentityResult> DeleteUserByNameAsync(string userName);

        Task<IdentityResult> UpdateUserAsync(string userName, User user);

        string GetConfiguration(string setting);
    }
}
