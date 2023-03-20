import React, { useState } from "react";
// import Content from "./Content";

const handleClick = (event) => {
  console.log(event);
};

function Navigation() {
  const navBar = ["about me", "portfolio", "contact", "resume"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <ul className="list-group">
        {navBar.map((navOption, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {navOption}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navigation;
