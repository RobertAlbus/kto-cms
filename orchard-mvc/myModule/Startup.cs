using System;
using Fluid;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using OrchardCore.ContentManagement;
using OrchardCore.ContentManagement.Display.ContentDisplay;
using OrchardCore.ContentManagement.Handlers;
using OrchardCore.ContentTypes.Editors;
using OrchardCore.Data.Migration;
using myModule.Drivers;
using myModule.Handlers;
using myModule.Models;
using myModule.Settings;
using myModule.ViewModels;
using OrchardCore.Modules;

namespace myModule
{
    public class Startup : StartupBase
    {
        public override void ConfigureServices(IServiceCollection services)
        {
            services.Configure<TemplateOptions>(o =>
            {
                o.MemberAccessStrategy.Register<MyTestPartViewModel>();
            });

            services.AddContentPart<MyTestPart>()
                .UseDisplayDriver<MyTestPartDisplayDriver>()
                .AddHandler<MyTestPartHandler>();

            services.AddScoped<IContentTypePartDefinitionDisplayDriver, MyTestPartSettingsDisplayDriver>();
            services.AddScoped<IDataMigration, Migrations>();
        }

        public override void Configure(IApplicationBuilder builder, IEndpointRouteBuilder routes, IServiceProvider serviceProvider)
        {
            routes.MapAreaControllerRoute(
                name: "Home",
                areaName: "myModule",
                pattern: "Home/Index",
                defaults: new { controller = "Home", action = "Index" }
            );
        }
    }
}
