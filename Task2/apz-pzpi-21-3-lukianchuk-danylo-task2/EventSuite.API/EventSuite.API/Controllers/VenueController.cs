using AutoMapper;
using EventSuite.BLL.Services.Implementations;
using EventSuite.BLL.Services.Interfaces;
using EventSuite.Core.DTOs.Requests.Common;
using EventSuite.Core.DTOs.Requests.Ticket;
using EventSuite.Core.DTOs.Requests.Venue;
using EventSuite.Core.DTOs.Responses.Ticket;
using EventSuite.Core.DTOs.Responses.Venue;
using EventSuite.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventSuite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class VenueController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IVenueService _venueService;
        private readonly Serilog.ILogger _logger;
        public VenueController(IMapper mapper, IVenueService venueService, Serilog.ILogger logger)
        {
            _mapper = mapper;
            _venueService = venueService;
            _logger = logger;
        }

        [HttpGet]
        [Route("venues")]
        public async Task<IActionResult> GetVenues([FromQuery] GetRequest getRequest)
        {
            var result = await _venueService.GetVenuesAsync(getRequest.PageInfo);
            if (!result.Any() || result == null)
            {
                _logger.Information("Venues not found");
                return NotFound("Venues not found");
            }
            var venues = _mapper.Map<IEnumerable<VenueResponse>>(result);
            return Ok(venues);
        }

        [HttpGet]
        [Route("venue/{id}")]
        public async Task<IActionResult> GetVenue(int id)
        {
            var result = await _venueService.GetVenueByIdAsync(id);
            if (result == null)
            {
                _logger.Information($"Venue with id:{id} not found");
                return NotFound($"Venue with id:{id} not found");
            }
            var venue = _mapper.Map<VenueResponse>(result);
            return Ok(venue);
        }

        [HttpDelete]
        [Route("venue/{id}")]
        public async Task<IActionResult> DeleteVenue(int id)
        {
            var result = await _venueService.DeleteVenueAsync(id);
            if (result is false)
            {
                _logger.Error($"Venue with id: {id} not found");
                return NotFound($"Venue with id: {id} not found");
            }
            return NoContent();
        }

        [HttpPost]
        [Route("venue")]
        public async Task<IActionResult> CreateVenue(VenueRequest venueRequest)
        {
            var venue = _mapper.Map<Venue>(venueRequest);
            var result = await _venueService.CreateVenueAsync(venue);
            if (result == null)
            {
                _logger.Error($"Couldn't create venue");
                return BadRequest($"Couldn't create venue");
            }
            var venueResponse = _mapper.Map<VenueResponse>(result);
            return Ok(venueResponse);
        }

        [HttpGet]
        [Route("venues/{mallId}")]
        public async Task<IActionResult> GetVenuesByMallId(int mallId)
        {
            var result = await _venueService.GetVenuesByMallIdAsync(mallId);
            if (!result.Any())
            {
                _logger.Error($"Venues with location id: {mallId} not found");
                return NotFound($"Venues with location id: {mallId} not found");
            }
            var venues = _mapper.Map<IEnumerable<VenueResponse>>(result);
            return Ok(venues);
        }

        [HttpPut]
        [Route("venue/{id}")]
        public async Task<IActionResult> UpdateVenue(int id, VenueRequest venueRequest)
        {
            var venue = _mapper.Map<Venue>(venueRequest);
            var result = await _venueService.UpdateVenueAsync(id, venue);
            if (result == null)
            {
                _logger.Error($"Venue with id: {id} not found");
                return NotFound($"Venue with id: {id} not found");
            }
            var venueResponse = _mapper.Map<VenueResponse>(result);
            return Ok(venueResponse);
        }
    }
}
