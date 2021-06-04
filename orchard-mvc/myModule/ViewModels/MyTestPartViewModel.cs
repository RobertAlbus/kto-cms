using Microsoft.AspNetCore.Mvc.ModelBinding;
using OrchardCore.ContentManagement;
using myModule.Models;
using myModule.Settings;

namespace myModule.ViewModels
{
    public class MyTestPartViewModel
    {
        public string MySetting { get; set; }

        public bool Show { get; set; }

        [BindNever]
        public ContentItem ContentItem { get; set; }

        [BindNever]
        public MyTestPart MyTestPart { get; set; }

        [BindNever]
        public MyTestPartSettings Settings { get; set; }
    }
}
