import { combineReducers } from "redux";
import update from "./update";
import loading from "./loading";

const rootReducer = combineReducers({
  update,
  loading,
});

export default rootReducer;
