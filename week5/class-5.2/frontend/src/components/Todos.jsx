/* eslint-disable react/prop-types */
// todos will be an array 
// todos =[{
//     title: hfjefjsgh,
//     description:fkhkh
// }]

export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            // eslint-disable-next-line react/jsx-key
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
            </div>
        })}

        
        
    </div>
}