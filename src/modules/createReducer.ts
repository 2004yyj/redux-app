import { combineReducers } from "redux";
import counterSlice from "../counter/redux/counterSlice"
import { counterSaga } from "../counter/redux/counter";
import { all, fork } from "redux-saga/effects";

const rootReducer = combineReducers({
    counter: counterSlice.reducer,
});

export function* rootSaga() {
    yield all([fork(counterSaga)]);
}

export type ReducerType = ReturnType<typeof rootReducer>
export default rootReducer;