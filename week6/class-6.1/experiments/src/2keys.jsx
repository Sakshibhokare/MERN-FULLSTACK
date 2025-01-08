/* eslint-disable no-unused-vars */
//React returns, React re-rendering, key, wrapper components, useEffect, useMemo, useCallback, useRef
import React, { useState } from 'react'
import './App.css'

// *************refer all file to understand concepts properly ************

// keys in react 
// 1. create a todo component that accepts title, description as input 
// 2. initialise a state array that has 3 todos 
// 3. iterate over the array to render all the TODOs 
// 4. A button in the top level app component to add a new TODO 
//should not become 4 every time we render the APP()
let counter = 4;
function App() {

    //  2nd
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "hello first title",
            description: "first description"
        },
        {
            id: 1,
            title: "hello second title",
            description: "second description"
        },
        {
            id: 1,
            title: "hello third title",
            description: "third description"
        },
    ])

    function addTodo() {
        //...todos means take existing and then add further
        setTodos([...todos, {
            id: 4,
            title: Math.random(),
            description: Math.random()
        }])



        //another way of doing the same thing
        const newTodos = []  //create an empty array

        //add previous elements to the new add 
        for (let i = 0; i < todos.length; i++) {
            newTodos.push(todos[i]);
        }

        //add new todo
        newTodos.push({
            id: counter++,
            title: Math.random(),
            description: "using second method"
        })

        setTodos(newTodos);

    }



    return (
        <>

            <button onClick={addTodo}>Add a Todo</button>

            {todos.map(function (todo) {
                // if we does not add key then react will get confused easily so it is very impotant to add a key which i can uniquely identify the element when we delete or add something 
                //it can increase the rerendering attempt 
                return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
            })}
        </>
    )
}

// 1st 
function Todo({ title, description }) {
    return <div>
        <h1>
            {title}
        </h1>

        <h5>
            {description}
        </h5>
    </div>
}



export default App
