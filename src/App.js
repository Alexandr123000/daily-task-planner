import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          daily task planner
        </p>
        <ButtonGroup isAttached float={"left"}>
        <Button fontSize={"11px"} bg={"red"} h={"30px"} w={"70px"} ml={"2%"} mr={"1%"}>BTN</Button>
        <Button fontSize={"11px"} bg={"red"} h={"30px"} w={"70px"} ml={"4%"} mr={"1%"}>BTN</Button>
        <Button fontSize={"11px"} bg={"red"} h={"30px"} w={"70px"} ml={"4%"} mr={"1%"}>BTN</Button>
        <Button fontSize={"11px"} bg={"red"} h={"30px"} w={"70px"} ml={"4%"} mr={"1%"}>BTN</Button>
        </ButtonGroup>
      {/*}        <Breadcrumb>
      <BreadcrumbItem>
      <BreadcrumbLink>nnn</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
      <BreadcrumbLink>nnn</BreadcrumbLink>
      </BreadcrumbItem>
            <BreadcrumbItem>
      <BreadcrumbLink>nnn</BreadcrumbLink>
      </BreadcrumbItem>
      
      </Breadcrumb>*/}
      </header>

    </div>
  );
}

export default App;
