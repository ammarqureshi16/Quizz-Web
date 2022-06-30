import React from "react";
import "./input.css";
import Data from "../Data/data";

export default function Inputs(props) {
  return (
    <>
      {Data[props.currenQuestion].options.map((item, index) => {
        return (
          <>
            <div key={props.Key}>
              <p className="item-Text">
                <input
                  name={props.Name}
                  id={props.Id}
                  onChange={props.onChange}
                  value={item}
                  type={"radio"}
                />
                {item}
              </p>
            </div>
          </>
        );
      })}
    </>
  );
}
