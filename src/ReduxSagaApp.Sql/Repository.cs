using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReduxSagaApp.Core.Repositories;

namespace ReduxSagaApp.Sql
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected readonly ReduxSagaAppContext DbContext;

        public Repository(ReduxSagaAppContext dbContext)
        {
            DbContext = dbContext;
        }

        public async void SaveChanges()
        {
            await DbContext.SaveChangesAsync();
        }

        public Task<List<T>> QueryAllAsync()
        {
            return DbContext.Set<T>().ToListAsync();
        }

        public Task<List<T>> QueryAsync(Expression<Func<T, bool>> predicate)
        {
            return DbContext.Set<T>().Where(predicate).ToListAsync();
        }
    }
}
