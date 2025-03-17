import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times 
// it has been rendered. Use useRef to create a variable that persists 
// across renders without causing additional renders when it changes.

export function Assignment2() {
    const [count, setCount] = useState(0);
    const numberOfReRender = useRef(0); //initialize the variable 

    const handleReRender = () => {
        // Update state to force re-render
        setCount(count + 1);
    };
    numberOfReRender.current = numberOfReRender.current + 1;

    return (
        <div>
            <p>This component has rendered {numberOfReRender.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}

//without changing the state the function can not rerender 
//so we use on state variable as count
//if we take another state variable to count rerender then that function will rerender twice
// so we use usRef, so it will remember the last value also update the next value 
