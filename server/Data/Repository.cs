﻿using server.Data.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace server.Data
{
    public class Repository
    {
        private readonly UserContext _userContext;

        public Repository(UserContext userContext)
        {
            _userContext = userContext;
        }

        internal JArray GetFullJsonResponse(string url)
        {
            string nextPage = "";

            WebClient client = new WebClient();
            JObject parsedResult = JObject.Parse(client.DownloadString(url));
            JArray finalResult = (JArray)parsedResult["dados"];
            foreach (var link in parsedResult["links"])
            {
                if (link["rel"].ToString() == "next")
                {
                    nextPage = link["href"].ToString();
                }
            }

            while (nextPage != "")
            {
                parsedResult = JObject.Parse(client.DownloadString(nextPage));
                finalResult.Merge((JArray)parsedResult["dados"]);
                foreach (var link in parsedResult["links"])
                {
                    if (link["rel"].ToString() == "next")
                    {
                        nextPage = link["href"].ToString();
                        break;
                    }
                    nextPage = "";
                }
            }
            return finalResult;
        }

        internal List<Deputado> GetAllDeputados()
        {
            WebClient client = new WebClient();
            string url = "https://dadosabertos.camara.leg.br/api/v2/deputados";
            JObject parsedResult = JObject.Parse(client.DownloadString(url));
            List<Deputado> data = parsedResult["dados"].ToObject<List<Deputado>>();
            return data;
        }

        internal List<Deputado> FilterDeputadoList(string name, string partido, string estado)
        {
            List<Deputado> deputados = GetAllDeputados();
            List<Deputado> filteredDeputados = new List<Deputado>();

            //Is only added to the filtered collection if satisfies all search parameters (default values allow empty fields to not break this)
            foreach (Deputado deputado in deputados)
            {
                if ((deputado.nome.ToLower().Contains(name.ToLower())) &&
                    (deputado.siglaPartido.ToLower().Contains(partido.ToLower())) &&
                    (deputado.siglaUf.ToLower().Contains(estado.ToLower())))
                {
                    filteredDeputados.Add(deputado);
                }
            }

            if (filteredDeputados.Any())
            {
                return filteredDeputados;
            }
            else
            {
                return null;
            }
        }

        internal DetailedDeputado GetDeputadoById(int id, bool populateDespesas, bool populateFrentes, bool populateOrgaos)
        {
            WebClient client = new WebClient();
            string url = "https://dadosabertos.camara.leg.br/api/v2/deputados/" + id;
            JObject parsedResult = JObject.Parse(client.DownloadString(url));
            DetailedDeputado data = parsedResult["dados"].ToObject<DetailedDeputado>();

            if (populateDespesas) { data.despesas = GetDespesasFromDeputado(id); }
            if (populateFrentes) { data.frentes = GetFrentesFromDeputado(id); }
            if (populateOrgaos) { data.orgaos = GetOrgaosFromDeputado(id); }


            return data;
        }

        internal List<Despesa> GetDespesasFromDeputado(int id)
        {
            string url = "https://dadosabertos.camara.leg.br/api/v2/deputados/" + id + "/despesas";
            List<Despesa> data = GetFullJsonResponse(url).ToObject<List<Despesa>>();
            return data;
        }

        internal List<Frente> GetFrentesFromDeputado(int id)
        {
            string url = "https://dadosabertos.camara.leg.br/api/v2/deputados/" + id + "/frentes";
            List<Frente> data = GetFullJsonResponse(url).ToObject<List<Frente>>();
            return data;
        }

        internal List<Orgao> GetOrgaosFromDeputado(int id)
        {
            string url = "https://dadosabertos.camara.leg.br/api/v2/deputados/" + id + "/orgaos";
            List<Orgao> data = GetFullJsonResponse(url).ToObject<List<Orgao>>();
            return data;
        }

        internal List<String> GetPartidosList()
        {
            string url = "https://dadosabertos.camara.leg.br/api/v2/partidos";
            List<Partido> data = GetFullJsonResponse(url).ToObject<List<Partido>>();
            var v = data.Select(x => x.sigla).ToList();
            return v;
        }

        internal List<String> GetEstadosList()
        {
            string url = "https://dadosabertos.camara.leg.br/api/v2/referencias/uf";
            List<Estado> data = GetFullJsonResponse(url).ToObject<List<Estado>>();
            var v = data.Select(x => x.sigla).ToList();
            return v;
        }

        //Login functionalities
        internal Boolean AddDeputadoToUser(Usuario user, DetailedDeputado deputado)
        {
            //checking if the deputado is alreadyy added
            var userOnDb = _userContext.Users.SingleOrDefault(u => u.Email == user.Email);
            var result = userOnDb.Deputados.Find(x => x == deputado);
            //if the deputado is not added yet
            if (result == null)
            {
                userOnDb.Deputados.Add(deputado);
                _userContext.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
