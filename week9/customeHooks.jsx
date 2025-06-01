const { useState, useEffect } = require("react");

// custom hooks name starts with use 
function useTodos() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todos")
            .then(res => {
                setTodos(res.data.todos)
                setLoading(false);
            })
    }, [])
    return { todos, loading }
}



function App() {
    const { todos, loading } = useTodos();
    if (loading) {
        return <>loading...</>
    }
    return (
        <>
            {todos.map(todo => <Track todo></Track>)}
        </>
    )
}