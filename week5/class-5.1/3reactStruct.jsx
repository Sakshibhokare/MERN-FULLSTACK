//understanding the react structure 
//command npm create vite@latest

// use npm run build :use this command to deploy your code on AWS
// import React from 'react'; 

// global state: react does not understand this state need to use usestate hook to define the state
import { useState } from "react";
let state={
    count:0 
}

function App(){
    //this is similar to const [a, b]=arr then no need to write it as arr[0] for first value you cam directly write a to get the first value 
        const [count, setCount] = React.useState(0) //initialized with 0


        function onClickHandler(){
            // state.count=state.count+1; 
            setCount(count+1);
        }


        
        return (
            <div>
                {/* <button onClick={onClickHandler}>Counter {count}</button>  */}

                {/* using cutom components  */}
                <CustomButton count={count} setCount={setCount}></CustomButton>
                <CustomButton count={count+1} setCount={setCount}></CustomButton>
                <CustomButton count={count*100} setCount={setCount}></CustomButton>

            </div>
        )



        //writing a custom button or custom component 
        // we can simply write all functions and xml code in one custom function and then simply call it with proper props 
        function CustomButton(props){
            function onClickHandler2(){
                props.setCount(props.count+1);
            }

            return <button onClick={onClickHandler2}>
                Counter {props.count}
            </button>
        }

}

export default App
