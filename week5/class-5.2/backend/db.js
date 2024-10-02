//npm i mongoose
//we will create schemas for our application
// todo{
//     title:string,
//     description:string,
//     completed:boolean 
// }

const mongoose = require("mongoose");
//create mongodb server and put the url here
mongoose.connect("mongodb+srv://Sakshibhokare04:Sakshi111@cluster0.rjojvqj.mongodb.net/") //not a right practice to do in real
const todoSchema=mongoose.Schema({
        title: String,
        description: String,
        completed: Boolean 
})

const todo = mongoose.model('todos', todoSchema);
module.exports={
        todo
}