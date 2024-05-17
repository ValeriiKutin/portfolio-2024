import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "../Buttons";
export const store = configureStore({
  reducer: {
    buttons: buttonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
