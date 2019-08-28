﻿using server.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Controllers
{
    [Route("api/[controller]")]
    public class DeputadoController : Controller
    {
        private readonly Repository _repository;

        public DeputadoController(Repository repository)
        {
            _repository = repository;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_repository.GetDeputadoById(id));
            }
            catch (Exception ex)
            {
                return BadRequest($"Não foi possível pesquisar :c -> {ex}");
            }
        }
    }
}