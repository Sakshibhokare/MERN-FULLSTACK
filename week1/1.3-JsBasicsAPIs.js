// practice all the component mentioned in assignment week 1 
//get length function

function getLength(str){
console.log(str.length)
}

getLength("myNameisSakshi");

// Index of "second" word 
function findIndex(str, target){
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
}

findIndex("hello everyone", "every")
findIndex("hello everyone every person", "every")

// index of the last word 
function findLastIndexof(str, target){
    console.log("original string:", str);
    console.log("index:", str.lastIndexOf(target))
}

findLastIndexof("hello all, hello friends, hello world", "hello")

// str.length 
// str.lastIndexOf 
// str.indexOf 

// ****************************************
// slice: slice of a string, give something between the start and end index

function getSlice(str, start, end){
    console.log("Original string: ", str);
    console.log("after slice: ", str.slice(start, end));
}
// starting from zero does not include the ending char 
getSlice("hello Duniya", 5, 10);
let content="My name is sakshi";
console.log(content.slice(3, 8))

//substr works same as slice it will start from 0 and give until the end index 
console.log(content.substr(3,8)) //it means start from 3rd index and take next 5 index 

//*************************************** */

//Replacement 
const str ="hello world"; //traget replacement 
console.log( str.replace("world", "javascript"));
console.log(str.replace("Mee", "hee"));

//extract all worlds in an array
const value="hi my name is sakshi";
const words=value.split(",");
console.log(words );
const word=value.split("i");
console.log(word );

//trim out the space from the begining and ending 
const spaces ="          hello     Duniya          ";
console.log(spaces.trim());

//to upper to lower 
console.log(spaces.toUpperCase());
console.log(spaces.toLocaleLowerCase())


//*********************************************** */
//numbers and integers 
//it will convert string to a number 
console.log(parseInt("44"));
console.log(parseInt("44spd"));
console.log(parseInt("3.144"));

console.log(parseFloat("I have got 40 marks in history"));

//*************************************************** */
// Arrays 
const initialArray = [1, 2, 3]
initialArray.push(4);
console.log(initialArray);
initialArray.pop(); //removes last element 
console.log(initialArray)
initialArray.shift() //removes from front of an array 
console.log(initialArray)
initialArray.unshift(4)//put something to the front of the array 

// concat the array: merge two arrays 
firstArray=[3, 4, 5, 6];
secondArray=[8, 9, 2];
console.log(firstArray.concat(secondArray)); // can be done using for loop

//******************************************************* */
//forEach: this will call function until array.length
//callback functions 
function logThings(str){
    let ans = str*str;
    console.log(ans)
}

firstArray.forEach(logThings)

// the below things will be cover later 
//callbacks
//map, filter, find, sort

//********************************************************* */
// Level2 
//class
const dog={
    name:"doggie",
    legCount:2,
    speaks:"bhow bhow"
};

const cat={
    name:"cat",
    legCount:2,
    speaks:"meow meow"
};

function printStr(animal){
    console.log("Animal "+ animal["name"] + " " + animal["speaks"])
}

printStr(dog);
printStr(cat);

console.log("Animal "+ dog["name"] + " " + dog["speaks"])

console.log("Animal "+ cat["name"] + " " + cat["speaks"])

//class for animal
class animal{
    constructor(name, legCount, speaks){
        this.name=name;
        this.legCount=legCount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("* Animal *")
    }
    speak(){
        console.log("hi there " + this.speaks)
    }
}
//object of a class 
let dogie = new animal("dog", 4, "bhow bhow")
let catt = new animal("cat", 4, "meow")

catt.speak();

console.log(animal.myType()) //if you want something directly for a class you should make it static 
// console.log(animal.speak())


//Date class in js **********************************************************************
const currentDate =  new Date();
console.log(currentDate.getDate());
console.log(currentDate.getMonth()+1);
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes())
console.log(currentDate.getTime()); //time in milliseconds since 1970

//JSON.parse
//JSON.stringify
const user={
    name:"harkirat",
    gender:"male"
}

user["name"]
const finalString = JSON.stringify(user)
console.log(finalString)

//Maths ***************************************
console.log(Math.random());
console.log(Math.floor(2.344));
console.log(Math.ceil(6.3549))



//Objects *******************************************
// look at objects and solve assignments 
