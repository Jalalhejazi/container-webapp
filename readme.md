## Automated-build between gitHub, dockerHub and Azure


## CI/CD with "npm run deploy"

```
One command triggers github code update 
-> then, hub.docker.com (auto build new docker image) 
-> then, Azure deployment using webhooks
-> then, notification 

npm run deploy

```


## docker run container-webapp 

```
docker container run -d -p 1234:8080 jalalhejazi/container-webapp

HTTP localhost:1234/
```
