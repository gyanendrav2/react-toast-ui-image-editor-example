import { combineReducers } from "redux";

// Import Reducers
import { increment } from "./increment";
import { dashboard } from "./dashboard";
//import { decrement } from "./decrement";

export const RootReducer = combineReducers({
  counter: increment,
  dashboard
});
