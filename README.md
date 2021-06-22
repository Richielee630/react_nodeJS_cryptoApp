# react_nodeJS_cryptoApp
### you can find the code under **master** branch
## frontend installation guide (Windows):
* save the code to you local storage
* open '...\react_frontend' directory in CMD
* run `npm install` to install the node_modules
* after install complete, run `npm start` to start the frontend

## backend installation guide (Windows):
* save the code to you local storage
* make sure you have [node](https://nodejs.org/en/download/) enviroment installed in your computer
* open '...\node_backend' directory in CMD
* run `node app.js` to start the backend

## database intallation guide (Windows):
* install [mySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) enviroment
* run `net start mysql` in CMD to initial local mySQL server, your username and password should be all "root" by defult
* install Navicat Premium database GUI (you can use the installation package I provided in this git repo)
* open Navicat and create a new mySQL connection, use "root" for both username and password
* right click the mySQL connection you just create, create a new mySQL databass, name it "btb" and chose "utf8 -- UTF8 Unicode" for Character encoding
* now right click the btb database, and "run SQL file", you can find the SQL configuration file "btb.sql" in this repo
* after import the database, right click database and refresh it, then you can view them under the "list"

## Now, you should be seeing a functional Web Application in front of you.
