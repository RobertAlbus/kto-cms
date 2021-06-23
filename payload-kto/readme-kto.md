# Kontralto's CMS built with [Payload](https://github.com/payloadcms/payload)

## setup
build and run:
```
$ docker-compose build && docker-compose up -d
```
skip `-d` flag on `docker-compose up` to watch Payload's errors while debugging

create user for payload
* localhost:3000
* enter new account details (fake email is fine)


## repro
reproduce bug in re-parenting hook 
1. create 1 Site
1. create 1 Page

For all steps above, avoid filling out the `child` field as this will be hidden later and should only be updated programmatically. It is currently left visible for debugging.

## notes:
### malformed data
observe the malformed data in the database
```
$ docker exec -it payload-kto_db_1 /bin/bash
> $ mongo --username payload --password password
> > db.sites.find()

{
    "_id":"ObjectId(""60d3b796ad579d0018fe1b27"")",
    "title":"Kontralto Consulting Corp",
    "children":[
        {   // should have an ID but doesn't
            "relationTo":"pages"
        }
    ],
    "createdAt":"ISODate(""2021-06-23T22:37:10.681Z"")",
    "updatedAt":"ISODate(""2021-06-23T22:39:25.322Z"")",
    "__v":0
}

```














