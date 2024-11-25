// Why Languages-------------------------------------------
// we have RAM and SSD 
// everything that is not currently running stays in SSD
// everything that is running now will be in a RAM 

// when you click on whatsapp it gets running, and pass numbers to the Ram, now it running in a RAM 
// compiler will convert the code into the numbers and pass it to the RAM 


// Interpreted vs compiled languages ------------------------

// Compiled languages: c++, java, rust, golang 
// step1. write some code in Cpp 
// step2. compile the code create a new file 
// step3. run the compiled code 


// Interpreted language: javascript, python 
// step1: write code 
// step2: run the code, it runs the code line by line 

console.log("RESTART 2nd")

// Single threaded nature of js ----------------------------------------------
// This means that it can only execute one task at a time.

var a= 2;
a=20
console.log(a)

// const means we cant change the values of something 

// var, let and const 

let firstname = " sakshi "
let age = 18
let isMarried = false;

console.log("this persons name is"+firstname+"and their age is"+ age)

if(isMarried){
    console.log(firstname+" is married")
}
else{
    console.log(firstname+ " is not married")
}


// Loops-----------------------------------------------------------
let answer =0;
answer = answer+1+2+3+4+5+6;
console.log(answer)

for(let i=0; i<=100; i++){
    answer=answer+i
}
console.log(answer)


// complex primitives ---------------------------------------------------
// write program to print even number  array 

// Arrays 
const ages = [21, 22, 45 , 67, 55]

for(let i=0; i<ages.length; i++){
    if(ages[i]%2 ==0){
        console.log(ages[i])
    }
}


const personArray = ["A", "B", "C"];
const genderArray = ["male", "male", "female"]
for(let i=0; i<personArray.length; i++){
    if(genderArray[i] == "male"){
        console.log(personArray[i]);
    }
}


// Objects 
const user1={
    firstname:"sakshi",
    gender: "male"
}

console.log(user1["gender"])


// array of objects 
const allUser =[{
    firstname:"a",
    gender:"male"
},
{
    firstname:"b",
    gender:"male",
    metadata:{
        age:21,
        address:"main road"
    }
},
{
    firstname:"c",
    gender:"female"
}
]

for(let i=0; i<allUser.length; i++){
    if(allUser[i]["gender"] == "male"){
        console.log(allUser[i]["firstname"])
    }
}

console.log(allUser[1]["metadata"]["address"])

// Functions-------------
function sum(a,b){
    //do things with input and return the output 
    return a+b;
}

const value = sum(10,2)
console.log(value)


// Callback functions : we send function as an argument 
function findsum(a, b, fnToCall){
        let result= a+b;
        fnToCall(result)
}

function displayResult(data){
    console.log("Result of the sum is :"+data);
}

function displayResultPassive(data){
    console.log("Sum's result is :"+ data);
}

//you are only allowed to call one function after this
//how will you displayResult of a sum
//callbacks
const ans=findsum(5,70, displayResult);
return ans;



// event loops 
// callbackqueue
// Sychronous and asynchronous functions 

// Assignment: 
// 1. create a counter in javascript (counts down from 30 to 0)
// 2. calculate the time it takes between a setTimeout call and the inner function actually running
// 3. create a terminal Clock (HH.MM.SS)
