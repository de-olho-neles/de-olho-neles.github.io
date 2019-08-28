using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace server.Data.Entities
{
    public class Usuario : IdentityUser
    {
        public int UserId { get; set; }
        public List<Deputado> Deputados { get; set; }
    }
}