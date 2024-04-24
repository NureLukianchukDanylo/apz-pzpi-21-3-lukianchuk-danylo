using AutoMapper;
using EventSuite.BLL.Services.Implementations;
using EventSuite.BLL.Services.Interfaces;
using EventSuite.Core.DTOs.Requests.Common;
using EventSuite.Core.DTOs.Requests.Event;
using EventSuite.Core.DTOs.Requests.EventResource;
using EventSuite.Core.DTOs.Responses.Event;
using EventSuite.Core.DTOs.Responses.EventResource;
using EventSuite.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventSuite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EventResourceController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IEventResourceService _eventResourceService;
        private readonly Serilog.ILogger _logger;
        public EventResourceController(IMapper mapper, IEventResourceService eventResourceService, Serilog.ILogger logger)
        {
            _mapper = mapper;
            _eventResourceService = eventResourceService;
            _logger = logger;
        }

        [HttpGet]
        [Route("event-resources")]
        public async Task<IActionResult> GetEventResources([FromQuery] GetRequest getRequest)
        {
            var result = await _eventResourceService.GetEventResourcesAsync(getRequest.PageInfo);
            if (!result.Any() || result == null)
            {
                _logger.Information("Event resources not found");
                return NotFound("Event resources not found");
            }
            var eventResources = _mapper.Map<IEnumerable<EventResourceResponse>>(result);
            return Ok(eventResources);
        }

        [HttpGet]
        [Route("event-resource/{id}")]
        public async Task<IActionResult> GetEventResource(int id)
        {
            var result = await _eventResourceService.GetEventResourceByIdAsync(id);
            if (result == null)
            {
                _logger.Information($"Event resource with id:{id} not found");
                return NotFound($"Event resource with id:{id} not found");
            }
            var eventResource = _mapper.Map<EventResourceResponse>(result);
            return Ok(eventResource);
        }

        [HttpDelete]
        [Route("event-resource/{id}")]
        public async Task<IActionResult> DeleteEventResource(int id)
        {
            var result = await _eventResourceService.DeleteEventResourceAsync(id);
            if (result is false)
            {
                _logger.Error($"Event resource with id: {id} not found");
                return NotFound($"Event resource with id: {id} not found");
            }
            return NoContent();
        }

        [HttpPost]
        [Route("event-resource")]
        public async Task<IActionResult> CreateEventResource(EventResourceRequest eventResourceRequest)
        {
            var eventResource = _mapper.Map<EventResource>(eventResourceRequest);
            var result = await _eventResourceService.CreateEventResourceAsync(eventResource);
            if (result == null)
            {
                _logger.Error($"Couldn't create event resource");
                return BadRequest($"Couldn't create event resource");
            }
            var eventResourceResponse = _mapper.Map<EventResourceResponse>(result);
            return Ok(eventResourceResponse);
        }

        [HttpGet]
        [Route("event-resources/{eventId}")]
        public async Task<IActionResult> GetEventResourcesByEventId(int eventId)
        {
            var result = await _eventResourceService.GetEventResourcesByEventIdAsync(eventId);
            if (!result.Any())
            {
                _logger.Error($"Event resources with user id: {eventId} not found");
                return NotFound($"Event resources with user id: {eventId} not found");
            }
            var eventResources = _mapper.Map<IEnumerable<EventResourceResponse>>(result);
            return Ok(eventResources);
        }

        [HttpPut]
        [Route("event-resource/{id}")]
        public async Task<IActionResult> UpdateEventResource(int id, EventResourceRequest eventResourceRequest)
        {
            var eventResource = _mapper.Map<EventResource>(eventResourceRequest);
            var result = await _eventResourceService.UpdateEventResourceAsync(id, eventResource);
            if (result == null)
            {
                _logger.Error($"Event resource with id: {id} not found");
                return NotFound($"Event resource with id: {id} not found");
            }
            var eventResourceResponse = _mapper.Map<EventResponse>(result);
            return Ok(eventResourceResponse);
        }
    }
}
