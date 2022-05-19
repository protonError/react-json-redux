import { combineReducers } from "redux";
import userReducer from "./reducer";
const rootReducer = combineReducers({
  // Add reducers here
  data: userReducer,
});

export default rootReducer;
