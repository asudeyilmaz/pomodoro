import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  timer: "25:00",
};

export const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    pomodoroStart: (state) => {
      let totalTime = 25 * 60;
      const timer = setInterval(() => {
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        state.timer = `${minutes}:${seconds.toString().padStart(2, "0")}`;
        totalTime--;
        if (totalTime < 0) {
          clearInterval(timer);
          state.timer = "Süre doldu.";
        }
      }, 1000);
    },
  },
});

export const {pomodoroStart} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
