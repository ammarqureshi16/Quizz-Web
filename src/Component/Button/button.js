import React from "react";
import "./button.css"

export default function Buttons(props) {
    return(
        <>
        <button onClick={props.onClick}>{props.Text}</button>
        </>
    )
    
}