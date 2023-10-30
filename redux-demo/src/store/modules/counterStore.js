import { createSlice } from "@reduxjs/toolkit";

const countStore = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToNum(state, action) {
      state.count = action.payload;
    },
  },
});

const { increment, decrement, addToNum } = countStore.actions;

const countReducer = countStore.reducer;

export { increment, decrement, addToNum };

export default countReducer;
