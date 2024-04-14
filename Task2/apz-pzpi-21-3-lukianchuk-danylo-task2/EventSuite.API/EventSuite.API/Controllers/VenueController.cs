using Microsoft.AspNetCore.Mvc;

namespace EventSuite.API.Controllers
{
    public class VenueController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
