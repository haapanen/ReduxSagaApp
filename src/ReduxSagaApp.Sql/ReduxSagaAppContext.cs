using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using ReduxSagaApp.Core;

namespace ReduxSagaApp.Sql
{
    public class ReduxSagaAppContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=ReduxSagaApp.db");
        }
    }
}
