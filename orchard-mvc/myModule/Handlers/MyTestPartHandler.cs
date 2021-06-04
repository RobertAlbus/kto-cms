using OrchardCore.ContentManagement.Handlers;
using System.Threading.Tasks;
using myModule.Models;

namespace myModule.Handlers
{
    public class MyTestPartHandler : ContentPartHandler<MyTestPart>
    {
        public override Task InitializingAsync(InitializingContentContext context, MyTestPart part)
        {
            part.Show = true;

            return Task.CompletedTask;
        }
    }
}