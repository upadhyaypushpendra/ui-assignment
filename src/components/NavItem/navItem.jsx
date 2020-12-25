import React from "react";
import "./styles.css";

export default function NavItem(props) {
  return <div className={`nav-item${props.selected ? " selected" : ""}`} onClick={(ev)=>props.onClick(props.data)}>{props.children}</div>;
}
