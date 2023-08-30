import { delay, put, takeEvery } from 'redux-saga/effects';

import {
  decrement,
  decrementSuccess,
  increment,
  incrementSuccess,
} from "./counterSlice";

function* increaseSaga() {
  yield delay(1000);
  yield put({ type: incrementSuccess, payload: 1 });
}
function* decreaseSaga() {
  yield delay(1000);
  yield put({ type: decrementSuccess, payload: 1 });
}

export function* counterSaga() {
  yield takeEvery(increment, increaseSaga);
  yield takeEvery(decrement, decreaseSaga);
}