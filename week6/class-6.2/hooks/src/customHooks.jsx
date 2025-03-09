import axios from "axios";
import { useEffect, useState } from "react";

//here we have created a custom hook which we can use anywhere 
function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("").then((res) => {
            setTodos(res.data.todos)
        })
    }, [])

    return todos
}

function App() {
    const todos = useTodos();

    return <div>
        {todos}
    </div>
}

export default App;