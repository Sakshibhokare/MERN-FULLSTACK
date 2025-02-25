import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  //I create a state so every time this will check if new response has arrived 
  const [todos, setTodos] = useState([]);

  // any frontend can not hit the backend hosted on localhost, to allow backend to hit from any frontend we need to add cors in our backend so any frontend can access 
  fetch("http://localhost:3000/todos")
    .then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    })

  return (
    <>
      <CreateTodo></CreateTodo>
      {/* will provide todos as an array  */}
      <Todos todos={todos}></Todos>
    </>
  )
}


export default App
