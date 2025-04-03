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


// working code
// import { useContext, useState } from "react";
// import { CountContext } from "./context";

// function App() {
//   const [count, setCount] = useState(0); //instead of this we will create an atom
//   return (
//     <>
//       <CountContext.Provider value={{ count, setCount }}>
//         <Count />
//       </CountContext.Provider>
//     </>
//   );
// }

// function Count() {
//   return (
//     <>
//       <CountRerender />
//       <Buttons />
//     </>
//   );
// }

// function CountRerender() {
//   const { count } = useContext(CountContext); // Destructure count from context
//   return <>{count}</>;
// }

// function Buttons() {
//   const { count, setCount } = useContext(CountContext); // Destructure both count and setCount from context
//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </>
//   );
// }

// export default App;


// context file
// import { createContext } from "react";

// // Initialize context with a default value (which can be anything, usually null or an object with placeholders)
// export const CountContext = createContext({
//     count: 0, // default value for count
//     setCount: () => { }, // default function for setCount (no-op function)
// });
