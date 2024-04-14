using Microsoft.AspNetCore.Mvc;

namespace EventSuite.API.Controllers
{
    public class EventResourceController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
