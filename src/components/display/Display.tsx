import React from "react";
import "./Display.css";

type DisplayProps = {
  value: string;
  handleOnValueChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Display(props: DisplayProps) {
  const { value, handleOnValueChange } = props;
  return (
    <div>
      <input
        className={"rectangle"}
        type={"text"}
        disabled={true}
        value={value}
        onChange={handleOnValueChange}
      />
    </div>
  );
}
