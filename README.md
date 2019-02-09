# Frontend Development Environment

## Environments and Versions
```bash
$ sw_vers
ProductName: Mac OS X
ProductVersion: 10.14.2
BuildVersion: 18C54

$ circleci version
0.1.5245+5896baa

$ docker --version
Docker version 18.09.0, build 4d60db4

$ docker-compose --version
docker-compose version 1.23.2, build 1110ad01

$ node --version
v11.8.0

$ npm --version
6.5.0

$ yarn --version
1.13.0
```

## Docker / Docker Compose
```bash
# On local machine
$ cd ./docker

# Build and start containers
$ docker-compose up -d [--build]

# Stop containers
$ docker-compose stop

# Remove containers
$ docker-compose rm [-f]

# Stop and remove containers
$ docker-compose down

# List containers
$ docker-compose ps

# Execute an interactive shell on the container (webapp is container name)
$ docker container exec -it webapp sh
```

## Setup (Install npm dependencies)
```bash
# On Docker container
$ cd /tmp/repo
$ yarn install --frozen-lockfile
```

## npm-scripts
```bash
# On Docker container
$ cd /tmp/repo

# Inspect, test and build files for development environment
$ yarn build

# `yanr build` with watch option
$ yarn watch

# Build files for development environment
$ yarn build:dev

# `yanr build:dev` with watch option
$ yarn build:dev:w

# Build files for production environment
$ yarn build:prod

# Inspect (lint)
$ yarn lint

# Test
$ yarn test

# Remove `public` directory
$ yarn clean
```

## CI with CircleCI
```bash
# CI runs when pushing to `master` branch or `develop` branch
$ git push origin master
$ git push origin develop

# CI doesn't run when commit with a message containing "[ci skip]" or "[skip ci]"
$ git commit -am "Add comments [ci skip]"
$ git push origin master
```

## CircleCI's Screenshots
#### Workflow
<img width="1356" alt="circleci-workflow" src="https://user-images.githubusercontent.com/493046/52521424-6023aa00-2cba-11e9-9627-1ff8282e8d1b.png">

#### Setup
<img width="1357" alt="circleci-setup" src="https://user-images.githubusercontent.com/493046/52521496-4b93e180-2cbb-11e9-905d-76060dd18cfd.png">

#### Inspect
<img width="1355" alt="circleci-inspect" src="https://user-images.githubusercontent.com/493046/52521498-5189c280-2cbb-11e9-9d10-c64c654b23fe.png">

#### Test
<img width="1354" alt="circleci-test" src="https://user-images.githubusercontent.com/493046/52521501-58b0d080-2cbb-11e9-972d-485a4ff18ddb.png">

#### Build
<img width="1352" alt="circleci-build" src="https://user-images.githubusercontent.com/493046/52521503-5cdcee00-2cbb-11e9-84b7-569187d00b0e.png">

#### Deploy
<img width="1355" alt="circleci-deploy" src="https://user-images.githubusercontent.com/493046/52521504-5fd7de80-2cbb-11e9-8ad5-66543dd86381.png">
