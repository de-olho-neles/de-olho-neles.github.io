﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Data.Entities
{
    public class DetailedDeputado
    {
        public int id { get; set; }
        public string uri { get; set; }
        public string nomeCivil { get; set; }
        public UltimoStatus ultimoStatus { get; set; }
        public string cpf { get; set; }
        public string sexo { get; set; }
        public string urlWebsite { get; set; }
        public string dataNascimento { get; set; }
        public string dataFalecimento { get; set; }
        public string ufNascimento { get; set; }
        public string municipioNascimento { get; set; }
        public string escolaridade { get; set; }
        public string email { get; set; }
        public List<Despesa> despesas { get; set; }
        public List<Frente> frentes { get; set; }
        public List<Orgao> orgaos { get; set; }
    }
    public class Gabinete
    {
        public int id { get; set; }
        public string nome { get; set; }
        public string predio { get; set; }
        public string sala { get; set; }
        public string andar { get; set; }
        public string telefone { get; set; }
        public string email { get; set; }
    }

    public class UltimoStatus
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ultimoStatusId { get; set; }
        public string uri { get; set; }
        public string nome { get; set; }
        public string siglaPartido { get; set; }
        public string uriPartido { get; set; }
        public string siglaUf { get; set; }
        public int idLegislatura { get; set; }
        public string urlFoto { get; set; }
        public string email { get; set; }
        public string data { get; set; }
        public string nomeEleitoral { get; set; }
        public Gabinete gabinete { get; set; }
        public string situacao { get; set; }
        public string condicaoEleitoral { get; set; }
        public string descricaoStatus { get; set; }
    }
}

