[![Build Status](https://dev.azure.com/superusers-kursus/K8/_apis/build/status/Jalalhejazi.container-webapp?branchName=master)](https://dev.azure.com/superusers-kursus/K8/_build/latest?definitionId=76&branchName=master)


## Automated-build between git-repo, docker-registry and Any Cloud 

<img   src="https://raw.githubusercontent.com/Jalalhejazi/container-webapp/master/public/ci-cd-workflow.png" alt="ci cd"/></img>


## 1. Development and Test (local machine)

```
## Public hosting on docker hub Registry 
docker container run -d -p 1234:8080 jalalhejazi/container-webapp

HTTP localhost:1234/
```


## 2. DevOps CI/CD 

```
npm run deploy

-> from localhost -> to Github (public) and Azure Registry (Private)
-> then, any docker Registry (auto build new docker image) 
-> then, deployment using webhooks
-> then, notification and Feedback 

```

## 3. Multi-Staging / Multi-Production 

- [Azure Kubernetes Service (AKS) if online](http://52.149.105.75:8080/)
