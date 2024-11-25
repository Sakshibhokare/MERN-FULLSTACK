//Promises 
// Promises are used to create our own async functions 
// initializing a promise 
// Promise should be initialize with a function, the function should have the first argument resolve 
var p= new Promise(function(resolve){
    setTimeout(function(){
        resolve("sp");
    }, 10000)
});

console.log(p); // it will return that the promise state is pending, so this is not a code way to write it 

//Three layers: pending, resolved and rejected 
// until we do not call resolve or obDone function, it will return pending 

// pass the promise to the function 
function callback(){
 console.log(p);
}

p.then(callback) // it will wait till the promise is resolved and then return the output

//practice 
var p2=new Promise(function(resolve){
    setTimeout(function(){
        resolve("hello there")
    }, 2000);
    
})


p2.then(function(){
    console.log(p2)
})

// practice 2nd 

var p3 = new Promise(function(resolve){
    setTimeout(function(){
        resolve("practice")
    }, 4000)
})

p3.then(function(){
    console.log(p3)
})


