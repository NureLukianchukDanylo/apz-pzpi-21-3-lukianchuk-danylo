using Microsoft.AspNetCore.Mvc;

namespace EventSuite.API.Controllers
{
    public class ResourceController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
