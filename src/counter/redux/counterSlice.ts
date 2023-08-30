import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    isLoading: boolean,
    isDone: boolean,
    number: number,
    error: Error | null,
}

const initialState: CounterState = {
    isLoading: false,
    isDone: false,
    number: 0,
    error: null,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.isLoading = true;
      state.isDone = false;
      state.error = null;
    },
    incrementSuccess: (state, action: PayloadAction<number>) => {
      state.isLoading = false;
      state.isDone = true;
      state.number = state.number + action.payload;
    },
    decrement: (state) => {
      state.isLoading = true;
      state.isDone = false;
      state.error = null;
    },
    decrementSuccess: (state, action: PayloadAction<number>) => {
      state.isLoading = false;
      state.isDone = true;
      state.number = state.number - action.payload;
    },
  },
});

export const {
  increment,
  incrementSuccess,
  decrement,
  decrementSuccess,
} = counterSlice.actions;

export default counterSlice;
