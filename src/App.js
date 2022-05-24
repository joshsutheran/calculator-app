import "./App.css";

import { useState } from "react";

import Header from './components/header/header'
import Display from "./components/display/display";
import Buttons from "./components/buttons/buttons";

function App() {
  const [calculation, setCalculation] = useState("");
  const [answer, setAnswer] = useState(0);

  function input(event) {
    setAnswer(0);
    setCalculation((prevCalc) => prevCalc.concat(event.target.value));
  }

  function evaluate() {
    try {
      const solution = (Math.round(eval(calculation) * 100) / 100);
        setAnswer(solution);
        setCalculation("");
    }
    catch (err) {
      setCalculation("Error! Try Again.")
    }
  }

  function reset() {
    setAnswer(0);
    setCalculation("");
  }

  function del() {
    setCalculation((prevCalc) => prevCalc.slice(0, -1));
  }

  function sign() {
    if (calculation[0] !== "-") {
      setCalculation((prevCalc) => `-${prevCalc}`);
    } else {
      setCalculation((prevCalc) => prevCalc.substring(1));
    }
  }

  return (
    <div className="background">
      <Header />
      <div className="calculator">
        <Display calculation={calculation} answer={answer} />
        <Buttons
          sign={sign}
          del={del}
          reset={reset}
          evaluate={evaluate}
          input={input}
        />
      </div>
    </div>
  );
}

export default App;
