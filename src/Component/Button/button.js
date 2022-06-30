import React from "react";
import "./button.css";

export default function Buttons(props) {
  return (
    <>
      <button className={props.className} onClick={props.onClick}>
        {props.Text}
      </button>
    </>
  );
}
