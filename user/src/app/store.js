import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import loggedReducer from "../features/logged/loggedSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    logged: loggedReducer,
  },
});
