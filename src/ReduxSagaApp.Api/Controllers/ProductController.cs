using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReduxSagaApp.Core;
using ReduxSagaApp.Core.Models;
using ReduxSagaApp.Core.ServiceContracts;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReduxSagaApp.Api.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<Product>> Get()
        {
            return await _productService.GetProducts();
        }

        [HttpPost]
        public async Task<Product> Create([FromBody]ProductCreationModel model)
        {
            return await _productService.CreateProduct(model);
        }
    }
}
