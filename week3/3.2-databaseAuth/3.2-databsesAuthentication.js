//fetch, databases and Authentications


//fetch is use to get data from backend / sending requesting and getting back the response 
// example 
// in your html file 
//  <body>
//     <script>
//         function getAnimal() {
//           const response= fetch("https://fakeapi.it/api/v1/persons")
//           .then(function(response){
//                  response.json().then(function(finaldata){
//                         clg(finaldata)
//                  })
//            })                                              //this will send get request by default, it return a promise need a syntax for promisify 
//         }


async function getAnimalData() {
    const response = await fetch("hettps://fakeapi.it/api/v1/person");
    const finalData = await response.json();
    console.log(finalData);
}
//     </script>

//     <button onclick="getAnimalData()">Get Animal Data</button>
//  </body>









// Authentications ******************************************************
// some imp concept before we start Authentication 
// Hashing: we hash passwords before we store in to the database 
// you can never convert a hash to the original string, but in case of encryption we can get the original string back
// encryption works with decryption 
// Encryption


// json web tokens: this is similar to encryption but works on json data only, it creates a token at the end 
// we can get the JWT from Headers-> authorization 
// that text we can put on jwt.io and can decode it to the original object 


// flow 
// 1.passing thr fun jwt.incode, give it a password which will be present in the backend 
// 2. the generated string and password with be given to the verification function 
// 3. in the last will get the original output
// verification is like anyone can decode but need the password to verify and get the original output 
// example: digital signature: only the back can verify it anyone can get




// local storage:
// A place in your browser where you can store some data usually things that are stored include 
// Authentication tokens
// user language preference 
// user theme preference 

// example: someone is logging it will create JWT and store this token into the browser and this token going to be there in the browser for almost forever until we delete it 



// Assignments ##########################
// post and get request for sign in and login 

// why do we use jwt instead encryption: this same assume as database call, this is most easiest





// Databases ***************************************************************
// types of dbs 
// Graph DBS 
// Vector Dbs 
// SQL DBS 
// NoSql dbs - easy to understand - let you create an db, tables 

// How does the backend connect to the db ?
// Express let u create an HTTP server 
// jsonwebtokens library lets you create jets 
// Mongoose lets you connect to your database 

// Assignment #########################
// database connectivity 

const mongoose = require("mongoose");

mongoose.connect("database URL");

//create table 
const user = mongoose.model("User", { name: String, email: String, password: String });


// const User = new user({
//     name:"sakshi",
//     email:"sakshi@gmail.com",
//     password:"sakshi@111"
// })

User.save(); //this will save the data for the user /

app.post("/signup", function (req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    //user already exists search in table user 
    const existUser = user.findOne({email:username});
    if(existUser){
        return res.status(400).send("Username already exists")
    }


    const User = new user({
        name: username,
        email: email,
        password:password
    })

    User.save()
    res.json({
        "msg":"User Created Successfully"
    })
})



