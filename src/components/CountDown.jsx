import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pomodoroStart, pomodoroStop, tick} from "../redux/pomodoroSlice";
import alarmSound from "../sounds/alarm.mp3";

function CountDown() {
  const {run, timer} = useSelector((state) => state.pomodoro);
  useEffect(() => {
    if (timer == 0) {
      const audio = new Audio(alarmSound);
      audio.play();
    }
  }, [timer]);

  const dispatch = useDispatch();
  useEffect(() => {
    let interval;
    if (run) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [run, dispatch]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  return (
    <div>
      <h1>{`${minutes}:${seconds}`} </h1>
      <button onClick={() => dispatch(pomodoroStart())}>Başlat</button>
      <button onClick={() => dispatch(pomodoroStop())}>Durdur</button>
    </div>
  );
}

export default CountDown;
