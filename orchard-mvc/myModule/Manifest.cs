using OrchardCore.Modules.Manifest;

[assembly: Module(
    Name = "myModule",
    Author = "The Orchard Core Team",
    Website = "https://orchardcore.net",
    Version = "0.0.1",
    Description = "myModule",
    Dependencies = new[] { "OrchardCore.Contents" },
    Category = "Content Management"
)]
