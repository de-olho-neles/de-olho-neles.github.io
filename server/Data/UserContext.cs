using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using server.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Data
{
    public class UserContext : IdentityDbContext<Usuario>
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options) { }
        public new DbSet<Usuario> Users { get; set; }
    }
}