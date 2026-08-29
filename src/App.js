import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { DatePicker } from "@chakra-ui/react"
import { today, getLocalTimeZone} from "@internationalized/date"
import { useState } from "react"
import { useEffect } from "react"
import Header from "./Header-scripts"
import ShowCalendar from "./Calendar"
import Calendar from './Calendar-scripts';



function App() {
  const [show, setShow] = useState(false);
  const [work, workCalendar] = useState(false);
  useEffect(() => {
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
        
      {/*<button className="nav-link login" data-page="login">Login / Register</button>*/}
      <button onClick={() => setShow(true)} className="nav-link" data-page="calendar">Calendar</button>
      </nav>
      </header>
      <main>
          <p>
            Daily Task Planner
          </p>
          {show && <ShowCalendar />}

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