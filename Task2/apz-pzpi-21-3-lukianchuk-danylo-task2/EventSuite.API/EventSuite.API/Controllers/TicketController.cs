using AutoMapper;
using EventSuite.BLL.Services.Implementations;
using EventSuite.BLL.Services.Interfaces;
using EventSuite.Core.DTOs.Requests.Common;
using EventSuite.Core.DTOs.Requests.Registration;
using EventSuite.Core.DTOs.Requests.Ticket;
using EventSuite.Core.DTOs.Responses.Registration;
using EventSuite.Core.DTOs.Responses.Ticket;
using EventSuite.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventSuite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TicketController : Controller
    {
        private readonly IMapper _mapper;
        private readonly ITicketService _ticketService;
        private readonly Serilog.ILogger _logger;
        public TicketController(IMapper mapper, ITicketService ticketService, Serilog.ILogger logger)
        {
            _mapper = mapper;
            _ticketService = ticketService;
            _logger = logger;
        }

        [HttpGet]
        [Route("tickets")]
        public async Task<IActionResult> GetTickets([FromQuery] GetRequest getRequest)
        {
            var result = await _ticketService.GetTicketsAsync(getRequest.PageInfo);
            if (!result.Any() || result == null)
            {
                _logger.Information("Tickets not found");
                return NotFound("Tickets not found");
            }
            var tickets = _mapper.Map<IEnumerable<TicketResponse>>(result);
            return Ok(tickets);
        }

        [HttpGet]
        [Route("ticket/{id}")]
        public async Task<IActionResult> GetTicket(int id)
        {
            var result = await _ticketService.GetTicketByIdAsync(id);
            if (result == null)
            {
                _logger.Information($"Ticket with id:{id} not found");
                return NotFound($"Ticket with id:{id} not found");
            }
            var ticket = _mapper.Map<TicketResponse>(result);
            return Ok(ticket);
        }

        [HttpDelete]
        [Route("ticket/{id}")]
        public async Task<IActionResult> DeleteTicket(int id)
        {
            var result = await _ticketService.DeleteTicketAsync(id);
            if (result is false)
            {
                _logger.Error($"Ticket with id: {id} not found");
                return NotFound($"Ticket with id: {id} not found");
            }
            return NoContent();
        }

        [HttpPost]
        [Route("ticket")]
        public async Task<IActionResult> CreateTicket(TicketRequest ticketRequest)
        {
            var ticket = _mapper.Map<Ticket>(ticketRequest);
            var result = await _ticketService.CreateTicketAsync(ticket);
            if (result == null)
            {
                _logger.Error($"Couldn't create ticket");
                return BadRequest($"Couldn't create ticket");
            }
            var ticketResponse = _mapper.Map<TicketResponse>(result);
            return Ok(ticketResponse);
        }

        [HttpGet]
        [Route("tickets/{registrationId}")]
        public async Task<IActionResult> GetTicketsByRegistrationId(int registrationId)
        {
            var result = await _ticketService.GetTicketsByRegistrationIdAsync(registrationId);
            if (!result.Any())
            {
                _logger.Error($"Tickets with location id: {registrationId} not found");
                return NotFound($"Tickets with location id: {registrationId} not found");
            }
            var tickets = _mapper.Map<IEnumerable<TicketResponse>>(result);
            return Ok(tickets);
        }

        [HttpPut]
        [Route("ticket/{id}")]
        public async Task<IActionResult> UpdateTicket(int id, TicketRequest ticketRequest)
        {
            var ticket = _mapper.Map<Ticket>(ticketRequest);
            var result = await _ticketService.UpdateTicketAsync(id, ticket);
            if (result == null)
            {
                _logger.Error($"Ticket with id: {id} not found");
                return NotFound($"Ticket with id: {id} not found");
            }
            var ticketResponse = _mapper.Map<TicketResponse>(result);
            return Ok(ticketResponse);
        }
    }
}
