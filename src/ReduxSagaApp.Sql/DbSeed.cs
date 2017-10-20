using System;
using System.Collections.Generic;
using System.Text;
using ReduxSagaApp.Core;

namespace ReduxSagaApp.Sql
{
    public class DbSeed
    {
        public void Seed(ReduxSagaAppContext ctx)
        {
            ctx.Products.AddRange(new List<Product>
            {
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Kolajuoma",
                    CreatedAt = DateTime.UtcNow,
                    CreatedBy = "SEED",
                    Description = "Herkullinen juoma, jota nauttimalla elämästä tulee kivaa.",
                    ModifiedAt = null,
                    ModifiedBy = null,
                    Price = 1.85,
                    SoldCount = 28172,
                    Modules = new List<ProductModule>
                    {
                    }
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Auto",
                    CreatedAt = DateTime.UtcNow,
                    CreatedBy = "SEED",
                    Description = "Autolla pääsee.",
                    ModifiedAt = null,
                    ModifiedBy = null,
                    Price = 20000,
                    SoldCount = 288,
                    Modules = new List<ProductModule>
                    {
                        new ProductModule
                        {
                            Id = Guid.NewGuid(),
                            Name = "Moottori",
                            CreatedAt = DateTime.UtcNow,
                            CreatedBy = "SEED",
                            Description = "Moottori on olennainen",
                            ModifiedAt = null,
                            ModifiedBy = null,
                            Price = 2000,
                        },
                        new ProductModule
                        {
                            Id = Guid.NewGuid(),
                            Name = "Rengas",
                            CreatedAt = DateTime.UtcNow,
                            CreatedBy = "SEED",
                            Description = "Rengas on kätevä",
                            ModifiedAt = null,
                            ModifiedBy = null,
                            Price = 200,
                        }
                    }
                }
            });
            ctx.SaveChanges();
        }
    }
}
