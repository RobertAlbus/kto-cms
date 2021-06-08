using Piranha.AttributeBuilder;
using Piranha.Models;

namespace Kernel.Models
{
    [PageType(Title = "Standard archive", IsArchive = true)]
    [PageTypeArchiveItem(typeof(StandardPost))]
    // can add any post type to this archive by default. this decorator limits
    // the allowable post types. can use zero, one, or more opf this decorator.
    public class StandardArchive : Page<StandardArchive>
    {
        public PostArchive<StandardPost> TypedPosts { get; set; } // only posts of type StandardPost (or whatever custom post type)
        public PostArchive<PostBase> AllPosts { get; set; } // everything that inherits from PostBase
        public PostArchive<PostInfo> MetadataOnly { get; set; } // does nto include blocks or regions. is cached as well.
    }
}