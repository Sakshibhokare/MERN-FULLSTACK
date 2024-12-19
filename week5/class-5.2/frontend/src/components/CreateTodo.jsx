import { useState } from "react"

export function CreateTodo(){
    //props will be passed to parent -> child never to child to parent
    const [title, setTitle]=useState("");
    const [description, setDescription] = useState("");


    return <div>
        <input style={{ //FIRST one is for assigning attributes and second {} is for the object in which we are going to write styling 
            padding:10, 
            margin:20}} type="text" placeholder="Title" onChange={function(e){
                //will get the current value of specific dom element it is same is documnet.querySelector().value
                const value=e.target.value;
                setTitle(value);
            }}/> <br /> <br />


        <input style={{
            padding:10, 
            margin:20}} type="text" placeholder="description"
            onChange={function(e){
                const value = e.target.value; //event.target.value, every time when the event happen it will take the value 
                setDescription(value);
            }}/> <br /> <br />



        <button style={{
            padding:10, 
            margin:30}} onClick={()=>{
                //axios can help you to stringify the json else you have to write it manually
                fetch("https://localhost:3000/todos",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description: description
                    }),
                    headers:{
                        "content-type":"application/json"  //app will always check the header need to understand the type of data, only mention type of data will be passed else it will be ignored
                    }
                })
            }}>Add a Todo</button>
            
    </div>
}