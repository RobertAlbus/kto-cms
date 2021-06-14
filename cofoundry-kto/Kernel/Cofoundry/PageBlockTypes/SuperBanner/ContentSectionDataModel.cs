using Cofoundry.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Kontralto_Site
{
    /// <summary>
    /// An example page block type. 
    /// See https://github.com/cofoundry-cms/cofoundry/wiki/Page-Block-Types
    /// for more information
    /// </summary>
    public class ContentSectionDataModel : IPageBlockTypeDataModel, IPageBlockTypeDisplayModel
    {
        [Required]
        [Display]
        public string Heading { get; set; }

        [Required]
        [Display]
        public string Subheading { get; set; }

        [Required]
        [Display(Name = "Body", Description = "Rich text displayed at full width")]
        [Html(HtmlToolbarPreset.BasicFormatting, HtmlToolbarPreset.Headings, HtmlToolbarPreset.Media)]
        public string Body { get; set; }
    }
}