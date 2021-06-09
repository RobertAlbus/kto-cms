using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Piranha;
using Piranha.AspNetCore.Identity.PostgreSQL;
using Piranha.AttributeBuilder;
using Piranha.Data.EF.PostgreSql;
using Piranha.Manager.Editor;

namespace Kernel
{
    public class Startup
    {
        private readonly IConfiguration _config;

        /// <summary>
        /// Default constructor.
        /// </summary>
        /// <param name="configuration">The current configuration</param>
        public Startup(IConfiguration configuration)
        {
            _config = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            // https://github.com/nelson-rz-junior/BookNetCore3/blob/58daf9d53c9cd6f482b1d76d9005ed6f3e0449d5/Code/PracticalApps/NorthwindCms/Startup.cs
            services.AddMvc().
                AddPiranhaManagerOptions().
                SetCompatibilityVersion(CompatibilityVersion.Latest);
            
            // Service setup
            services.AddPiranha(options =>
            {
                 // This will enable automatic reload of .cshtml
                 // without restarting the application. However since
                 // this adds a slight overhead it should not be
                 // enabled in production.
                options.AddRazorRuntimeCompilation = true;
                
                //
                // NOTE from Rob
                // will have to look into connectors for S3 for file storage
                //
                options.UseFileStorage(naming: Piranha.Local.FileStorageNaming.UniqueFolderNames);
                options.UseImageSharp();
                options.UseManager();
                options.UseTinyMCE();
                options.UseMemoryCache();
                options.UseEF<PostgreSqlDb>(db =>
                    db.UseNpgsql(_config.GetConnectionString("piranha")));
                options.UseIdentityWithSeed<IdentityPostgreSQLDb>(db =>
                    db.UseNpgsql(_config.GetConnectionString("piranha")));
                
                
                /**
                 * Here you can configure the different permissions
                 * that you want to use for securing content in the
                 * application.
                options.UseSecurity(o =>
                {
                    o.UsePermission("WebUser", "Web User");
                });
                 */

                /**
                 * Here you can specify the login url for the front end
                 * application. This does not affect the login url of
                 * the manager interface.
                options.LoginUrl = "login";
                 */
            });

            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IApi api)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Initialize Piranha
            App.Init(api);

            // Build content types
            new ContentTypeBuilder(api)
                .AddAssembly(typeof(Startup).Assembly)
                .Build()
                .DeleteOrphans();

            // Configure Tiny MCE
            EditorConfig.FromFile("editorconfig.json");

            // Middleware setup
            app.UsePiranha(options => {
                options.UseManager();
                options.UseTinyMCE();
                options.UseIdentity();
            });
            app.UseMvc();
        }
    }
}
