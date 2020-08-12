## Automated-build between git-repo, docker-registry and Any Cloud 

<img   src="https://raw.githubusercontent.com/Jalalhejazi/container-webapp/master/public/ci-cd-workflow.png" alt="ci cd"/></img>


## 1. Development and Test (local machine)

```
## Public hosting on docker hub Registry 
docker container run -d -p 1234:8080 jalalhejazi/container-webapp

HTTP localhost:1234/
```


## 2. DevOps CI/CD 

[![Build Status](https://dev.azure.com/superusers-kursus/devops/_apis/build/status/working-ok/container-webapp-on-github-to-dockerHub/container-webapp-on-github-to-dockerHub?branchName=master)](https://dev.azure.com/superusers-kursus/devops/_build/latest?definitionId=13&branchName=master)

```
npm run deploy

-> from localhost -> to Github (public) and Azure Registry (Private)
-> then, any docker Registry (auto build new docker image) 
-> then, deployment using webhooks
-> then, notification and Feedback 

```

## 3. Multi-Staging / Multi-Production 

- [https://container-webapp.azurewebsites.net](https://container-webapp.azurewebsites.net)
