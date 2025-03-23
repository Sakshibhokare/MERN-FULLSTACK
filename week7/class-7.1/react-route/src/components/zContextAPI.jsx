// Context APIS
// it helps in the problem of prop drilling 
import { useContext, useState } from "react"
import { CountContext } from "../context";

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <CountContext.Provider value={{ count, setCount }}>
                <Count ></Count>
            </CountContext.Provider>
            {/* <Count count={count} setCount={setCount}></Count> */}
            {/* <Buttons count={count} setCount={setCount}></Buttons> */}
        </>
    )
}


function Count({ count, setCount }) {
    return <>
        <CountRerender></CountRerender>
        <Buttons count={count} setCount={setCount}></Buttons>
    </>
}

function CountRerender() {
    const count = useContext(CountContext); //react gives us a hook useContext, using it we can access the value, without passing as a prop
    return <>
        {count}
    </>
}
function Buttons() {
    const { count, setCount } = useContext(CountContext);
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