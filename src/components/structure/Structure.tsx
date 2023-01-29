import React from "react";
import CalculatorButton from "../button/CalculatorButton";
import Display from "../display/Display";
import "./Structure.css";

export default function Structure() {
  const renderRow = (values: string[]): JSX.Element[] => {
    return values.map((value) => (
      <CalculatorButton
        key={value}
        id={value}
        name={value}
        handleOnButtonClick={() => console.log(`${value} clicked`)}
      />
    ));
  };

  return (
    <div>
      <div>
        <Display
          value=""
          handleOnValueChange={(event) => console.log("changed")}
        />
      </div>
      <div className={"row"}>{renderRow(["AC", "", ",", "/"])}</div>
      <div className={"row"}>{renderRow(["7", "8", "9", "*"])}</div>
      <div className={"row"}>{renderRow(["4", "5", "6", "-"])}</div>
      <div className={"row"}>{renderRow(["1", "2", "3", "+"])}</div>
      <div className={"row"}>
        <CalculatorButton
          id={"0"}
          key={"0"}
          name={"0"}
          handleOnButtonClick={() => console.log(`${0} clicked`)}
          type={"rectangle"}
        />
        {renderRow([".", "="])}
      </div>
    </div>
  );
}
