// callbacks 
// Async Functions 
// Promises 
// Js functions (map, filter) 
// Assignments 

// Async Functions 
function onDone(){
    console.log("Hey there");
}

setTimeout(onDone, 2000);

console.log("I am the first")

// 2nd example
//readFile is a async function 
// reading a file 


function promisified(duration){
    const p= new Promise(function(resolve){
        setTimeout(function(){
            resolve("inside a Promise")
        },duration)
    })
    return p;
}

let ans=promisified(3000);

ans.then(function(){
console.log(ans)
})