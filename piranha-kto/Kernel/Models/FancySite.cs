using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Extend.Fields;
using Piranha.Models;


[SiteType(Title = "Fancy Site")]
public class FancySite : SiteContent<FancySite>
{
    [Region(Title = "Main Administration")]
    public SiteAdministration SiteAdministration { get; set; }
    
    // tried to extend the the default "Settings" region but it simply created a new region called Settings
    [Region(Title = "Settings")]
    [RegionDescription("Optional header shown at the top of the page.")]
    public ExtendedSettings ExtendedSettings { get; set; }
    
    // tried to extend the the default "Settings" region but it doesn't show up
    [Field(Title = "Your Favourite Riddle")]
    public TextField MyCustomField { get; set; }
}

public class SiteAdministration
{
    [Field(
        Title = "SiteColor",
        Options = FieldOption.HalfWidth
        )]
    public ColorField SiteColor { get; set; }
    
    [Field(
        Title = "Expiry Date",
        Options = FieldOption.HalfWidth
    )]
    public DateField ExpiryDate { get; set; }
}

public class ExtendedSettings
{
    [Field(Title = "A Custom Field")]
    public TextField MyCustomField { get; set; }
    
    [Field(Title = "Another Custom Field")]
    public TextField MyCustomField2 { get; set; }
}
