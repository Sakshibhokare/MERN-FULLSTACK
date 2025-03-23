import { useState } from "react"
// prop drilling: this is a process of passing props
// to the nearest ancestor component
//the goal is we have a count, 
// we can increase and decrease the count 
function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <Count count={count} setCount={setCount}></Count>
            {/* <Buttons count={count} setCount={setCount}></Buttons> */}
        </>
    )
}

//if I want to call Buttons here then I will need to have setCount prop
//even if the Count does not require setCount
//this is what the prop drilling
// our prop drill down through component tree 
// it makes the code unreadable 
function Count({ count, setCount }) {
    return <>
        {count}
        <Buttons count={count} setCount={setCount}></Buttons>
    </>
}

function Buttons(count, setCount) {
    return <>
        <button onClick={() => {
            setCount(count + 1);
        }}>
            Increase
        </button>

        <button onClick={() => {
            setCount(count - 1);
        }}>
            Decrease
        </button>
    </>
}

export default App