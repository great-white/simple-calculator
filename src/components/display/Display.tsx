import React from "react";
import "./Display.css";

type DisplayProps = {
  value: string;
};

export default function Display(props: DisplayProps) {
  const { value } = props;

  return (
    <div>
      <input readOnly className={"rectangle"} type={"text"} value={value} />
    </div>
  );
}
