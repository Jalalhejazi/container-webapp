## Automated-build between git-Hub, docker-Hub and Azure (staging and production)

<img   src="https://raw.githubusercontent.com/Jalalhejazi/container-webapp/master/public/ci-cd-workflow.png" alt="ci cd"/></img>


## 1. Development and Test

```
docker container run -d -p 1234:8080 jalalhejazi/container-webapp

HTTP localhost:1234/
```


## 2. DevOps CI/CD 

```
npm run deploy

-> from localhost -> to Github (branching)
-> then, hub.docker.com (auto build new docker image) 
-> then, Azure deployment using webhooks
-> then, notification 

```

## 3. Staging / Production 

https://container-webapp.azurewebsites.net/
