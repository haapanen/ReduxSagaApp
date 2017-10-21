using System;
using System.Collections.Generic;
using System.Text;

namespace ReduxSagaApp.Core.Models
{
    public class ProductCreationModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int SoldCount { get; set; }
        public List<ProductModuleCreationModel> Modules { get; set; }
    }
}
