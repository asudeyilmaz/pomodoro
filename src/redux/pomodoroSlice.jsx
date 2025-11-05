import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  timer: 25 * 60,
  run: false,
};

export const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    pomodoroStart: (state) => {
      state.run = true;
    },
    tick: (state) => {
      if (state.timer > 0) {
        state.timer -= 1;
      } else {
        run = false;
      }
    },
  },
});

export const {pomodoroStart, tick} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
