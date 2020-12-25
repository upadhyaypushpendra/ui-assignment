import React, { useState } from "react";

import "./styles.css";

import NavItem from "../NavItem/NavItem";

export default function Navbar(props) {
  
  const [selectedItem, setSelectedItem] = useState();

  const handleClick = (item) => {
    setSelectedItem(item);
    props.onItemSelected && props.onItemSelected(item);
  };

  return (
    <div className="nav-root">
      {props.items.map((item) => (
        <NavItem
          key={item.id}
          data={item}
          onClick={handleClick}
          selected={selectedItem === item}
        >
          {item.text}
        </NavItem>
      ))}
    </div>
  );
}
