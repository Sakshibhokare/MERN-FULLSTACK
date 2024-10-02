//npm i mongoose
//we will create schemas for our application
// todo{
//     title:string,
//     description:string,
//     completed:boolean 
// }

const mongoose = require("mongoose");
//create mongodb server and put the url here
mongoose.connect("give it a url") //not a right practice to do in real
const todoSchema=mongoose.Schema({
        title:string,
        description:string,
        completed:boolean 
})

const todo = mongoose.model('todos', todoSchema)