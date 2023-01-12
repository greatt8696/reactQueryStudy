import { createAction, createSlice } from "@reduxjs/toolkit";
import produce from "immer";

export const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
    state: "",
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) =>
      produce(state, (draft) => {
        draft.value += action.payload;
      }),
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
