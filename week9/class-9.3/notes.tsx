// enum example 
enum directions {
    Up,
    Down,
    left,
    right
}

// we can use the value like directions.Up
// this helps in preventing the code changes at multiple places
// and improves the code readability

// Generics
// lets say you have a function that needs to return the first element of an array
// Array can be of type either string or integer 

type Input = number | string
function firstEl(arr: Input[]) {
    return arr[0];
}