// taking the current state performs some dom manipulations
// and returns the reconcile things
// for example you give your bank information to CA they reconcile your docs and return you your final revenue

const { useState } = require("react");

// we give our state to react, react will reconcile and render things on our dom
// we can do manually
// finding the actual thing that should put on the dom
// you give state to react
// react rerender every time when the state changes
// react have tricks to make calculations faster 


//the actual update on DOM is react handling 
//any time the state changes, rerender happens 
function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={function () {
                setCount(count + 1);
            }}>Count is {count}</button>
        </div>
    )
}