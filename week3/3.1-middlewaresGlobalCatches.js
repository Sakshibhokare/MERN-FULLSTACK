// Middlewares, Authentications, global catches, zod 

// Middleware:

// not the ideal way to test things 
const express = require("express");
const app = express();

app.get("/health-checkup", function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username === "harkirat" && password === "pass"){
        if(kidneyId ===1 || kidneyId ==2){
            res.json({
                msg:"your kidney is fine!"
            })
        }

    }
    res.status(400).json({
        "msg":"something went wrong"
    })
})


//if we want authentication on different routes 
// middlewares are the functions which having parameters as req, res, and next 
// next is a basically a function 

app.use(middlewareFunction) // this means every route will return this function 

app.use(express.json()) //it a middleware 



// Input validations ************
// we verify the input here 
// if the inputs are not varlid then the server might crashed 
app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;

    // we can add multiple validations 
    if(!kidneys){
        res.json({
            msg:"wrong inputs"
        })
    }else{
        const kidneyLength = kidneys.length;

        res.send("you have " + kidneyLength + "kidneys");
    }

}) ;

// Global catches
// we define in the end , if err found it will show this msg to the end user  
// this is a another type of middleware 
app.use(function(err, req, res, next){
    errCount++; //this count will help a user 
    res.json({
        msg:"sorry something is up with our server"
    })
})


//ZOD *************************

// how can you do better input validation 
// this is a library for input validation 

// npm install zod 
// add to the top 
const zod = require("zod");
const schema = zod.array(zod.number()) //this will make sure the input must an array of numbers;

//for the string which look like an email
    // email:string=>email 
// password: atleast 8 letters 
// country: "IN", "US" 




app.post("/", function(req, res){
    const kidney = req.body.kidneys;
    const response = schema.safeParse(kidney) //our input is passed to the schema parse safely and returned in response 

    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }
    else{
        res.send({
            response
        })
    }

})


// //you can add multiple things in this object 
// const schema2 = zod.object({
//  email:zod.string(),
//  password:zod.string(),
//  country:zod.literal("IN").or(zod.literal("US"))
// })


// one more example 
function validateInput (arr){
    const schema = zod.array(zod.number());
    const response= schema.validate(arr);
    
    console.log(response);
}

validateInput([1, 2,3 ,4 ])
