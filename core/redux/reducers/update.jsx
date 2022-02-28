import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import createRequestSaga from "./createRequestSaga";
import { createRequestActionTypes } from "./createRequestSaga";
import * as API from "../../api/Lecture/lectures";
import { takeLatest } from "@redux-saga/core/effects";

const INITIALIZE = "lecture/INITIALIZE";
const CHANGE_FIELD = "lecture/CHANGE_FIELD";
const ADD_TO_ARRAY = "lecture/ADD_TO_ARRAY";
const CHANGE_ARRAY = "lecture/CHANGE_ARRAY";
const DELETE_ARRAY_ELEMENT = "lecture/DELETE_ARRAY_ELEMENT";
const NEXT_STEP = "lecture/NEXT_STEP";
const PREV_STEP = "lecture/PREV_STEP";
const MOVE_STEP = "lecture/MOVE_STEP";
const [LECTURE_UPDATE, LECTURE_UPDATE_SUCCESS, LECTURE_UPDATE_FAILURE] =
  createRequestActionTypes("lecture/LECTURE_UPDATE");

export const Initialize = createAction(INITIALIZE);
export const ChangeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);
export const AddToArray = createAction(
  ADD_TO_ARRAY,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);

export const ChangeArray = createAction(
  CHANGE_ARRAY,
  ({ form, key, index, value }) => ({
    form,
    key,
    index,
    value,
  })
);

export const DeleteArrayElement = createAction(
  DELETE_ARRAY_ELEMENT,
  ({ form, key, index }) => ({
    form,
    key,
    index,
  })
);

export const NextStep = createAction(NEXT_STEP, (form) => form);
export const PrevStep = createAction(PREV_STEP, (form) => form);
export const MoveStep = createAction(MOVE_STEP, (form) => form);
export const LectureUpdate = createAction(LECTURE_UPDATE, (form) => form);

const UpdateSaga = createRequestSaga(LECTURE_UPDATE, API.LectureRegister);
export function* Saga() {
  yield takeLatest(LECTURE_UPDATE, UpdateSaga);
}

const initialState = {
  update: {
    step: 1,
    image: "",
    title: "",
    subtitle: "",
    introduction: "",
    lectureSubject: ["프론트엔드"],
    level: "입문",
    content: "",
    PpricePerHour: 0,
    PtimePerClass: 0,
    PnumOfClass: 0,
    GpricePerHour: 0,
    GtimePerClass: 0,
    GnumOfClass: 0,
    online: "off",
    offline: "off",
    discuss: "off",
    personal: "off",
    group: "off",
    groupMax: 0,
  },
  updateSuccess: false,
  updateError: false,
};

const ClassRegister = handleActions(
  {
    [INITIALIZE]: (state) => ({ ...state, ...initialState }),
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [ADD_TO_ARRAY]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key].push(value);
      }),
    [CHANGE_ARRAY]: (state, { payload: { form, key, index, value } }) =>
      produce(state, (draft) => {
        draft[form][key][index] = value;
      }),
    [DELETE_ARRAY_ELEMENT]: (state, { payload: { form, key, index } }) =>
      produce(state, (draft) => {
        delete draft[form][key][index];
      }),
    [NEXT_STEP]: (state) =>
      produce(state, (draft) => {
        draft["update"]["step"] += 1;
      }),
    [PREV_STEP]: (state) =>
      produce(state, (draft) => {
        draft["update"]["step"] -= 1;
      }),
    [MOVE_STEP]: (state, { payload }) =>
      produce(state, (draft) => {
        draft["update"]["step"] = payload;
      }),
    [LECTURE_UPDATE_SUCCESS]: (state) => ({
      ...state,
      updateSuccess: true,
      updateError: false,
    }),
    [LECTURE_UPDATE_FAILURE]: (state, { payload }) => ({
      ...state,
      updateSuccess: false,
      updateError: true,
    }),
  },
  initialState
);

export default ClassRegister;
