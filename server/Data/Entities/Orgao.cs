﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Data.Entities
{
    public class Orgao
    {
        [Key]
        public int idOrgao { get; set; }
        public string uriOrgao { get; set; }
        public string siglaOrgao { get; set; }
        public string nomeOrgao { get; set; }
        public string titulo { get; set; }
        public string codTitulo { get; set; }
        public string dataInicio { get; set; }
        public string dataFim { get; set; }
    }
}
