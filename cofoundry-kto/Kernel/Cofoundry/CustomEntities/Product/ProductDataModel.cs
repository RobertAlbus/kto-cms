using Cofoundry.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Kontralto_Site
{
    public class ProductDataModel : ICustomEntityDataModel
    {
        [MaxLength(500)]
        [Display(Description = "A short description of the product.")]
        [MultiLineText]
        public string ShortDescription { get; set; }
    }
}