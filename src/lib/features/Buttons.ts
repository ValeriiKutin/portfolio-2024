"use client";

import { createSlice } from "@reduxjs/toolkit";

interface ButtonStateValue {
  isToggle: boolean;
}

const initialState: ButtonStateValue = {
  isToggle: false,
};

export const buttonSlice = createSlice({
  name: "buttons",
  initialState: initialState,
  reducers: {
    toggleTheme: (state: ButtonStateValue) => {
      state.isToggle = !state.isToggle;
    },
  },
});

export const { toggleTheme } = buttonSlice.actions;

export default buttonSlice.reducer;
