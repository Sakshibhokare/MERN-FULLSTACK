//context: we define the variable outside, then we use that variable directly, without passing as a prop

// steps :
// 1st : define the context in a file outside the main file
//give that context a value using <.provider value={count}> in the main file
// 2nd : use useContext(variableName0) to use the value of that context

// vvv imp interview q
// why do you use the context API to make rendering more performing the answer is no
// we use only to make syntax cleaner and to get rid of prop drilling
// when you are not using any context variable then that component should not rerender
// but is rerendering

// to make it effective for rerendering
// we have state management libraries like recoil

