import { createContext } from "react";
//we have create the context to use state variable 
// across various components 
// once you create this you need to wrap component inside this context 
// to use state variable 
export const CountContext = createContext({ count, setCount });