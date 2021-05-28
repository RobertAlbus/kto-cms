FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /

COPY *.sln ./
COPY */*.csproj ./
RUN find *.csproj | sed -e 's/.csproj//g' | xargs mkdir
RUN find *.csproj | sed -r -e 's/((.+).csproj)/.\/\1 .\/\2/g' | xargs -I % sh -c 'mv %'
RUN dotnet restore *.sln
COPY . .
RUN dotnet publish -o bin

FROM mcr.microsoft.com/dotnet/aspnet:3.1
WORKDIR /
COPY --from=build /bin .
ENTRYPOINT ["dotnet", "Kernel.dll"]





