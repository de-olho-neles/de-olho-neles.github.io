using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Data.Entities
{
    public class Partido
    {
        public int id { get; set; }
        public string sigla { get; set; }
        public string nome { get; set; }
        public string uri { get; set; }
    }
}
