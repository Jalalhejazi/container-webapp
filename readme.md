## Automated-build between git-Hub, docker-Hub and Azure (staging and production)

<img   src="https://raw.githubusercontent.com/Jalalhejazi/container-webapp/master/public/ci-cd-workflow.png" alt="ci cd"/></img>


## 1. Development and Test

```
docker container run -d -p 1234:8080 jalalhejazi/container-webapp

HTTP localhost:1234/
```


## 2. DevOps CI/CD 

[What is CI/CD and DevOps means ?](https://opensource.com/article/18/8/what-cicd)

```
npm run deploy

-> from localhost -> to Github (branching)
-> then, hub.docker.com (auto build new docker image) 
-> then, Azure deployment using webhooks
-> then, notification 

```

## 3. Staging / Production 

- https://Myapp.Dev.azurewebsites.net/
- https://Myapp.Test.azurewebsites.net/
- https://Myapp.qa.azurewebsites.net/
- https://Myapp.prod1.azurewebsites.net/
- https://Myapp.prod2.azurewebsites.net/
- https://Myapp.europe-west.azurewebsites.net/
- https://Myapp.europe-north.azurewebsites.net/

