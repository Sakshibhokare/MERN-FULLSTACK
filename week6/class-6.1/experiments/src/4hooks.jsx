// Hooks in react are function that allows you
// to hook into react state and lifecycle features from function
// components

// these functions start with use are called hooks

// useEffect

// is the first hook that let you do the life cycle event
// this will run only once, this will help to get stuck in to infinite loop
// useEffect(function () {
//     alert("hi")
// }, [])

// function inside the useEffect mounts that function
// this requires dependency array 