// My cheque book == my Json web token 
// for example: we sign in to chatgpt and jwt token will be sent to the browser 
// that jwt token can be get verified only with the JWt password 

// JWT - generating JWT 
const jwt = require("jsonwebtoken"); 

const value = {
    name:"sakshi",
    accountNo:2788387897
}

//jwt
//sign function is used to create a token 
const token = jwt.sign(value, "secret");
// this token has been generated using this secret and hence this token can only be verified using this secret 



//     - decoding JWT: I can see and can recreate the value 
//     - Verifying JWT 
const verifiedValue = jwt.verify(token, "secret");
console.log(verifiedValue); // it will verify and return the decoded value


//try catch *************************************
function getLength(name){
    return name.length;
}

const ans = getLength(); // If i do not send anything here it will give an undefined length, it will trough an error 
console.log(ans)

// something can through an error 
// even if the error is occuring this will help to run the further code 
try{
    let a;
    console.log(a.length)
}catch(e){
    console.log("inside the catch statement") //if there is any error then only the control will reach here 
}

console.log("heeyyy there") // this will get printed even the error is occurred 


// Assignment ###############################################
// week-3 Readme file tasks 

// 1st Write a function that takes in a username and password
//  and returns a JWT token with the username encoded. Should return null if 
// the username is not a valid email or if the password is less than 6 characters. 
// Try using the zod library here
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema= zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success){
        return null; 
    }

    const signature = jwt.sign({
        username
    }, jwtPassword);

    return signature;
}

const answer = signJwt("sjgjadjjch", "dgjgdjagdjg") //it will return null because of incorrect email, with correct email and password it will return the signature 
console.log(answer);


// 2nd Problem statement 
// Write a function that takes a jwt as input and returns true if the jwt 
// can be DECODED (not verified). Return false otherwise
function decoded(token){
    const decoded = jwt.decode(token); //verify will return value and decode will tell you that if you can decode it or not 
    if(decoded){
        return true;
    }
    else{
        return false; 
    }
}

console.log(decoded("jbvjsbjhjf")) //must give false 


//3rd assignment 
function verified(token){
    let ans = true;
    try{
        jwt.verify(token, jwtPassword);
        return true; 
    }
    catch(e){
ans=false ; 
    }
    
        return ans; 
}

const ansjwt= verified("kcjhhcjkjkhnkn")
console.log(ansjwt); // it will return false 
