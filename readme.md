## guide

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/


## docker build 

```
docker build -t jalal/node-web-app .

```


## docker change tag

```
docker tag jalal/node-web-app  jalalhejazi/node-web-app:node
docker tag jalal/node-web-app:node  jalalhejazi/node-web-app:latest

```


## docker push repo 

```
docker push jalalhejazi/node-web-app:latest

```


## docker pull repo 

```

docker run -d -p 1234:8080 jalalhejazi/node-web-app:node

curl http://localhost:1234

```
 
 

## Azure Web App for containers CI


1. Enabled Continues Integration in Azure
    * https://container-web-app.azurewebsites.net/

2. Config web hook in hub.docker.com
    * https://hub.docker.com/r/jalalhejazi/node-web-app/~/settings/webhooks/



## npm run docker

```
npm run docker
npm run docker:deploy
```


