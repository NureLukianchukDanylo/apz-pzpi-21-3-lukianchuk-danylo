using AutoMapper;
using EventSuite.BLL.Services.Implementations;
using EventSuite.BLL.Services.Interfaces;
using EventSuite.Core.DTOs.Requests.Common;
using EventSuite.Core.DTOs.Requests.SmartBracelet;
using EventSuite.Core.DTOs.Requests.Ticket;
using EventSuite.Core.DTOs.Responses.SmartBracelet;
using EventSuite.Core.DTOs.Responses.Ticket;
using EventSuite.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventSuite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class SmartBraceletController : Controller
    {
        private readonly IMapper _mapper;
        private readonly ISmartBraceletService _smartBraceletService;
        private readonly Serilog.ILogger _logger;

        public SmartBraceletController(IMapper mapper, ISmartBraceletService smartBraceletService, Serilog.ILogger logger)
        {
            _mapper = mapper;
            _smartBraceletService = smartBraceletService;
            _logger = logger;
        }

        [HttpGet]
        [Route("smart-bracelets")]
        [Authorize]
        public async Task<IActionResult> GetSmartBracelets([FromQuery] GetRequest getRequest)
        {
            var result = await _smartBraceletService.GetSmartBraceletsAsync(getRequest.PageInfo);
            if (!result.Any() || result == null)
            {
                _logger.Information("Smart bracelets not found");
                return NotFound("Smart bracelets not found");
            }
            var smartBracelets = _mapper.Map<IEnumerable<SmartBraceletResponse>>(result);
            return Ok(smartBracelets);
        }

        [HttpGet]
        [Route("smart-bracelet/{id}")]
        [Authorize]
        public async Task<IActionResult> GetSmartBracelet(int id)
        {
            var result = await _smartBraceletService.GetSmartBraceletByIdAsync(id);
            if (result == null)
            {
                _logger.Information($"Smart bracelet with id:{id} not found");
                return NotFound($"Smart bracelet with id:{id} not found");
            }
            var smartBracelet = _mapper.Map<SmartBraceletResponse>(result);
            return Ok(smartBracelet);
        }

        [HttpDelete]
        [Route("smart-bracelet/{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteSmartBracelet(int id)
        {
            var result = await _smartBraceletService.DeleteSmartBraceletAsync(id);
            if (result is false)
            {
                _logger.Error($"Smart bracelet with id: {id} not found");
                return NotFound($"Smart bracelet with id: {id} not found");
            }
            return NoContent();
        }

        [HttpPost]
        [Route("smart-bracelet")]
        [Authorize]
        public async Task<IActionResult> CreateSmartBracelet(SmartBraceletRequest smartBraceletRequest)
        {
            var smartBracelet = _mapper.Map<SmartBracelet>(smartBraceletRequest);
            var result = await _smartBraceletService.CreateSmartBraceletAsync(smartBracelet);
            if (result == null)
            {
                _logger.Error($"Couldn't create smart bracelet");
                return BadRequest($"Couldn't create smart bracelet");
            }
            var smartBraceletResponse = _mapper.Map<SmartBraceletResponse>(result);
            return Ok(smartBraceletResponse);
        }

        [HttpPut]
        [Route("smart-bracelet/{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateSmartBracelet(int id, SmartBraceletRequest smartBraceletRequest)
        {
            var smartBracelet = _mapper.Map<SmartBracelet>(smartBraceletRequest);
            var result = await _smartBraceletService.UpdateSmartBraceletAsync(id, smartBracelet);
            if (result == null)
            {
                _logger.Error($"Smart bracelet with id: {id} not found");
                return NotFound($"Smart bracelet with id: {id} not found");
            }
            var smartBraceletResponse = _mapper.Map<SmartBraceletResponse>(result);
            return Ok(smartBraceletResponse);
        }

        [HttpPut]
        [Route("smart-bracelet/{id}/coordinates")]
        [Authorize(Roles = "Admin, Organizator")]
        public async Task<IActionResult> GetCoordinates(int id)
        {
            var result = await _smartBraceletService.UpdateCoordinates(id);
            if (result is false)
            {
                _logger.Error($"Smart bracelet with id: {id} not found");
                return NotFound($"Smart bracelet with id: {id} not found");
            }
            return Json("Coordinates were updated succesfully");
        }

        [HttpGet]
        [Route("smart-bracelet/{id}/grant-access")]
        public async Task<IActionResult> GrantAccess(int id)
        {
            var result = await _smartBraceletService.GrantAccess(id);
            if (result is false)
            {
                _logger.Error($"Access denied");
                return NotFound($"Access denied");
            }
            return Ok("Access granted");
        }
    }
}
