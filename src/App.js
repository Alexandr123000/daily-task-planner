import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { DatePicker } from "@chakra-ui/react"
import { today, getLocalTimeZone} from "@internationalized/date"
import { useState } from "react"
import NM from "./Calendar-scripts"

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <ButtonGroup isAttached float={"left"}>
        <Button fontSize={"11px"} bg={"red"} h={"30px"} w={"70px"} ml={"2%"} mr={"1%"}>BTN</Button>
        <Button fontSize={"11px"} bg={"red"} h={"30px"} w={"70px"} ml={"4%"} mr={"1%"}>BTN</Button>
        <Button fontSize={"11px"} bg={"red"} h={"30px"} w={"70px"} ml={"4%"} mr={"1%"}>BTN</Button>
        <Button fontSize={"11px"} bg={"red"} h={"30px"} w={"70px"} ml={"4%"} mr={"1%"}>BTN</Button>
        </ButtonGroup>
        <p>
          Daily Task Planner
        </p>
        <div className="calendar-container">
          <div className="calendar-header">
            <button className="nav-btn" id="prevMonth">{"<"}</button>
            <span className="month-year" id="monthYear">January 2026</span>
            <button className="nav-btn" id="nextMonth">{">"}</button>
          </div>
          <div className="weekdays">
            <span>Sun</span><span>Mon</span><span>Tue</span>
            <span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
          </div>
          <div className="days-grid" id="daysGrid"></div>
        </div>
      </header>
    </div>
  );
}
NM();


export default App;
