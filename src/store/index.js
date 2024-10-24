import { createStore } from "redux";
import counterReducer from "../reducers/counterReducer";
import makeGuessReducer from "../reducers/makeGuessReducer";

// creating a store for one reducer
const storeCounterReducer = createStore(counterReducer);
const storeGuessReducer = createStore(makeGuessReducer);
const store = {
  counterStore: storeCounterReducer,
  guessedNumber: storeGuessReducer,
};
export default store;
