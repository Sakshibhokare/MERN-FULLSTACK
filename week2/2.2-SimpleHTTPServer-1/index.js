//create simple HTTP server 
//npm init -y
// will use express library 
//npm install express 
const express = require("express");
const port=3000;
const app = express(); //initializing instance of app

app.get('/', function(req, res){
    res.send('responding')
})

app.listen(port);

// ####################################################
// create a todo app that lets users store todos on the server 
// try to create a http server from scratch in c 
// create an http server in rust using actix-web 
// create an http server in golang using the gurrila framework 
// spring boot java 
// ####################################################


