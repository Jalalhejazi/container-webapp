## Automated-build between git-repo, docker-registry and Any Cloud 

<img   src="https://raw.githubusercontent.com/Jalalhejazi/container-webapp/master/public/ci-cd-workflow.png" alt="ci cd"/></img>


## 1. Development and Test (local machine)

```
## Public hosting on docker hub Registry 
docker container run -d -p 1234:8080 jalalhejazi/container-webapp

HTTP localhost:1234/
```


## 2. DevOps Pipeline 

[![Build Status](https://dev.azure.com/superusers-kursus/container-webapp/_apis/build/status/Jalalhejazi.container-webapp?branchName=master)](https://dev.azure.com/superusers-kursus/container-webapp/_build/latest?definitionId=117&branchName=master)

```
npm run deploy

-> from localhost -> to Github (repo)
-> then, dockerHub  
-> then, Azure App Service for Container

```

## 3. Staging (Azure App Service)

- [https://container-webapp.azurewebsites.net](https://container-webapp.azurewebsites.net)
