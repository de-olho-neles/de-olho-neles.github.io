using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using server.Data.Entities;
using server.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly SignInManager<Usuario> _signInManager;

        public AccountController( SignInManager<Usuario> signInManager)
        {
            _signInManager = signInManager;
        }

        public IActionResult Login()
        {
            if (this.User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "Home");
            }
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] string username, string password, bool rememberme)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(username,
                    password,
                    rememberme, false);
                if (result.Succeeded)
                {
                    if (Request.Query.Keys.Contains("ReturnUrl"))
                    {
                        return Redirect(Request.Query["ReturnUrl"].First());
                    }
                    else
                    {
                        return RedirectToAction("Index", "Home");
                    }
                }
            }
            ModelState.AddModelError("", "Failed to login");
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
    }
}
