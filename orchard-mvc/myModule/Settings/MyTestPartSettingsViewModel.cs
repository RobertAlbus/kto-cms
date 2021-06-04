using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace myModule.Settings
{
    public class MyTestPartSettingsViewModel
    {
        public string MySetting { get; set; }

        [BindNever]
        public MyTestPartSettings MyTestPartSettings { get; set; }
    }
}
