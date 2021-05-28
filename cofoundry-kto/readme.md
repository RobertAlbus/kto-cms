required tools:
* docker
* docker-compose
* mssql-tools (run as sqlcmd from host machine cli)


```
$ cd cofoundry-kto
$ docker-compose build
$ docker-compose up -d

# init sql server database (only once)
$ sqlcmd -U sa -P Your_password123 -H localhost -i initdb.sql 
```

go to localhost:5000

```
# tear down
$ docker compose down
```







```
sudo docker pull mcr.microsoft.com/mssql/server:2019-latest
```


```
sudo docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=<P@ssword1>" -p 1433:1433 --name sql1 -h sql1 -d mcr.microsoft.com/mssql/server:2019-latest
```


