// Async functions vs sync function 
// sychrounous: one thing happens at one time, sequential only one thing is happening ata time 

// Asynchronous function: Happens in parts Multiple things are context switching with each other 

// we can do context switching using js

// sychronous function 
function findsum(n){
    let ans=0;
    for (let i=0; i<n; i++){
        ans+=i;
    }
    return ans;
}

console.log(findsum(1000));

// Asynchronous function 
function findSum(n){
    let ans=0;
    for (let i=0; i<n; i++){
        ans+=i;
    }
    return ans;
}

function findSumTill100(){
   console.log( findSum(100));
}

setTimeout(findSumTill100, 2000) //it does not waited for 1 sec, it will go ahead and complete the next tasks 
console.log("Hello World");


// we can actually stop the execution 
function syncSleep(){
    let a =1;
    for(let i=0; i<1000000000; i++){
        a++;
    }
    return a;
}

console.log(syncSleep());
console.log("hello all, how are you ")

//Async functions examples;
//fs.readFile - to read a file your filesystem 
//fetch - to fetch some data from an API endpoint

//reading a file
// fs: file system 
const fs=require("fs");
fs.readFile("1.5.txt", "utf-8", function(err, data){
console.log(data);
})

//while the js compiler is reading the file, it will print the below text 
console.log("file reading is complete");

// callback understanding 
// latentflip loupe will help to understand 
// code to run 
console.log("hi there");

setTimeout(function(){
    console.log("from inside async fn")
}, 20000);

let a=100; for(let i=0; i<10; i++){
    a=a+1;
}

console.log(a);

// How it works: it will start ans pass things to the callstack, call stack will execute the things 
// the async function will be handover to the web apis to work parallelly on it 
// once the execution is complete for async function, it will passed to callback queue 
// it will wait in callback queue, until the call stack becomes empty, once the call stack is empty, it will take things from callback queue and print it out 
// event loop will take care to take the input from callback queue, the latest input will be taken to call stack 
//small tasks will be done first in web api, it will arrange according to that in the callback queue
// the event loop will pass the first stack to the call stack 
