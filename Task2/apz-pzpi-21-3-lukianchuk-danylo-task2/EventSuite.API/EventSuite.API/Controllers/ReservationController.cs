using Microsoft.AspNetCore.Mvc;

namespace EventSuite.API.Controllers
{
    public class ReservationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
