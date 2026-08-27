import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { DatePicker } from "@chakra-ui/react"
import { today, getLocalTimeZone} from "@internationalized/date"
import { useState } from "react"
import { useEffect } from "react"
import Calendar from "./Calendar-scripts"
import Header from "./Header-scripts"

function App() {
  useEffect(() => {
    Calendar();
    Header();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <a href="#">
        <span id="Name">Daily Task Planner</span>
      </a>
      <nav className="nav">
        <button className="nav-link active" data-page="todo">Todo List</button>
        <button className="nav-link" data-page="calendar">Calendar</button>
        <button className="nav-link login" data-page="login">Login / Register</button>
      </nav>
      </header>
      <main>
          {/*<ButtonGroup isAttached float={"left"}>
          <Button fontSize={"11px"} bg={"red"} h={"30px"} w={"70px"} ml={"2%"} mr={"1%"}>BTN</Button>
          <Button fontSize={"11px"} bg={"red"} h={"30px"} w={"70px"} ml={"4%"} mr={"1%"}>BTN</Button>
          <Button fontSize={"11px"} bg={"red"} h={"30px"} w={"70px"} ml={"4%"} mr={"1%"}>BTN</Button>
          <Button fontSize={"11px"} bg={"red"} h={"30px"} w={"70px"} ml={"4%"} mr={"1%"}>BTN</Button>
          </ButtonGroup>*/}
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
      </main>
        <footer className="App-footer">
          <nav className="nav">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">About</a>
          </nav>
        </footer>
    </div>
  );
}
export default App;