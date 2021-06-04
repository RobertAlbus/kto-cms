using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Extend.Fields;
using Piranha.Models;

[SiteType(Title = "My Simple Site")]
public class MySimpleSite : SiteContent<MySimpleSite>
{
    [Region]
    public ImageField Logo { get; set; }
}