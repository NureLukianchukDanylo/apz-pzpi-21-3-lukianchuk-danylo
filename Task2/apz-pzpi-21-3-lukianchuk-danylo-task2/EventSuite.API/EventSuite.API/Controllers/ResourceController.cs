using AutoMapper;
using EventSuite.BLL.Services.Implementations;
using EventSuite.BLL.Services.Interfaces;
using EventSuite.Core.DTOs.Requests.Common;
using EventSuite.Core.DTOs.Requests.Mall;
using EventSuite.Core.DTOs.Requests.Resource;
using EventSuite.Core.DTOs.Responses.Mall;
using EventSuite.Core.DTOs.Responses.Resource;
using EventSuite.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventSuite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ResourceController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IResourceService _resourceService;
        private readonly Serilog.ILogger _logger;
        public ResourceController(IMapper mapper, IResourceService resourceService, Serilog.ILogger logger)
        {
            _mapper = mapper;
            _resourceService = resourceService;
            _logger = logger;
        }

        [HttpGet]
        [Route("resources")]
        public async Task<IActionResult> GetResources([FromQuery] GetRequest getRequest)
        {
            var result = await _resourceService.GetResourcesAsync(getRequest.PageInfo);
            if (!result.Any() || result == null)
            {
                _logger.Information("Resources not found");
                return NotFound("Resources not found");
            }
            var resources = _mapper.Map<IEnumerable<ResourceResponse>>(result);
            return Ok(resources);
        }

        [HttpGet]
        [Route("resource/{id}")]
        public async Task<IActionResult> GetResource(int id)
        {
            var result = await _resourceService.GetResourceByIdAsync(id);
            if (result == null)
            {
                _logger.Information($"Resource with id:{id} not found");
                return NotFound($"Resource with id:{id} not found");
            }
            var resource = _mapper.Map<ResourceResponse>(result);
            return Ok(resource);
        }

        [HttpDelete]
        [Route("resource/{id}")]
        public async Task<IActionResult> DeleteResource(int id)
        {
            var result = await _resourceService.DeleteResourceAsync(id);
            if (result is false)
            {
                _logger.Error($"Resource with id: {id} not found");
                return NotFound($"Resource with id: {id} not found");
            }
            return NoContent();
        }

        [HttpPost]
        [Route("resource")]
        public async Task<IActionResult> CreateResource(ResourceRequest resourceRequest)
        {
            var resource = _mapper.Map<Resource>(resourceRequest);
            var result = await _resourceService.CreateResourceAsync(resource);
            if (result == null)
            {
                _logger.Error($"Couldn't create resource");
                return BadRequest($"Couldn't create resource");
            }
            var resourceResponse = _mapper.Map<ResourceResponse>(result);
            return Ok(resourceResponse);
        }

        [HttpPut]
        [Route("resource/{id}")]
        public async Task<IActionResult> UpdateResource(int id, ResourceRequest resourceRequest)
        {
            var resource = _mapper.Map<Resource>(resourceRequest);
            var result = await _resourceService.UpdateResourceAsync (id, resource);
            if (result == null)
            {
                _logger.Error($"Resource with id: {id} not found");
                return NotFound($"Resource with id: {id} not found");
            }
            var resourceResponse = _mapper.Map<ResourceResponse>(result);
            return Ok(resourceResponse);
        }
    }
}
