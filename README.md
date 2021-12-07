# Table of Contents

1. [About](#about)
2. [Setup](#setup)
3. [Tests](#tests)
4. [Commands](#commands)
5. [Postman](#postman)
6. [Organization](#organization)

# About

This is an API used by a CES-28 project from ITA. 

# Setup

First, node should be downloaded. Then, after cloning, 
run on the terminal 
```
yarn
```
```
yarn startdev
```
Do not use ```npm install```!

Ask another admin to get the confidential variables on .env and create it

# Tests

The tests are written using [JEST](https://jestjs.io/pt-BR/) library

To run all tests
``` 
yarn test
```


# Postman

Link for Postman collection:

[Collection](https://www.getpostman.com/collections/8c2ad2b0656c47a0590a)

# Commands

## To create an admin via command line:

```
yarn run createAdmin --name="Name you wante to create" --email="Email you want to create" --password="Password you want to create"
```

Example of valid admin:

```
yarn run createAdmin --name="Nome do usuario" --email="xxx@gmail.com" --password="1a2b3c4D"
```

## To create a random number of orders:

```
yarn run createOrders --numOrders=number_of_orders --minDate="year/month/day" --maxDate="year/month/day"
```

Example of valid command:

```
yarn run createOrders --numOrders=10 --minDate="2019/08/20" --maxDate="2021/08/20"
```

# Organization

All code is written in the src folder <br>
The src/bin folder controls the local port used to develop <br>
The src/controllers have the functions that run on the routes <br>
The src/models have the moongose models <br>
The src/routes have the routes and it imports the functions on src/controllers <br>
The src/utils have some initial data to create on mongoose <br>
src/app has express config and imports the routes <br>
src/errorHandlers has some error handlers <br>
src/settings import the confidential strings from .env <br>

