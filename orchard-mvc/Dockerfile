FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /

# copy the solution and all projects
COPY *.sln ./
COPY */*.csproj ./
# rebuild the same directory structure for projects as the source code
RUN find *.csproj | sed -e 's/.csproj//g' | xargs mkdir
# move csproj files into their correct folders
RUN find *.csproj | sed -r -e 's/((.+).csproj)/.\/\1 .\/\2/g' | xargs -I % sh -c 'mv %'
# restore dependencies for all projects
RUN dotnet restore *.sln
# copy all source
COPY . .
# build
RUN dotnet publish -o bin/orchard --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /
COPY --from=build /bin/orchard .
EXPOSE 5000
ENTRYPOINT ["dotnet", "Kernel.dll", "--urls", "http://0.0.0.0:5000"]





