using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeOlhoNeles.Data.Entities
{
    public class Despesa
    {
        public int ano { get; set; }
        public int mes { get; set; }
        public string tipoDespesa { get; set; }
        public int codDocumento { get; set; }
        public string tipoDocumento { get; set; }
        public int codTipoDocumento { get; set; }
        public string dataDocumento { get; set; }
        public string numDocumento { get; set; }
        public double valorDocumento { get; set; }
        public string urlDocumento { get; set; }
        public string nomeFornecedor { get; set; }
        public string cnpjCpfFornecedor { get; set; }
        public double valorLiquido { get; set; }
        public double valorGlosa { get; set; }
        public string numRessarcimento { get; set; }
        public int codLote { get; set; }
        public int parcela { get; set; }
    }
}
