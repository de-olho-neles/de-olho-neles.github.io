using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using server.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;

namespace server.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly Microsoft.AspNetCore.Identity.SignInManager<Usuario> _signInManager;
        private readonly UserManager<Usuario> _userManager;
        private readonly IConfiguration _config;

        public AccountController(SignInManager<Usuario> signInManager,
            UserManager<Usuario> userManager,
            IConfiguration config)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _config = config;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]LoginParams param)
        {
            if (param != null)
            {
                var user = await _userManager.FindByEmailAsync(param.Email);
                if (user != null)
                {
                    var result = await _signInManager.CheckPasswordSignInAsync(user, param.Password, false);
                    if (result.Succeeded)
                    {
                        //Create token
                        var claims = new[]
                        {
                            new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                            new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName)
                        };

                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]));
                        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                        var token = new JwtSecurityToken(
                            _config["Tokens:Issuer"],
                            _config["Tokens:Audience"],
                            claims,
                            expires: DateTime.Now.AddMinutes(30),
                            signingCredentials: creds);

                        var results = new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(token),
                            expiration = token.ValidTo
                        };

                        return Created("", results);
                    }
                }
            }

            return BadRequest();
        }

        [HttpPost("signup")]
        public async Task<IActionResult> Signup([FromBody]LoginParams param){
            if (param != null)
	        {
                var user = await _userManager.FindByEmailAsync(param.Email);
                if (user == null)
	            {
                    user = new Usuario {

                        UserName = param.Email,
                        Email = param.Email
                    };
                    var result = await _userManager.CreateAsync(user, param.Password);
                    return Created("", result);
	            }
                return Conflict();
	        }
            return BadRequest();
        }
    }
}
