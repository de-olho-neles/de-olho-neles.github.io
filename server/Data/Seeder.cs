using Microsoft.AspNetCore.Identity;
using server.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Data
{
    public class Seeder
    {
        private readonly UserContext _context;
        private readonly UserManager<Usuario> _userManager;

        public Seeder(UserContext context, UserManager<Usuario> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            _context.Database.EnsureCreated();

            Usuario user = await _userManager.FindByEmailAsync("teste@teste.com");
            if (user == null)
            {
                user = new Usuario()
                {
                    Email = "teste@teste.com",
                    UserName = "PapaFrancisco",
                    UserId = 12345
                };

                var result = await _userManager.CreateAsync(user, "Teste123!");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Teste user could not be created");
                }
            }

            _context.SaveChanges();
        }
    }
}
