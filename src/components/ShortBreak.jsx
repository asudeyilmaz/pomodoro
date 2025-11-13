import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {short} from "../redux/pomodoroSlice";

function ShortBreak() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(short())}>Short Break</button>
    </div>
  );
}

export default ShortBreak;
