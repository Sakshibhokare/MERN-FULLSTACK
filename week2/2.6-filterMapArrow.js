//map, filter, arrow fns

function sum(a,b){
    return a+b;
}

// arrow fns 
const sum2 = (a,b)=>{
    return a+b;
}


// map: given an array, give me back a new array in which every value is multiplied by 2 
//[1,2,3,4,5]
//[2,4,6,8,10]

const input = [1,2,3,4,5];

//solution
const newArray = [];
function transform(i){
    return i*4;
}

// map requires input and a function to work on that input 
// map(arr, transform);
let ans = input.map(transform);
console.log(ans)


// **************************************************************
// create a map function that takes 2 inputs an array and a transformation cllbacks/fn and transforms the array into a new one using the transformation fn 
//create a map fn that takes an array nd a transform fn as input and  return the transformed array as output  



//filtering 
// given an input array give me back all the even values from it 

const arr = [1,2,3,4,4,5,6,7,8,9];
function filterLogic(n){
if(n%2==0){
    return true;
}
else{
    return false;
}
}

const ans2 = arr.filter(filterLogic);


// const ans2 = arr.filter(function filterLogic(n){
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
//     });


console.log(ans2)



