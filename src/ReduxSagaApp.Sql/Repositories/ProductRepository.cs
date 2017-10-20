using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReduxSagaApp.Core;
using ReduxSagaApp.Core.Repositories;

namespace ReduxSagaApp.Sql.Repositories
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        public ProductRepository(ReduxSagaAppContext dbContext) : base(dbContext)
        {
        }

        public new Task<List<Product>> QueryAsync(Expression<Func<Product, bool>> predicate)
        {
            return DbContext.Products.Where(predicate).Include(x => x.Modules).ToListAsync();
        }

        public new Task<List<Product>> QueryAllAsync()
        {
            return DbContext.Products.Include(x => x.Modules).ToListAsync();
        }
    }
}
