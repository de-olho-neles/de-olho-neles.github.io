using System.ComponentModel.DataAnnotations;

namespace server.Data.Entities
{
    public class LoginParams
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}
