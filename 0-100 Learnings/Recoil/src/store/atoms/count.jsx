import { atom, selector } from "recoil";
// Create an atom to hold the count state
export const countState = atom({
    key: 'countState', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });

  export const evenSelector = selector({
    key:'evenSelector',
    get: ({get})=>{
      const counts = get(countState);
      return counts%2;
    }
  });