import React, { useState } from "react";
import CalculatorButton from "../button/CalculatorButton";
import Display from "../display/Display";
import "./Structure.css";

const OPERATORS = ["+", "-", "*", "/"];

const isOperator = (value: string) => OPERATORS.includes(value);

export default function Structure() {
  const [displayText, setDisplayTest] = useState<string>("");

  const handleCalculatorButtonClick = (value: string) => {
    const handleNumbers = () => {
      setDisplayTest((preValue) => preValue + value);
    };

    const handleOperators = () => {
      const lastChar: string = displayText[displayText.length - 1];
      if (isOperator(lastChar)) return;
      setDisplayTest((prevValue) => prevValue + value);
    };

    if (value === "=") {
      // eslint-disable-next-line no-eval
      setDisplayTest(eval(displayText));
    } else if (value === "AC") {
      setDisplayTest("");
    } else if (value === "DEL") {
      setDisplayTest((prevValue) => prevValue.slice(0, prevValue.length - 1));
    } else if (value === "00") {
      setDisplayTest((prevValue) => prevValue + "00");
    } else if (isOperator(value)) {
      handleOperators();
    } else {
      handleNumbers();
    }
  };

  const renderRow = (values: string[]): JSX.Element[] => {
    return values.map((value) => (
      <CalculatorButton
        key={value}
        id={value}
        name={value}
        handleOnButtonClick={() => handleCalculatorButtonClick(value)}
      />
    ));
  };

  return (
    <div className="parent">
      <div>
        <Display value={displayText} />
      </div>
      <div className={"grid"}>{renderRow(["AC", "", "DEL", "/"])}</div>
      <div className={"grid"}>{renderRow(["7", "8", "9", "*"])}</div>
      <div className={"grid"}>{renderRow(["4", "5", "6", "-"])}</div>
      <div className={"grid"}>{renderRow(["1", "2", "3", "+"])}</div>
      <div className={"grid"}>{renderRow(["0", "00", ".", "="])}</div>
    </div>
  );
}
