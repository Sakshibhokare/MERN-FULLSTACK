import { createContext } from "react";

// Initialize context with a default value (which can be anything, usually null or an object with placeholders)
export const CountContext = createContext({
    count: 0, // default value for count
    setCount: () => { }, // default function for setCount (no-op function)
});
