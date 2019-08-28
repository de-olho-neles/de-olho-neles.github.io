using server.Data.Entities;
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

        internal List<Deputado> FilterDeputadoList(string name, string partido, string uf)
        {
            List<Deputado> deputados = GetAllDeputados();
            List<Deputado> matchingDeputados = new List<Deputado>();
            List<Deputado> filteredDeputados = new List<Deputado>();

            foreach (Deputado deputado in deputados)
            {
                //Getting list of matching names first
                if (deputado.nome.ToLower().Contains(name.ToLower()))
                {
                    matchingDeputados.Add(deputado);
                }

            }

            //checking if there are any filters so we don't iterate for nothing
            if (partido != "" || uf != "")
            {
                foreach (Deputado deputado in matchingDeputados)
                {
                    //Filtering the result from name search
                    if ((partido != "") && (deputado.siglaPartido.ToLower().Contains(partido.ToLower())))
                    {
                        filteredDeputados.Add(deputado);
                    }
                    if ((uf != "") && (deputado.siglaUf.ToLower().Contains(uf.ToLower())))
                    {
                        filteredDeputados.Add(deputado);
                    }
                }
            }
            //If there are no filters we just return the same list
            else { filteredDeputados = matchingDeputados; }

            if (filteredDeputados.Any())
            {
                return filteredDeputados;
            }
            else
            {
                return null;
            }
        }

        internal DetailedDeputado GetDeputadoById(int id)
        {
            WebClient client = new WebClient();
            string url = "https://dadosabertos.camara.leg.br/api/v2/deputados/" + id;
            JObject parsedResult = JObject.Parse(client.DownloadString(url));
            DetailedDeputado data = parsedResult["dados"].ToObject<DetailedDeputado>();

            data.despesas = GetDespesasFromDeputado(id);
            data.frentes = GetFrentesFromDeputado(id);
            data.orgaos = GetOrgaosFromDeputado(id);


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
    }
}
