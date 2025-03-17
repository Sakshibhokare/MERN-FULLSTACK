import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. 
// Pass these functions to a child component which has buttons to 
// perform the increment and decrement actions. Use useCallback to 
// ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    //if we add count as dependency then function will rerender because count is changing 

    const handleIncrement = useCallback(() => {
        setCount(count => count + 1);
    }, []) //if I add count here, the count is changing anyways so this will rerender all the time 


    //if we pass value in function to setValue then, this will only rerender the function which is used. 
    const handleDecrement = useCallback(() => {
        setCount(count => count - 1); //when we give value in function then, when we use decrement fun then only this will get rerender  
    }, [])


    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
}

// eslint-disable-next-line react/display-name
const CounterButtons = memo(
    // eslint-disable-next-line react/prop-types
    ({ onIncrement, onDecrement }) => (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    )
)
//memo and callbacks both should be used 
// memo will tell you that props are not changed 
// useCallback will handle rerendering when passing function in component 