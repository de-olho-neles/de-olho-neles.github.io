using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeOlhoNeles.Data.Entities
{
    public class Deputado
    {
        public int id { get; set; }
        public string uri { get; set; }
        public string nome { get; set; }
        public string siglaPartido { get; set; }
        public string uriPartido { get; set; }
        public string siglaUf { get; set; }
        public int idLegislatura { get; set; }
        public string urlFoto { get; set; }
        public string email { get; set; }
    }
}
