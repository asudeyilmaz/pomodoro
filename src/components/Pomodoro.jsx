import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {pomodoro} from "../redux/pomodoroSlice";

function Pomodoro() {
  const {run, timer} = useSelector((state) => state.pomodoro);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(pomodoro())}>Pomodoro</button>
    </div>
  );
}

export default Pomodoro;
