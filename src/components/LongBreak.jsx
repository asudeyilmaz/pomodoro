import React from "react";
import {long} from "../redux/pomodoroSlice";
import {useDispatch} from "react-redux";
import "../css/buttons.css";

function LongBreak() {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="pomodoro-buttons" onClick={() => dispatch(long())}>
        Long Break
      </button>
    </div>
  );
}

export default LongBreak;
