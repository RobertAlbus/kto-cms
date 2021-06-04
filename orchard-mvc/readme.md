sudo nsenter -t $(docker inspect -f '{{.State.Pid}}' dec0d) -n ss


https://www.orchardcore.io/blog/orchard-core-and-docker
https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/docker/?view=aspnetcore-5.0


