// middleware functions have the access to the request object and response object /
// this function will take request and verify the request and it will send this further to get the response ex. ticket checker 

// express is the series of middlewares \

// request-response cycle: there will be multiple checks to verify the right request
// codifying the example of ticket checker 
const express = require("express");

const app = express();

// without any checks 
// app.get("/ticket", function(){
//     resizeBy.json({
//         msg:"you have successfully riden the ride 1"
//     })
// })


// function will returns a boolean if the age of the person is more than 14 
function isOldEnough(age){
    if(age>=14){
        return true;
    }
    else{
        return false; 
    }
}

app.get("/ride1", function(req, res){
    if(isOldEnough(req.query.age)){
        res.json({
            msg:"you have successfully riden the ride1"
        })
    }
    else{
        res.status(411).json({
            msg:"Sorry you are not of age yet"
        })
    }
})


app.get("/ride2", function(req, res){
    if(isOldEnough(req.query.age)){
        res.json({
            msg:"you have successfully riden the ride1"
        })
    }
    else{
        res.status(411).json({
            msg:"Sorry you are not of age yet"
        })
    }
})



// same things using middlewares 
// every middleware have req, res and next 3rd argument 
// middleware is the not the last function thats why it requires next, to call next function 
function isOldEnoughMiddleware(req, res, next){
    const age= req.query.age;
    if(age>15){
        next();
    }
    else{
        res.json({
            msg:"Sorry you are not of age yet"
        })
    }
}

//final things will be here only 
// sequence matters 
app.get("/ride2", isOldEnoughMiddleware, function(req, res){
    res.json({
        msg:"you have successfully riden ride 2"
    })
})

//if you want any middleware to use on all routes then use as follow
//this should mention on the top 
app.use(isOldEnoughMiddleware); // this will only work for the routes mentioned after this line 

