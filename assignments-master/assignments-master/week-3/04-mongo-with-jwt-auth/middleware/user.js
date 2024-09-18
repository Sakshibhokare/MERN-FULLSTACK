//using jwt, it saves the db calls to always check the username and password in to the database token will keep remember the user 

const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config");


function userMiddleware(req, res, next) {

    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;
    const words= token.split(" ");
    //it will be like words=["bearer", "token"]
    const jwtToken =words[1];
    //need to define top level file to verify the token, it will be in the index.js

    const decodedValue=jwt.verify(jwtToken, JWT_SECRET);
    if(decodedValue.username){
        next();
    }
    else{
        res.status(403).json({
            msg:"You are not authenticated"
        })
    }


}

module.exports = userMiddleware;