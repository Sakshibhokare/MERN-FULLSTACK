//Async await syntax

const { resolve } = require("path");

// Normal Syntax 
function sp(){
    let p= new Promise(function(resolve){
        resolve("Hey there, inside the Promise")
    });
    return p;
}

function main(){
    sp().then(function(value){
        console.log(value);
    });
}

main();


//Async Await syntax 

function sp2(){
    let p= new Promise(function(resolve){
        setTimeout(function(){
            console.log("wait for me!")
        }, 2000)
        resolve("Hey there")
    });
    return p;
}

//await is only valid inside the async function: this will save callbacks and prevent using .then method 
async function main2(){
    const value= await sp2();
    console.log(value);
}

main2();

// Async and await practice 
function sp3(){
    let p= new Promise(function(resolve){
        setTimeout(function(){
            resolve("practice async and await")
        }, 5000)
    })

    return p;
}

async function main3(){
    let value= await sp3();
    console.log(value);
}

main3(); 
