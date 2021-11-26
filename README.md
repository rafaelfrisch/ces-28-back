# Table of Contents

1. [About](#about)
2. [Setup](#setup)
3. [Commands](#commands)
4. [Postman](#postman)
5. [Organization](#organization)

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

# Postman

Link for Postman collection:
https://www.getpostman.com/collections/5275a4cf6ac67d3c4d22

# Commands

To create an admin via command line:
```
yarn run createAdmin --name="Name you wante to create" --email="Email you want to create" --password="Password you want to create"
```
Example of valid admin:
```
yarn run createAdmin --name="Nome do usuario" --email="xxx@gmail.com" --password="1a2b3c4D"
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

