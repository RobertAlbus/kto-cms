db.createUser(
{
    user: "payload",
    pwd: "password",
    roles: [
              { role: "userAdminAnyDatabase", db: "*" },
              { role: "readWriteAnyDatabase", db: "*" },
              { role: "dbAdminAnyDatabase", db: "*" },
              { role: "clusterAdmin", db: "*" }
           ]
})