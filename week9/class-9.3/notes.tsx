// 1. enum example 
enum directions {
    Up,
    Down,
    left,
    right
}

// we can use the value like directions.Up
// this helps in preventing the code changes at multiple places
// and improves the code readability

// 2. Generics
// lets say you have a function that needs to return the first element of an array
// Array can be of type either string or integer 

type Input = number | string
function firstEl(arr: Input[]) {
    return arr[0];
}

//if i want to convert the string into uppercase
const value = firstEl(["hello"]);
// value.toUpperCase() // is not possible here because the value can be string or number

// if you want that the array should only contain
// string or numbers then we can use generics
// generics enable u to create component that work with any type while still providing compile time type safety 
// example for generics 
{/* <T> represents that the type can be anything  */ }
function identity<T>(arg: T) {
    return arg;
}

let output1 = identity<string>("my string");
let output2 = identity<number>(100);

// 2nd exm
function getFirstEle<T>(arr: T[]) {
    return arr[0];
}
//if we mention the type then we can not give mixed array
const el1 = getFirstEle<string>(["my", "name"]);
const el2 = getFirstEle([1, 8, 5,]);
const el3 = getFirstEle([true, false]);



// 3 topic: imports and exports 
// if we exports like 
export const a = 1;
export const b = 2;
// then we have to import like 
// import {a, b} from "./a"

// if we export like 
const s = 1;
export default s; //no need to decode {}
// then import
// import s from "./s"