import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pomodoroStart, pomodoroStop, reset, tick} from "../redux/pomodoroSlice";

function CountDown() {
  const {run, timer} = useSelector((state) => state.pomodoro);
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
      <button onClick={() => dispatch(reset())}>Sıfırla</button>
    </div>
  );
}

export default CountDown;
