using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeOlhoNeles.Data.Entities
{
    public class Frente
    {
        public int id { get; set; }
        public string uri { get; set; }
        public string titulo { get; set; }
        public int idLegislatura { get; set; }
    }
}
