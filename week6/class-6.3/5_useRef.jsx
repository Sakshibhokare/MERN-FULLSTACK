// UseRef
// Lets say you want to di some tax evasion
// you want to override what your CA calculated as your income tax
// How would u do it? you would report an incorrect
// value to the government 

const { useEffect, useState, useRef } = require("react");

function App() {
    const [incomeTax, setIncomeTax] = useState(20000);
    const divRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            // document.getElementById("incomeTaxContainer").innerHTML = 10
            divRef.current.innerHTML = 10
        }, 5000)
    }, []);

    //after 5 sec the value will get changed from 20000 to 10, which confuses react, so in any case if we want to do that we use useRef
    return (
        <div>
            hi there, your income tax returns are
            <div ref={divRef} id="incomeTaxContainer">{incomeTax}</div>
        </div>
    )
}

export default App