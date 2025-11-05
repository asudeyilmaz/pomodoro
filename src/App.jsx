import {useState} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {pomodoroStart} from "./redux/pomodoroSlice";

function App() {
  const pomodoro = useSelector((state) => state.pomodoro.value);
  const dispatch = useDispatch();
  return (
    <div>
      {pomodoro}
      <button onClick={() => dispatch(pomodoroStart())}>başlat</button>
    </div>
  );
}

export default App;
