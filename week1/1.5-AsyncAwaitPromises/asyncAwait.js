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

//await is only valid inside the async function 
async function main2(){
    const value= await sp2();
    console.log(value);
}

main2();
