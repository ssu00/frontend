import { Saga } from "../reducers/update";
import { signupSaga } from "../reducers/signup";
import { all } from "@redux-saga/core/effects";
export default function* rootSaga() {
  console.log("rootSaga");
  yield all([Saga(), signupSaga()]);
}
