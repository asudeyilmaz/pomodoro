import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  timer: 25 * 60,
  run: false,
  theme: "work",
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

    short: (state) => {
      state.timer = 5 * 60;
      state.theme = "short-break ";
    },
    long: (state) => {
      state.timer = 15 * 60;
      state.theme = "long-break";
    },
    pomodoro: (state) => {
      state.timer = 25 * 60;
      state.theme = "work";
    },
  },
});

export const {pomodoroStart, tick, pomodoroStop, short, long, pomodoro} =
  pomodoroSlice.actions;

export default pomodoroSlice.reducer;
