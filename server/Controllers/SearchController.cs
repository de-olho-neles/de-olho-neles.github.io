using server.Data;
using server.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Controllers
{
    [Route("api/[controller]")]
    public class SearchController : Controller
    {
        private readonly Repository _repository;

        public SearchController(Repository repository)
        {
            _repository = repository;
        }


        [HttpGet]
        public IActionResult Index(string name = "", string partido = "", string estado = "")
        {
            try
            {
                return Ok(_repository.FilterDeputadoList(name, partido, estado));
            }
            catch (Exception ex)
            {
                return BadRequest($"Não foi possível pesquisar :c -> {ex}");
            }
        }

        [HttpGet("estados")]
        public IActionResult Estados()
        {
            try
            {
                return Ok(_repository.GetEstadosList());
            }
            catch (Exception ex)
            {
                return BadRequest($"Não foi possível encontrar os estados :c -> {ex}");
            }
        }

        [HttpGet("partidos")]
        public IActionResult Partidos()
        {
            try
            {
                return Ok(_repository.GetPartidosList());
            }
            catch (Exception ex)
            {
                return BadRequest($"Não foi possível encontrar os partidos :c -> {ex}");
            }
        }
    }
}
