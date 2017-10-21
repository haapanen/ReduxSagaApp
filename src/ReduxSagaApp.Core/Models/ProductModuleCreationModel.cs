using System;
using System.Collections.Generic;
using System.Text;

namespace ReduxSagaApp.Core.Models
{
    public class ProductModuleCreationModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
    }
}
