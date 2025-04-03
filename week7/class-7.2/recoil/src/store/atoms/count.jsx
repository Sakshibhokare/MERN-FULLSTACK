import { atom, selector } from "recoil";
// all states will be here 
export const countAtom = atom({
    key: "countAtom", //this key will be deferent for each atom 
    default: 0
})

//selector
export const evenSelector = selector({
    key: "evenSelector",
    get: ({ get }) => {
        const count = get(countAtom);
        return count % 2;
    }
})