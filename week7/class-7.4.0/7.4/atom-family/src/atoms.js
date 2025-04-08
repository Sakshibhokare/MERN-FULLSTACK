import { atomFamily } from "recoil";
import { TODOS } from "./todos";

//will use this when we want to create atoms dynamically
//if you give same id multiple time it will only create that atom once 
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    //we can iterate over the array also 
    // let foundTodo=null;
    // for(let i=0; i<TODOS.length; i++){
    //   if(TODOS[i].id===id){
    //     foundTodo=TODOS[i];
    //   }
    //   return foundTodo;
    // }
    return TODOS.find(x => x.id === id)
  },
});

// const todoAtoms = atom({
//   key: "todoAtom",
//   default: 1
// })