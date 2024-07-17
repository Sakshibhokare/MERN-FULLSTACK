//create simple HTTP server 
//npm init -y
// will use express library 
//npm install express 
const express = require("express");
const port=3000;
const app = express();

app.get('/', function(req, res){
    res.send('')
})