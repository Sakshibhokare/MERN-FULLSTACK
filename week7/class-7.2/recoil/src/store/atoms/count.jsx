import { atom } from "recoil";
// all states will be here 
export const countAtom = atom({
    key: "countAtom", //this key will be deferent for each atom 
    default: 0
})