using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ReduxSagaApp.Core.Repositories;
using ReduxSagaApp.Core.ServiceContracts;

namespace ReduxSagaApp.Core.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<IList<Product>> FindProducts(string name)
        {
            return await _productRepository.QueryAsync(x => x.Name.Contains(name));
        }

        public async Task<IList<Product>> GetProducts()
        {
            return await _productRepository
                .QueryAllAsync();
        }
    }
}
