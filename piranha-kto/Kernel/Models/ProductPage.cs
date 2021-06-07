using Piranha.AttributeBuilder;
using Piranha.Models;


[PageType(Title = "Product Page")]
[ContentTypeEditor(Title = "Products", Component = "product-editor", Icon = "fas fa-fish")]
// custom editor
// https://piranhacms.org/docs/master/content/pages
//
// Custom editors are implemented as global Vue components and are
// responsible for handling their own data, both loading and saving.
public class ProductPage : Page<ProductPage>
{
}