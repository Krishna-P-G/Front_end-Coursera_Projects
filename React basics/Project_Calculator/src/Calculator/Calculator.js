import React, { useState, useEffect } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";
import { FaDeleteLeft } from "react-icons/fa6";

function Calculator() {
  const [input, setInput] = useState("0");
  const [resultDisplayed, setResultDisplayed] = useState(false);

  const handleNumberClick = (e) => {
    if (resultDisplayed || input === "0") {
      setInput("");
    }
    setInput((prevInput) => prevInput + e.target.innerHTML);
    setResultDisplayed(false);
  };

  const handleOperatorClick = (e) => {
    setInput((prevInput) => prevInput + e.target.innerHTML);
    setResultDisplayed(false);
  };

  const handleDeleteClick = () => {
    setInput((prevInput) => {
      if (prevInput.length === 1) {
        return "0";
      }
      return prevInput.slice(0, -1);
    });
  };
  const handleResultClick = () => {
    try {
      const parsed = input.replace(/×/g, "*").replace(/÷/g, "/");
      const result = evaluate(parsed);
      const limitedResult = parseFloat(result.toFixed(4));
      setInput(limitedResult.toString());
      setResultDisplayed(true);
    } catch (error) {
      setInput("Error");
      setResultDisplayed(true);
    }
  };

  const handleClearClick = () => {
    setInput("0");
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      switch (key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          if (resultDisplayed || input === "0") {
            setInput("");
          }
          setInput((prevInput) => prevInput + key);
          setResultDisplayed(false);
          break;
        case "+":
        case "-":
        case "*":
        case "/":
          setInput((prevInput) => prevInput + key);
          setResultDisplayed(false);
          break;
        case "Enter":
          handleResultClick();
          break;
        case "Backspace":
          handleDeleteClick();
          break;
        case "c":
          handleClearClick();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [input, resultDisplayed]);

  return (
    <div className="full_app">
      <div className="calculator">
        <div className="input">{input}</div>
        <div className="buttons">
          <div className="topPanel">
            <div className="numbers">
              <div id="clear" onClick={handleClearClick}>
                C
              </div>
              <div onClick={handleDeleteClick}>
                <FaDeleteLeft />
              </div>
            </div>
            <div className="equal" onClick={handleResultClick}>
              =
            </div>
          </div>
          <div className="panel">
            <div className="leftPanel">
              <div className="numbers">
                <div onClick={handleNumberClick}>1</div>
                <div onClick={handleNumberClick}>2</div>
                <div onClick={handleNumberClick}>3</div>
              </div>
              <div className="numbers">
                <div onClick={handleNumberClick}>4</div>
                <div onClick={handleNumberClick}>5</div>
                <div onClick={handleNumberClick}>6</div>
              </div>
              <div className="numbers">
                <div onClick={handleNumberClick}>7</div>
                <div onClick={handleNumberClick}>8</div>
                <div onClick={handleNumberClick}>9</div>
              </div>
              <div className="numbers">
                <div onClick={handleNumberClick}>0</div>
                <div onClick={handleNumberClick}>00</div>
                <div onClick={handleNumberClick}>000</div>
              </div>
            </div>
            <div className="rightPanel">
              <div className="operators">
                <div onClick={handleOperatorClick}>+</div>
                <div onClick={handleOperatorClick}>-</div>
                <div onClick={handleOperatorClick}>&times;</div>
                <div onClick={handleOperatorClick}>&divide;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
