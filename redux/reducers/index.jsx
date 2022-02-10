import { combineReducers } from "redux";
import update from "./update";
import SignUpR from "./signup";
import loading from "./loading";

const rootReducer = combineReducers({
  update,
  SignUpR,
  loading,
});

export default rootReducer;
