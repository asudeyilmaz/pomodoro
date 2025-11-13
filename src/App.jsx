import {useEffect, useState} from "react";
import "./App.css";
import CountDown from "./components/CountDown";
import PageContainer from "./components/PageContainer";
import LongBreak from "./components/LongBreak";
import ShortBreak from "./components/ShortBreak";

function App() {
  return (
    <PageContainer>
      <div className="flex-row">
        <ShortBreak />
        <LongBreak />
      </div>
      <CountDown />
    </PageContainer>
  );
}

export default App;
