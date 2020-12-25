import React from "react";

import Navbar from "../Navbar/Navbar";

const navItems = [
  { id: 1, text: "Daily Schedule" },
  { id: 2, text: "Learning Materials" },
  { id: 3, text: "Assignments" },
];

export default function Home(props) {
  
  const handleItemSelected = (item) => {
    // Do something on selecting nav item
    console.log("Selected : ", item.text);
  };

  return <Navbar items={navItems} onItemSelected={handleItemSelected} />;
}
