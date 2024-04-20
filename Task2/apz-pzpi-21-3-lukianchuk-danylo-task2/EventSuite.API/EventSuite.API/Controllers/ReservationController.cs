using AutoMapper;
using EventSuite.BLL.Services.Interfaces;
using EventSuite.Core.DTOs.Requests.Common;
using EventSuite.Core.DTOs.Requests.Reservation;
using EventSuite.Core.DTOs.Responses.Event;
using EventSuite.Core.DTOs.Responses.Reservation;
using EventSuite.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventSuite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ReservationController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IReservationService _reservationService;
        private readonly Serilog.ILogger _logger;
        public ReservationController(IMapper mapper, IReservationService reservationService, Serilog.ILogger logger)
        {
            _mapper = mapper;
            _reservationService = reservationService;
            _logger = logger;
        }

        [HttpGet]
        [Route("reservations")]
        public async Task<IActionResult> GetReservations([FromQuery] GetRequest getRequest)
        {
            var result = await _reservationService.GetReservationsAsync(getRequest.PageInfo);
            if (!result.Any() || result == null)
            {
                _logger.Information("Reservations not found");
                return NotFound("Reservations not found");
            }
            var reservations = _mapper.Map<IEnumerable<ReservationResponse>>(result);
            return Ok(reservations);
        }

        [HttpGet]
        [Route("reservation/{id}")]
        public async Task<IActionResult> GetReservation(int id)
        {
            var result = await _reservationService.GetReservationByIdAsync(id);
            if (result == null)
            {
                _logger.Information($"Reservation with id:{id} not found");
                return NotFound($"Reservation with id:{id} not found");
            }
            var reservation = _mapper.Map<ReservationResponse>(result);
            return Ok(reservation);
        }

        [HttpDelete]
        [Route("reservation/{id}")]
        public async Task<IActionResult> DeleteReservation(int id)
        {
            var result = await _reservationService.DeleteReservationAsync(id);
            if (result is false)
            {
                _logger.Error($"Reservation with id: {id} not found");
                return NotFound($"Reservation with id: {id} not found");
            }
            return NoContent();
        }

        [HttpPost]
        [Route("reservation")]
        public async Task<IActionResult> CreateReservation(ReservationRequest reservationRequest)
        {
            var reservation = _mapper.Map<Reservation>(reservationRequest);
            var result = await _reservationService.CreateReservationAsync(reservation);
            if (result == null)
            {
                _logger.Error($"Couldn't create reservation");
                return BadRequest($"Couldn't create reservation");
            }
            var reservationResponse = _mapper.Map<ReservationResponse>(result);
            return Ok(reservationResponse);
        }

        [HttpGet]
        [Route("reservations/{eventId}")]
        public async Task<IActionResult> GetReservationsByEventId(int eventId)
        {
            var result = await _reservationService.GetReservationsByEventIdAsync(eventId);
            if (!result.Any())
            {
                _logger.Error($"Reservations with user id: {eventId} not found");
                return NotFound($"Reservations with user id: {eventId} not found");
            }
            var reservations = _mapper.Map<IEnumerable<ReservationResponse>>(result);
            return Ok(reservations);
        }

        [HttpPut]
        [Route("reservation/{id}")]
        public async Task<IActionResult> UpdateReservation(int id, ReservationRequest reservationRequest)
        {
            var reservation = _mapper.Map<Reservation>(reservationRequest);
            var result = await _reservationService.UpdateReservationAsync(id, reservation);
            if (result == null)
            {
                _logger.Error($"Reservation with id: {id} not found");
                return NotFound($"Reservation with id: {id} not found");
            }
            var reservationResponse = _mapper.Map<EventResponse>(result);
            return Ok(reservationResponse);
        }
    }
}
