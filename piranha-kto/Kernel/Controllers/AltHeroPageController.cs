using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Piranha;

namespace Kernel.Controllers
{
    public class AltHeroPageController: Controller
    {
        private readonly IApi _api;

        public AltHeroPageController(IApi api)
        {
            _api = api;
        }
        
        [Route("/Alt1")]
        public async Task<IActionResult> Alt1()
        {
            return View();
        }
    }
}