import React from "react";
import {long} from "../redux/pomodoroSlice";
import {useDispatch} from "react-redux";

function LongBreak() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(long())}>Long Break</button>
    </div>
  );
}

export default LongBreak;
