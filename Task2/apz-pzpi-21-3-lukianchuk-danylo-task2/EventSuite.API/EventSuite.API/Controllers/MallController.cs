using AutoMapper;
using EventSuite.BLL.Services.Interfaces;
using EventSuite.Core.DTOs.Requests.Common;
using EventSuite.Core.DTOs.Requests.Event;
using EventSuite.Core.DTOs.Requests.Mall;
using EventSuite.Core.DTOs.Responses.Event;
using EventSuite.Core.DTOs.Responses.Mall;
using EventSuite.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventSuite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class MallController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IMallService _mallService;
        private readonly Serilog.ILogger _logger;
        public MallController(IMapper mapper, IMallService mallService, Serilog.ILogger logger)
        {
            _mapper = mapper;
            _mallService = mallService;
            _logger = logger;
        }

        [HttpGet]
        [Route("malls")]
        public async Task<IActionResult> GetMalls([FromQuery] GetRequest getRequest)
        {
            var result = await _mallService.GetMallsAsync(getRequest.PageInfo);
            if (!result.Any() || result == null)
            {
                _logger.Information("Malls not found");
                return NotFound("Malls not found");
            }
            var malls = _mapper.Map<IEnumerable<MallResponse>>(result);
            return Ok(malls);
        }

        [HttpGet]
        [Route("mall/{id}")]
        public async Task<IActionResult> GetMall(int id)
        {
            var result = await _mallService.GetMallByIdAsync(id);
            if (result == null)
            {
                _logger.Information($"Mall with id:{id} not found");
                return NotFound($"Mall with id:{id} not found");
            }
            var mall = _mapper.Map<MallResponse>(result);
            return Ok(mall);
        }

        [HttpDelete]
        [Route("mall/{id}")]
        public async Task<IActionResult> DeleteMall(int id)
        {
            var result = await _mallService.DeleteMallAsync(id);
            if (result is false)
            {
                _logger.Error($"Mall with id: {id} not found");
                return NotFound($"Mall with id: {id} not found");
            }
            return NoContent();
        }

        [HttpPost]
        [Route("mall")]
        public async Task<IActionResult> CreateMall(MallRequest mallRequest)
        {
            var mall = _mapper.Map<Mall>(mallRequest);
            var result = await _mallService.CreateMallAsync(mall);
            if (result == null)
            {
                _logger.Error($"Couldn't create mall");
                return BadRequest($"Couldn't create mall");
            }
            var mallResponse = _mapper.Map<MallResponse>(result);
            return Ok(mallResponse);
        }

        [HttpGet]
        [Route("malls/{locationId}")]
        public async Task<IActionResult> GetMallsByLocationId(int locationId)
        {
            var result = await _mallService.GetMallsByLocationIdAsync(locationId);
            if (!result.Any())
            {
                _logger.Error($"Malls with location id: {locationId} not found");
                return NotFound($"Malls with location id: {locationId} not found");
            }
            var malls = _mapper.Map<IEnumerable<MallResponse>>(result);
            return Ok(malls);
        }

        [HttpPut]
        [Route("mall/{id}")]
        public async Task<IActionResult> UpdateMall(int id, MallRequest mallRequest)
        {
            var mall = _mapper.Map<Mall>(mallRequest);
            var result = await _mallService.UpdateMallAsync(id, mall);
            if (result == null)
            {
                _logger.Error($"Mall with id: {id} not found");
                return NotFound($"Mall with id: {id} not found");
            }
            var mallResponse = _mapper.Map<MallResponse>(result);
            return Ok(mallResponse);
        }
    }
}
