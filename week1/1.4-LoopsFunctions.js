//Loops Functions and callbacks
let ans=0;

for(let i=0; i<=500; i++){
    ans=ans+i;
}

console.log(ans)


//functions
// a set of statements that performs a task and calculate a value 
function findsum(n){
    let ans=0;
    for(let i=0; i<n; i++){
        ans=ans+i;
    }
    return ans;
}

console.log( findsum(50)); //instead of writing the logic again and again we can directly use functions 

//callbacks: function calling a function 
function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSquares(a,b){
    const val1 = square(a);
    const val2= square(b);
    return val1+val2;
}

function sumOfCubes(a,b){
    const val1=cube(a);
    const val2=cube(b);
    return val1+val2;
}

const answer = sumOfCubes(2,2);
console.log(answer);

//callbacks solves the repetitions

function sumOfSomething(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);
    return val1+val2;
}

console.log(sumOfSomething(3,3,square))

// Anonymous function 
let anss=sumOfSomethings(2, 2, function(n){
    return n*n;
})

console.log(anss)

