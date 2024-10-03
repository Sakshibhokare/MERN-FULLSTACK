const express = require("express");
const { createTodo, updateTodo } = require("./types");
const {todo}= require("./db")
const app=express();
const cors= require("cors"); //this will allow the backend to get rendered on any frontend 

app.use(express.json());
app.use(cors());

//create zod to validate hence cretaed type.js
app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg:"Todo created"
    })

})

app.get("/todos", async function(req, res){
    const todos=await todo.find({}); //give me everything 
    const gymTodo = await todo.find({
        title:"Go to Gym"
    })//will return the todo with title, condition

    res.json({
        todos
    })

})

app.put("/completed", async function(req, res){
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);

    if(!parsedPayload.success){
        res.json(411).json({
            msg:"You sent the wrong inputs"
        })
        return; 
    }

    await todo.update({
        _id:req.body.id 
    }, {
        completed:true
    })

    res.json({
        msg:"Todo marked as completed"
    })

})

app.listen(3000);