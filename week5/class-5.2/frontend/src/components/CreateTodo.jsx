export function CreateTodo(){
    return <div>
        <input style={{padding:10, margin:20}} type="text" placeholder="Title" /> <br /> <br />
        <input style={{padding:10, margin:20}} type="text" placeholder="description" /> <br /> <br />

        <button style={{padding:10, margin:30}}>Add a Todo</button>
    </div>
}