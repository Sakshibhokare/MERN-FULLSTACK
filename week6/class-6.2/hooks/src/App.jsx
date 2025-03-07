import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css'

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs").then(function (res) {
//       setTodos(res.data.todos)
//     })
//   }, []); //this will only run once till any change happen to its state

//   return (
//     <>
//       {todos.map((todo) => {
//         <Todo title={todo.title} description={todo.description}></Todo>
//       })}
//     </>
//   )
// }

// function Todo(title, description) {
//   return <div>
//     <h1> {title} </h1>
//     {description}
//   </div>
// }




//fetch data according to the id, on click buttons 
function App() {
  const [selectedID, setSelectedID] = useState(1);

  return <div>
    <button onClick={
      () => setSelectedID(1)
    }>1</button>

    <button onClick={function () {
      setSelectedID(2)
    }}>2</button>
    <button onClick={function () {
      setSelectedID(3)
    }}>3</button>
    <button onClick={function () {
      setSelectedID(4)
    }}>4</button>
    <Todo id={selectedID}></Todo>
  </div>
}

function Todo({ id }) {
  const [todo, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs/todo?id=${id}`).then(function (res) {
      setTodos(res.data.todos)
    })
  }, [id]); //id is passed as a dependency when the id get changes this will get rerender
  //if not passing id, even if you change id, or click on button nothing will happen
  //important to add dependency 

  return (
    <>
      <h1>
        {todo.title}
      </h1>
      <h2>
        {todo.description}
      </h2>
    </>
  )
}



export default App