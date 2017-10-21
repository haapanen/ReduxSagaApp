using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using ReduxSagaApp.Core.Models;
using ReduxSagaApp.Core.Repositories;
using ReduxSagaApp.Core.ServiceContracts;

namespace ReduxSagaApp.Core.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        private readonly IMapper _mapper;

        public ProductService(IProductRepository productRepository, IMapper mapper)
        {
            _productRepository = productRepository;
            _mapper = mapper;
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

        public async Task<Product> CreateProduct(ProductCreationModel model)
        {
            var product = _mapper.Map<Product>(model);
            await _productRepository.AddAsync(product);
            await _productRepository.SaveChangesAsync();
            return product;
        }
    }
}
