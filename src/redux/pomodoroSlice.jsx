import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: 25,
};

export const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    pomodoroStart: (state) => {
      //will add timer
    },
  },
});

export const {pomodoroStart} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
