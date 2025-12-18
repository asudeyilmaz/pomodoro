import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {pomodoro} from "../redux/pomodoroSlice";
import "../css/buttons.css";

function Pomodoro() {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="pomodoro-buttons" onClick={() => dispatch(pomodoro())}>
        Pomodoro
      </button>
    </div>
  );
}

export default Pomodoro;
