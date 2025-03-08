// Memoization: It means you remember something
// it means remembering some output for given input
// you do not recompute it your directly return the output 

import { useEffect, useState } from "react";

// example: brute force coming in my mind 

function App() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [counter, setCounter] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useState(1);

    let count = 0;
    for (let i = 1; i <= inputValue; i++) {
        count = count + i;
    }

    return (
        <>
            <input onChange={function (e) {
                setInputValue(e.target.value)
            }} placeholder='Find sum from 1 to n'>
                {/* {inputValue} + {counter} */}
            </input>
            <h1>
                Sum is of {inputValue} is {count}
            </h1>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>
                Counter({counter})
            </button>
        </>
    )

}

export default App

// in above example when we clicking on counter
// every time complete function is rerendering
// we can use useMemo to remember the last value


// great solution with memoization 

// eslint-disable-next-line no-unused-vars
function demo() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [counter, setCounter] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useState(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);

    //this is for computation, operations
    // approach 1 best
    // let count = useMemo(() => {
    //     let finalCount = 0;
    //     for (let i = 1; i <= inputValue; i++) {
    //         finalCount = finalCount + i;
    //     }
    //     return finalCount;
    // }, [inputValue]); //it will rerender only when the input value changes 

    //this is for life cycle event 
    // 2nd approach better because requires extra set variable coz it not returns anything 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        let finalCount = 0;
        for (let i = 1; i <= inputValue; i++) {
            finalCount = finalCount + i;
        }
        setCount[finalCount];
    }, [inputValue])

    return (
        <>
            <input onChange={function (e) {
                setInputValue(e.target.value)
            }} placeholder='Find sum from 1 to n'>
                {/* {inputValue} + {counter} */}
            </input>
            <h1>
                Sum is of {inputValue} is {count}
            </h1>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>
                Counter({counter})
            </button>
        </>
    )

}

// export default demo