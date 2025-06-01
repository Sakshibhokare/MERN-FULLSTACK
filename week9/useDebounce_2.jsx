//Debounce hook
//this is related to search functionality
//if you typing very fast in search section debounce will make backend call wait
// till some seconds, so that user can write completely and then the whole will go for search request 

import { useEffect, useState } from "react";
function useDebounce(value, timeout) {
    const [debounceValue, setDebouncevalue] = useState(value);

    useEffect(() => {
        //keep starting new clocks 
        let timeoutNumber = setTimeout(() => {
            setDebouncevalue(value);
        }, timeout);
        //keep stopping old clocks
        return () => {
            clearInterval(timeoutNumber)
        }
    }, [value]);

    return debounceValue;
}

function App() {
    const [value, setValue] = useState(0);
    const debounceValue = useDebounce(value, 500);

    //every time the debounce will get changes the request for backend get called 
    useEffect(() => {
        fetch("")
    }, [debounceValue])

    return (
        <>
            Debounce value is {debounceValue}
            <input type="text" onChange={e => setValue(e.target.value)}></input>
        </>
    )
}