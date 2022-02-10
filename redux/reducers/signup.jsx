import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import createRequestSagaSignUp from "./createRequestSagaSignup";
import createRequestActionTypesSignUp from "./createRequestActionTypesSignUp";
import * as API from "../api/signup";
import { takeLatest } from "@redux-saga/core/effects";

const INITIALIZE = "signup/INITIALIZE";
const CHANGE_FIELD = "signup/CHANGE_FIELD";
const NEXT_STEP = "signup/NEXT_STEP";
const PREV_STEP = "signup/PREV_STEP";
const MOVE_STEP = "signup/MOVE_STEP";
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] =
  createRequestActionTypesSignUp("signup/SIGNUP");

export const Initialize = createAction(INITIALIZE);
export const ChangeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);

export const NextStep = createAction(NEXT_STEP, (form) => form);
export const PrevStep = createAction(PREV_STEP, (form) => form);
export const MoveStep = createAction(MOVE_STEP, (form) => form);
export const SignUp = createAction(SIGNUP, (form) => form);

const SignUpSaga = createRequestSagaSignUp(SIGNUP, API.SignUp);
export function* signupSaga() {
  yield takeLatest(SIGNUP, SignUpSaga);
}

const initialState = {
  signup: {
    step: 1,
    email: "",
    gender: "MALE",
    name: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
    birthYear: 2002,
    stateL: "",
    stateM: "",
    stateS: "",
    disable: true,
  },
  signUpSuccess: false,
  signUpError: false,
  errorText: "",
};

const SignUpR = handleActions(
  {
    [INITIALIZE]: (state) => ({ ...state, ...initialState }),
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [NEXT_STEP]: (state) =>
      produce(state, (draft) => {
        draft["signup"]["step"] += 1;
      }),
    [PREV_STEP]: (state) =>
      produce(state, (draft) => {
        draft["signup"]["step"] -= 1;
      }),
    [MOVE_STEP]: (state, { payload }) =>
      produce(state, (draft) => {
        draft["signup"]["step"] = payload;
      }),
    [SIGNUP_SUCCESS]: (state) => ({
      ...state,
      signUpSuccess: true,
      signUpError: false,
    }),
    [SIGNUP_FAILURE]: (state, { payload }) => ({
      ...state,
      signUpSuccess: false,
      signUpError: true,
      errorText: payload,
    }),
  },
  initialState
);

export default SignUpR;
