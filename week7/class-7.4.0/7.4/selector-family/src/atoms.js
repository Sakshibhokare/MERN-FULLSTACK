import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";
//we are getting Data from bc/server 
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  //here we need selectorFamily to get the data from the atomFamily 
  default: selectorFamily({
    key: "todoSelectorFamily",
    //this is a function which return another functions
    get: (id) => async ({ get }) => {
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      return res.data.todo;
    },
  })
});

