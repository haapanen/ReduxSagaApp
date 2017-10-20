using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ReduxSagaApp.Core
{
    public class ProductModule
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        [MaxLength(40)]
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }
        [MaxLength(40)]
        public string CreatedBy { get; set; }
        [MaxLength(40)]
        public string ModifiedBy { get; set; }
        public double Price { get; set; }
    }
}
