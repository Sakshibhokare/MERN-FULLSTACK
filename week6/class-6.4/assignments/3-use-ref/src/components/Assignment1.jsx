import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. 
// When the component mounts or the button is clicked, 
// automatically focus the text input field using 
// useRef.

// useRef is use to get the reference of dom elements 
export function Assignment1() {
    const inputRef = useRef();
    //this function will keep this default focused 
    useEffect(() => {
        inputRef.current.focus()
    }, []);

    //this will add a focus when click on the button 
    const handleButtonClick = () => {
        inputRef.current.focus()
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
