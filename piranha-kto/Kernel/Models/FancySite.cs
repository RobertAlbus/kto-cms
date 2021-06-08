using System.ComponentModel.DataAnnotations;
using Kernel.Models;
using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Extend.Fields;
using Piranha.Extend.Fields.Settings;
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

    [Region(Title = "Fields Fields Fields")]
    public IncludedFieldTypes FieldTypesDemo { get; set; }
    
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
    [Field(
        Title = "A Custom Field",
        Placeholder = "This is placeholder text"
        )]
    [FieldDescription("This text is to guide the content author")]
    public TextField MyCustomField { get; set; }
    
    [Field(Title = "Another Custom Field")]
    public TextField MyCustomField2 { get; set; }
}

public class IncludedFieldTypes
{
    //================
    // MEDIA TYPES
    // (uses media library items with an type-aware selector)
    
    [Field]
    public AudioField MyAudio { get; set; }
    
    // can be implicitly converted to a string which is the public URL of the item
    [Field]
    public DocumentField MyDocumentValue { get; set; }
    
    [Field]
    public ImageField MyImageValue { get; set; }
    // <img src="@Url.Content(Model.MyRegion.MyImageValue)">
    
    // works exactly like the Document Field except media library
    // is unfiltered and shows all available assets
    [Field]
    public MediaField MyMediaValue { get; set; }
    
    [Field]
    public VideoField MyVideoValue { get; set; }
    
    
    //================
    // PAGE FIELDS
    
    [Field]
    public PageField MyPageValue { get; set; }
    // var startpage = await api.Pages.GetStartpageAsync();
    // var page = await MyPage.CreateAsync(api);
    // page.MyRegion.MyPageValue = startpage;
    
    [Field]
    public PostField MyPost { get; set; }
    
    
    
    //================
    // OTHER TYPES
    
    [Field(Placeholder = "Check Me Out!")]
    public CheckBoxField MyBoolValue { get; set; }
    
    [Field]
    [ColorFieldSettings(
        DefaultValue = "#fff",
        DisallowInput = true // disallows keyboard input, must use picker
        )]
    public ColorField MyColor { get; set; }
    
    // a drop selector for another type of content
    // PageItem is a custom type
    [Field] 
    public DataSelectField<PageItem> DataSelect { get; set; }
    
    [Field(Placeholder = "Give me a date!")]
    public DateField MyDateValue { get; set; }
    
    // The default editor shipped with the manager is provided by TinyMCE.
    [Field]
    public HtmlField MyHtmlValue { get; set; }
    // @Html.Raw(Model.MyHtmlValue)
    
    [Region]
    public MarkdownField MyMarkdownValue { get; set; }
    // page.MyRegion.MyMarkdownValue = "#This is a header\n\nThis is a paragraph."
    // var html = page.MyMarkdownValue.ToHtml();
    // @Html.Raw(Model.MyMarkdownValue)
    
    // int value is nullable and optional to the content editor
    [Field]
    public NumberField MyNumberValue { get; set; }
    
    // selector from enum
    [Region]
    public SelectField<PageStyle> Style { get; set; }
    
    [Field(Placeholder = "Just enter a string!")]
    [StringFieldSettings(
        DefaultValue = "Hello world",  // default value for newly create objects
        MaxLength = 32
        
        )]
    public StringField MyStringValue { get; set; }
    
    // multi-line text
    [Field]
    [TextFieldSettings(
        DefaultValue = "Hello world",  // default value for newly create objects
        MaxLength = 32
        
    )]
    public TextField MyTextValue { get; set; }
    
}

public enum PageStyle
{
    [Display(Description = "Standard width")]
    Standard,
    [Display(Description = "Narrow width")]
    Narrow,
    [Display(Description = "Extra wide")]
    Wide
}