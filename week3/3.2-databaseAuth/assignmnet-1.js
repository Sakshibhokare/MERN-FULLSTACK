// 1. Post/ sign in Body-{
//     username:String
//     password:String 
// }

// return a json web token with username encrypted 

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword= "12345";


const app= express();
const ALL_USERS = [
    {
        username:"abcd",
        password:"345",
        name:"harkirat"
    },
    {
        username:"cat",
        password:"3940084",
        name:"catrina"
    },
    {
        username:"doggie",
        password:"79897",
        name:"sheru"
    }
];

function userExist(username, password){
    let userExist= false;

    for(let i=0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username===username && ALL_USERS.password===password){
            userExist=true;
        }
    }
    return userExist;
}


app.post("/signin", function(req, res){
    const username= req.body.username;
    const password = req.body.password;

    if(!userExist(username, password)){
        return res.status(403)({
            msg:"user does'nt exist"
        })
    }

    var token = jwt.sign({username:username}, jwtPassword);
    return res.json({
        token,
    });
});





// 2. GET/ users 
// Headers - 
// Authorization header 

// return an array of all users if user is signed in (token is correct) 
// returns 403 status code if not 

app.get("/users", function(req, res){
    const token = req.headers.authorization;

        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        //return the list of users other than this username 
        res.json({
            
            users:ALL_USERS.filter(function(value){
                if(value.username == username){
                    return false;
                }
                else{
                    return true;
                }
            })
        })
    }
)
