had to run 
```
CMD ["./dumb-init", "yarn", "dev"]`
```
with 
```
environment:
    CREATE_TABLES: "true"
```
for the first run to  init the database

