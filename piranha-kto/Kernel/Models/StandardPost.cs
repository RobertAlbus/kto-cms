using Piranha.AttributeBuilder;
using Piranha.Models;

namespace piranha_kto.Models
{
    [PostType(Title = "Standard post")]
    public class StandardPost  : Post<StandardPost>
    {
    }
}