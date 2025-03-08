// // eslint-disable-next-line no-undef
// const { useState } = require("react"); // Importing the 'useState' hook from React to manage state

const { use } = require("react")
const { useCallback, useState } = require("react")


// // Callback in React
// // A callback function is a function that is passed 
// // down from a parent component to a 
// // child component as a prop. The child component can 
// // call this function whenever an event happens, 
// // like a button click or other user actions.


// // Parent component 'App'
// function App() {
//     // useState hook initializes 'count' state variable with initial value 0.
//     // 'setCount' is a function used to update the value of 'count'.
//     const [count, setCount] = useState(0)

//     // Callback function defined in the parent that will be passed to the child
//     function onClick() {
//         console.log("child clicked") // Logs "child clicked" when the child button is clicked
//     }

//     // JSX returned by the App component
//     return <div>
//         {/* The 'onClick' function is passed down as a prop to the Child component */}
//         <Child onClick={onClick}></Child>

//         {/* Button in the parent component that increments the 'count' state on click */}
//         <button onClick={() => {
//             // Updates the 'count' state by increasing its value by 1
//             setCount(count + 1);
//         }}>
//             Click me {count} {/* Displays the current value of 'count' */}
//         </button>
//     </div>
// }

// // eslint-disable-next-line no-undef
// const Child = memo(({ onClick }) => {
//     // The memoized 'Child' component only re-renders if its props change
//     console.log("child render") // Logs to the console when the Child component renders

//     // JSX returned by the Child component
//     return <div>
//         {/* Button in the child component that triggers the 'onClick' callback from the parent */}
//         <button onClick={onClick}>Button clicked</button>
//     </div>
// })

// // Exporting the 'App' component as the default export
// export default App;
// ************************************************************************








// callBack hooks help to memoize a function 
// suppose we have two function 

// function input1(){
//     console.log("input")
// }

// function input2(){
//     console.log("input")
// }

// input1== input2 the ans will be false 
// since the value of two functions is equal means there is no change occurred 
// react would still rerender 
// to protect from this rerender we use useCallback, so whenever the dependancy 
// will get changed only then rerender will happen 

function App() {
    const [count, setCount] = useState(0)
    //will remember its original implementation unless any dependency changes 
    const inputFunction = useCallback(() => {
        console.log("hi there")
    }, [])
    //when we pass the function from parent class to child class 
    // react would get confuse it would think that these two are different functions
    // using callbacks, it will only get rerender when dependencies changes
    return <div>
        <ButtonComponent inputFunction={inputFunction}></ButtonComponent>
        <button onClick={() => {
            setCount(count + 1);
        }}>Click me</button>
    </div>
}

const ButtonComponent = memo(({ inputFunction }) => {
    console.log("child render")

    return <div>
        <button>Button Clicked</button>
    </div>
})


