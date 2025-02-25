/* eslint-disable react/prop-types */
// todos will be an array 
// todos =[{
//     title: hfjefjsgh,
//     description:fkhkh
// }]


//this file is created to show all the todos present in the backend, also which todos are getting added to the backend 
export function Todos({ todos }) { //object destructuring 
    return <div>
        {/* {} used before todos because it an array  */}
        {todos.map(function (todo) {
            // eslint-disable-next-line react/jsx-key
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
            </div>
        })}
    </div>
}