import React from "react";
import "./CalculatorButton.css";

export type CalculatorButtonProps = {
  name: string;
  id: string;
  isDisabled?: boolean;
  type?: string;
  handleOnButtonClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => void;
};

export default function CalculatorButton(props: CalculatorButtonProps) {
  const {
    id,
    name,
    isDisabled = false,
    type = "square",
    handleOnButtonClick,
  } = props;
  return (
    <div>
      <button
        type={"button"}
        onClick={(event) => handleOnButtonClick(event, id)}
        className={type}
        disabled={isDisabled}
      >
        {name}
      </button>
    </div>
  );
}
