import { func } from "prop-types";
import { useState } from "react";

function App(){
    const [todos, setTodos] =useState([{
        title:"Go to Gym",
        description:"Go to gym from 7-9",
        completed:false
    },{
        title:"Study DSA",
        description:"Study DSA 9-11",
        completed:true
    }
])

function addTodo(){
    //...todos means keep the original as it is and add further value to the array
    setTodos([...todos, {
        title:"new todo",
        description:"it is a random todo"
    }])
}

//render one after the other 
return (
    <div>
        {/* {JSON.stringify(todos)}  */}


        {/*2nd create button on clicking on it it will display the values on  screen  */}
        <button onClick={addTodo}>Add a random todo</button>



        <Todo title="sakshi" description="learning react"></Todo>
        <Todo title={todos[0].title} description={todos[0].description}></Todo>
        <Todo title={todos[1].title} description={todos[1].description}></Todo>


        {/* iterate using loops: map requires arr and function */}
        {todos.map(function(todo){
            return <Todo title={todo.title} description={todo.description}></Todo>
        })}
    </div>
)

function Todo(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
        </div>
    )
}

}

//add todo into the Array 
function addTodo(){
    let newTodos=[];
    //first take original elements of an array
    for(let i=0; i<todos.length; i++){
        newTodos.push(todos[i])
    }
    //add random todos 
    newTodos.push({
        title:"jbcjbn",
        description:"nckndkjkn"
    })

    //every time when setTodos will get call react will get to know that value is updated and that value would be visible on the screen 
    setTodos(newTodos)
}