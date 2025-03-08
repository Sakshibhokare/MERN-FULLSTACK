// Memoization: It means you remember something
// it means remembering some output for given input
// you do not recompute it your directly return the output 

import { useState } from "react";

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


// great solution with memoization 

