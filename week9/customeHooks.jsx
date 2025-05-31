const { useState, useEffect } = require("react");

// custom hooks name starts with use 
function useTodos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todos")
            .then(res => {
                setTodos(res.data.todos)
            })
    })
}