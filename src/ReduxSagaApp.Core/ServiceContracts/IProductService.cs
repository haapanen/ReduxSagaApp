using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReduxSagaApp.Core.ServiceContracts
{
    public interface IProductService
    {
        Task<IList<Product>> FindProducts(string name);
        Task<IList<Product>> GetProducts();
    }
}
