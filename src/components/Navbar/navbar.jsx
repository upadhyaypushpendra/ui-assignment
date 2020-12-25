import React, { useState } from "react";
import "./styles.css";
import NavItem from "../NavItem/navItem";

const navItems = [
  { id: 1, text: "Daily Schedule" },
  { id: 2, text: "Daily Schedule" },
  { id: 3, text: "Assignments" },
];
export default function Navbar(props) {
  const [selectedItem, setSelectedItem] = useState();
  const handleClick = (ev, id) => {
    setSelectedItem(id);
  };
  return (
    <div className="nav-root">
      {navItems.map((item) => (
        <NavItem
          id={item.id}
          onClick={handleClick}
          selected={selectedItem === item.id}
        >
          {item.text}
        </NavItem>
      ))}
    </div>
  );
}
