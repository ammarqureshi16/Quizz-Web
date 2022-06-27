import React from "react";
import "./input.css";
import Data from "../Data/data";

export default function Inputs(props) {
  return (
    <>
      {Data[props.optionIndexNum].options.map((item) => {
        return (
          <>
            <p style={{ color: "white" }}>
              <input
                name="radioButton"
                value={item}
                onChange={props.onChange}
                type={"radio"}
              />
              {item.text}
            </p>
          </>
        );
      })}
    </>
  );
}
