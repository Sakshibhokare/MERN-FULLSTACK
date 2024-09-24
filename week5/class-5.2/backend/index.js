const express = require("express");
const app=express();

app.use(express.json());

//create zod to validate hence cretaed type.js
app.post("/todo", function(req, res){

})

app.get("/todos", function(req, res){

})

app.put("/completed", function(req, res){

})
