//this is import hook create a hook that runs after certain time 

import { useEffect, useState } from "react";

function useInterval(fn, timeout) {
    useEffect(() => {
        setInterval(() => {
            fn()
        }, timeout);
    }, [])
}


function App() {
    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(c => c + 1);
    }, 1000)

    return (
        <>
            Timer is at {count}
        </>
    )
}