//HTTP
//Nodejs and its runtime 
//Backend communication protocols
//Express basic to advance
//routes, status codes


// what is ECMAScript, Javascript, nodejs, Bun 
// 1. ECMAScript: is the specification on which the javascript is based 
// 2. Javascript: Javascript is a scripting language 
// 3. Nodejs: Backend framework 
// 4.Bun: bun is much faster than nodejs, it is written in zig 


// What to do with nodejs 
// create clis (command line interface )
// create a video player 
// create a game 
// create an HTTP Server


// What is an HTTP Server : this is a sort of protocol to communicate
// URL 
// protocol//url/route 

// we have response body- 2+2 is equal to 4 

// status code - 200, 404 

// we have methods: post, get 

// VVIMP ********************** Interview Question *******************

// Q1: Things that happen in your browser after you fire this request (we will get to how to fire request to a backend server later)\
// 1. browser parse the URL 
// 2. Does a DNS Lookup (convert google.com to an IP) 
// 3. Establishes a connection to the IP (does handshake...) 

// what is DNS resolution (Domain names resolution)
// URLs are just like contacts in your phone in the end they map to an IP  
// If you ever buy a URL of your own, you will need to point it to the IP of your server 
// Buy a domain name and map the domain name to IP 

// we have an IP address for every domain name 

// Things that happens on your server after the request is received 
// 1. you get the inputs (route, body, headers)
// 2. You do some logic on the input, calculate the output 
// 3. you return the output Body, headers and status code 

// Common Methods 
// Get 
// Put : Updating 
// Post: Adding  
// Delete 

// what are the common status codes the backend responds with ? 
// 200- Everything is ok 
// 404- page/route not found 
// 403- Authentication issues 
// 500- Internal Server error: if your backend is not able to give a response 

//#################################################
// How do I create a HTTP server of my Own ? ******************************************
// How to I expose it over the internet like chatgpt.com ******************************
// HTTPS- is more secure 
// What is runtime? 
// ans. some code taken and converted into 0s and 1s 
// BUN does the same- zig code 

// how to intercept requests, authorized cookies 

// what is http APIs parsing, how it works 

// create an HTTP server from scratch in c/c++. 

// #####################################################
// create simple http server 

const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send('Hello Duniya')
})

app.listen(port, ()=>{
    console.log(`App is running on the port ${3000}`)
})
