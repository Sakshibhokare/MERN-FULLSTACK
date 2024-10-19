//React returns, React re-rendering, key, wrapper components, useEffect, useMemo, useCallback, useRef
import React, { useState } from 'react'
import './App.css'

function App() {
    // const [title, setTitle] = useState("sakshi"); 

    // function updateTitle(){
    //   setTitle("My name is " + Math.random())
    // }

    // 4th 
    // React Memo: let not rerender the function when props has not changed 

    return (
        <>
            {/* top level app which renders two headers  */}
            {/* 2nd ass: on click on the button the title should get changed  */}
            {/* just give the name of the function do not call it  */}
            {/* <button onClick={updateTitle}>Update the title</button> */}

            {/* if the parent is rerendered all its childrens will get rerendered, using memo only first Header will get rerender and not the second one coz it does not changes and it has a static value */}
            {/* <Header title={title}></Header> */}
            {/* <Header title="demo2"></Header> */}

            <HeadersWithButtons></HeadersWithButtons>
        </>
    )
}

// 3rd 
// new component header with button 
//this is more optimal solution  
function HeadersWithButtons() {
    const [title, setTitle] = useState("sakshi++");

    function updateTitle() {
        setTitle("My name is " + Math.random())
    }

    return <div>
        <button onClick={updateTitle}>Update the title</button>
        <Header title={title}></Header>
    </div>
}


// 1st 
// header component it will take title as an input 
// eslint-disable-next-line react/prop-types
//memo helps to not rerender the function when the props are not changed 
const Header = React.memo(function Header({ title }) {
    return <div>
        {title}
    </div>
})
export default App
