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
    pomodoroStop: (state) => {
      state.run = false;
    },
    reset: (state) => {
      state.timer = 25 * 60;
      state.run = false;
    },
    short: (state) => {
      state.timer = 5 * 60;
    },
    long: (state) => {
      state.timer = 15 * 60;
    },
  },
});

export const {pomodoroStart, tick, pomodoroStop, reset, short, long} =
  pomodoroSlice.actions;

export default pomodoroSlice.reducer;
