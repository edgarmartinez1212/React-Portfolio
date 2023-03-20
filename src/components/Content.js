import React, { useState } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

function Content() {
  const navBar = ["about me", "portfolio", "contact", "resume"];
  const content = [<About />, <Portfolio />, <Contact />, <Resume />];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedContent, setSelectedContent] = useState(content[selectedIndex]);

  return (
    <>
      <ul className="list-group list-group-horizontal justify-content-center">
        {navBar.map((navOption, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              setSelectedContent(content[index]);
            }}
          >
            {navOption}
          </li>
        ))}
      </ul>
      <div>{selectedContent}</div>
    </>
  );
}

export default Content;
