import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "./calcSlice";

const store = configureStore({
  reducer: {
    calculator: calcSlice,
  },
});

export default store;
