import {useEffect, useState} from "react";
import "./App.css";
import CountDown from "./components/CountDown";
import PageContainer from "./components/PageContainer";
import LongBreak from "./components/LongBreak";
import ShortBreak from "./components/ShortBreak";
import Pomodoro from "./components/Pomodoro";
import {useSelector} from "react-redux";

function App() {
  const {theme} = useSelector((state) => state.pomodoro);
  return (
    <PageContainer theme={theme}>
      <div className="flex-column card">
        <div className="flex-row">
          <Pomodoro />
          <ShortBreak />
          <LongBreak />
        </div>
        <CountDown />
      </div>
    </PageContainer>
  );
}

export default App;
