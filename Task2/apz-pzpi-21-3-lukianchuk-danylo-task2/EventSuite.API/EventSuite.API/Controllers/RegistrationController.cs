using Microsoft.AspNetCore.Mvc;

namespace EventSuite.API.Controllers
{
    public class RegistrationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
