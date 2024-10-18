import { createStore } from "redux";
import counterReducer from "../reducers/counterReducer";

// creating a store for one reducer
const storeCounterReducer = createStore(counterReducer);
const store = [
  {
    counterStore: storeCounterReducer,
  },
];
export default store;
