import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "./loading";

export default function createRequestSagaSignUp(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action) {
    yield put(startLoading(type));
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.status,
      });
    } catch (e) {
      console.log("error: " + e);
      yield put({ type: FAILURE, payload: e, error: true });
    }
    yield put(finishLoading(type));
  };
}
