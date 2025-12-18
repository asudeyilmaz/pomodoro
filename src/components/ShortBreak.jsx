import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {short} from "../redux/pomodoroSlice";
import "../css/buttons.css";

function ShortBreak() {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="pomodoro-buttons" onClick={() => dispatch(short())}>
        Short Break
      </button>
    </div>
  );
}

export default ShortBreak;
