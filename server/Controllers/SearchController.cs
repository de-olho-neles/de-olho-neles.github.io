using DeOlhoNeles.Data;
using DeOlhoNeles.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeOlhoNeles.Controllers
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
        public IActionResult Index(string name = "", string partido = "", string uf = "")
        {
            try
            {
                return Ok(_repository.FilterDeputadoList(name, partido, uf));
            }
            catch (Exception ex)
            {
                return BadRequest($"Não foi possível pesquisar :c -> {ex}");
            }
        }
    }
}
