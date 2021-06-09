using System.Collections.Generic;
using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Extend.Fields;
using Piranha.Models;

[PageType(Title = "Hero Page", UsePrimaryImage = false)]
[ContentTypeRoute(Title = "Default", Route = "/heropage")]
//By adding the ContentTypeRouteAttribute to your page type, all requests for pages of this page type will now be routed to /heropage.

[ContentTypeRoute(Title = "Controller Rendered", Route = "/Alt1")]
//By adding a second route the page settings in the manager will now show a dropdown where the editor can select which route the current page should use.

//[BlockItemType(typeof(Piranha.Extend.Blocks.HtmlBlock))]
// limit the types of block content allowed on this page
public class HeroPage : Page<HeroPage>
{
    public class HeroRegion
    {
        [Field]
        public StringField Title { get; set; }
        [Field]
        public ImageField Image { get; set; }
        [Field]
        public TextField Body { get; set; }
    }
    
    public class MyRegion
    {
        [Field]
        public StringField Title { get; set; }

        [Field]
        public TextField Body { get; set; }
    }

    [Region(ListTitle = "Title")]
    public IList<MyRegion> Teasers { get; set; }

    [Region]
    public HeroRegion Hero { get; set; }
}