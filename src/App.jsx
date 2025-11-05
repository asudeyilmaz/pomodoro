import {useEffect, useState} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {pomodoroStart, tick} from "./redux/pomodoroSlice";

function App() {
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
      <h1>{`${minutes}dk ${seconds}sn`} </h1>
      <button onClick={() => dispatch(pomodoroStart())}>başlat</button>
    </div>
  );
}

export default App;
