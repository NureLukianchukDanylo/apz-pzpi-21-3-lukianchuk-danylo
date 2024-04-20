using AutoMapper;
using EventSuite.BLL.Services.Implementations;
using EventSuite.BLL.Services.Interfaces;
using EventSuite.Core.DTOs.Requests.Common;
using EventSuite.Core.DTOs.Requests.Event;
using EventSuite.Core.DTOs.Responses.Event;
using EventSuite.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using System.Net;

namespace EventSuite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EventController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IEventService _eventService;
        private readonly Serilog.ILogger _logger;
        public EventController(IMapper mapper, IEventService eventService, Serilog.ILogger logger)
        {
            _mapper = mapper;
            _eventService = eventService;
            _logger = logger;
        }

        [HttpGet]
        [Route("events")]
        public async Task<IActionResult> GetEvents([FromQuery] GetRequest getRequest)
        {
            var result = await _eventService.GetEventsAsync(getRequest.PageInfo);
            if (!result.Any() || result == null)
            {
                _logger.Information("Advertisements not found");
                return NotFound("Advertisements not found");
            }
            var events = _mapper.Map<IEnumerable<EventResponse>>(result);
            return Ok(events);
        }

        [HttpGet]
        [Route("event/{id}")]
        public async Task<IActionResult> GetEvent(int id)
        {
            var result = await _eventService.GetEventByIdAsync(id);
            if (result == null)
            {
                _logger.Information($"Event with id:{id} not found");
                return NotFound($"Event with id:{id} not found");
            }
            var @event = _mapper.Map<EventResponse>(result);
            return Ok(@event);
        }

        [HttpDelete]
        [Route("event/{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            var result = await _eventService.DeleteEventAsync(id);
            if (result is false)
            {
                _logger.Error($"Event with id: {id} not found");
                return NotFound($"Event with id: {id} not found");
            }
            return NoContent();
        }

        [HttpPost]
        [Route("event")]
        public async Task<IActionResult> CreateEvent(EventRequest eventRequest)
        {
            var @event = _mapper.Map<Event>(eventRequest);
            var result = await _eventService.CreateEventAsync(@event);
            if (result == null)
            {
                _logger.Error($"Couldn't create event");
                return BadRequest($"Couldn't create event");
            }
            var advertisementResponse = _mapper.Map<EventResponse>(result);
            return Ok(advertisementResponse);
        }

        [HttpGet]
        [Route("events/{userId}")]
        public async Task<IActionResult> GetEventsByUserId(string userId)
        {
            var result = await _eventService.GetEventsByUserIdAsync(userId);
            if (!result.Any())
            {
                _logger.Error($"Events with user id: {userId} not found");
                return NotFound($"Events with user id: {userId} not found");
            }
            var events = _mapper.Map<IEnumerable<EventResponse>>(result);
            return Ok(events);
        }

        [HttpPut]
        [Route("event/{id}")]
        public async Task<IActionResult> UpdateEvent(int id, EventRequest eventRequest)
        {
            var @event = _mapper.Map<Event>(eventRequest);
            var result = await _eventService.UpdateEventAsync(id, @event);
            if (result == null)
            {
                _logger.Error($"Event with id: {id} not found");
                return NotFound($"Event with id: {id} not found");
            }
            var eventResponse = _mapper.Map<EventResponse>(result);
            return Ok(eventResponse);
        }
    }
}
