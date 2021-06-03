FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /

# copy the solution and all projects
COPY *.sln ./
COPY */*.csproj ./
# rebuild the same directory structure for projects as the source code 
# (csproj and folder need to have the same case-sensitive name)
RUN find *.csproj | sed -e 's/.csproj//g' | xargs mkdir
# move csproj files into their correct folders
RUN find *.csproj | sed -r -e 's/((.+).csproj)/.\/\1 .\/\2/g' | xargs -I % sh -c 'mv %'
#restore dependencies for all projects
RUN dotnet restore *.sln
# copy all source
COPY . .
# build
RUN dotnet publish -o bin/cofoundry --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:3.1
WORKDIR /
COPY --from=build /bin/cofoundry .
ENTRYPOINT ["dotnet", "Kernel.dll"]





