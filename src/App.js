import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { DatePicker } from "@chakra-ui/react"
import { today, getLocalTimeZone} from "@internationalized/date"
import { useState } from "react"

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

      </header>

    </div>
  );
}



export default App;
