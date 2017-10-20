using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ReduxSagaApp.Core.Repositories
{
    public interface IRepository<T> where T : class
    {
        Task<List<T>> QueryAllAsync();
        Task<List<T>> QueryAsync(Expression<Func<T, bool>> predicate);
    }
}
