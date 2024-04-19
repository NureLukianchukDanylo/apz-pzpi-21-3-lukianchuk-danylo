using AutoMapper;
using EventSuite.BLL.Services.Implementations;
using EventSuite.BLL.Services.Interfaces;
using EventSuite.Core.DTOs.Requests.Common;
using EventSuite.Core.DTOs.Requests.Mall;
using EventSuite.Core.DTOs.Requests.Registration;
using EventSuite.Core.DTOs.Responses.Mall;
using EventSuite.Core.DTOs.Responses.Registration;
using EventSuite.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventSuite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class RegistrationController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IRegistrationService _registrationService;
        private readonly Serilog.ILogger _logger;
        public RegistrationController(IMapper mapper, IRegistrationService registrationService, Serilog.ILogger logger)
        {
            _mapper = mapper;
            _registrationService = registrationService;
            _logger = logger;
        }

        [HttpGet]
        [Route("registrations")]
        public async Task<IActionResult> GetRegistrations([FromQuery] GetRequest getRequest)
        {
            var result = await _registrationService.GetRegistrationsAsync(getRequest.PageInfo);
            if (!result.Any() || result == null)
            {
                _logger.Information("Registrations not found");
                return NotFound("Registrations not found");
            }
            var registrations = _mapper.Map<IEnumerable<RegistrationResponse>>(result);
            return Ok(registrations);
        }

        [HttpGet]
        [Route("registration/{id}")]
        public async Task<IActionResult> GetRegistration(int id)
        {
            var result = await _registrationService.GetRegistrationByIdAsync(id);
            if (result == null)
            {
                _logger.Information($"Registration with id:{id} not found");
                return NotFound($"Registration with id:{id} not found");
            }
            var registration = _mapper.Map<RegistrationResponse>(result);
            return Ok(registration);
        }

        [HttpDelete]
        [Route("registration/{id}")]
        public async Task<IActionResult> DeleteRegistration(int id)
        {
            var result = await _registrationService.DeleteRegistrationAsync(id);
            if (result is false)
            {
                _logger.Error($"Registration with id: {id} not found");
                return NotFound($"Registration with id: {id} not found");
            }
            return NoContent();
        }

        [HttpPost]
        [Route("registration")]
        public async Task<IActionResult> CreateRegistration(RegistrationRequest registrationRequest)
        {
            var registration = _mapper.Map<Registration>(registrationRequest);
            var result = await _registrationService.CreateRegistrationAsync(registration);
            if (result == null)
            {
                _logger.Error($"Couldn't create registration");
                return BadRequest($"Couldn't create registration");
            }
            var registrationResponse = _mapper.Map<RegistrationResponse>(result);
            return Ok(registrationResponse);
        }

        [HttpGet]
        [Route("registrations/{eventId}")]
        public async Task<IActionResult> GetRegistrationsByEventId(int eventId)
        {
            var result = await _registrationService.GetRegistrationsByEventIdAsync(eventId);
            if (!result.Any())
            {
                _logger.Error($"Registrations with location id: {eventId} not found");
                return NotFound($"Registrations with location id: {eventId} not found");
            }
            var registrations = _mapper.Map<IEnumerable<RegistrationResponse>>(result);
            return Ok(registrations);
        }

        [HttpPut]
        [Route("registration/{id}")]
        public async Task<IActionResult> UpdateRegistration(int id, RegistrationRequest registrationRequest)
        {
            var registration = _mapper.Map<Registration>(registrationRequest);
            var result = await _registrationService.UpdateRegistrationAsync(id, registration);
            if (result == null)
            {
                _logger.Error($"Registration with id: {id} not found");
                return NotFound($"Registration with id: {id} not found");
            }
            var registrationResponse = _mapper.Map<RegistrationResponse>(result);
            return Ok(registrationResponse);
        }
    }
}
