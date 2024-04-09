using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using EventSuite.BLL.Services.Interfaces;
using System.Globalization;
using EventSuite.Core.Resources;

namespace SmartAdSignage.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class DatabaseController : ControllerBase
    {
        private readonly IDatabaseService _databaseService;
        public DatabaseController(IDatabaseService databaseService) 
        {
            _databaseService = databaseService;
        }

        [HttpPost]
        [Route("backup")]
        public async Task<IActionResult> CreateBackup() 
        {
            await _databaseService.CreateBackupAsync();
            return Ok("Database backup was created successfully");
        }
    }
}
