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
