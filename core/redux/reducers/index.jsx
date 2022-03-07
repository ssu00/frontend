import { combineReducers } from "redux";
import classRegister from "./update";
import loading from "./loading";

const rootReducer = combineReducers({
  classRegister,
  loading,
});

export default rootReducer;
