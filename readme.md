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
