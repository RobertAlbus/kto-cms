1. install vscode extension for csharp
1. add alternative nuget source to csproj
    ```
    <RestoreAdditionalProjectSources>
      https://nuget.cloudsmith.io/orchardcore/preview/v3/index.json
    </RestoreAdditionalProjectSources>'

    # this source is for bleeding edge orchard, which allows us to specify `net5.0` for the target framework 
    # https://www.meziantou.net/defining-nuget-sources-in-the-csproj.htm
    ```
1. cd to csproj directory
1. $ dotnet run

## gitter chat
https://gitter.im/OrchardCMS/OrchardCore

## docs/tutorials
https://docs.orchardcore.net/en/dev/docs/getting-started/starter-recipes/