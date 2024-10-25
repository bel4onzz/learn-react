import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
// import characterReducer from "./reducers/characterReducer";
import favoritesReducer from "./reducers/favoritesReducer";

const rootReducer = combineReducers({
  //   characters: characterReducer,
  favorites: favoritesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
