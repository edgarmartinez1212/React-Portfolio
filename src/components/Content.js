import React, { useState } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
// import ProjectCard from "./ProjectCard";
import "../styles/content.css";

function Content() {
  const navBar = ["about me", "portfolio", "contact", "resume"];
  const content = [<About />, <Portfolio />, <Contact />, <Resume />];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedContent, setSelectedContent] = useState(content[selectedIndex]);

  const styles = {
    navBar: {
      height: "fit-content",
      width: "fit-content",
      margin: "auto",
      "list-style": "none",
    },
    navItem: {
      "text-align": "center",
      "margin-left": "1em",
      "margin-right": "1em",
      // border: "1px solid transparent",
      width: "150px",
      "border-radius": "0.25rem",
    },
    content: {
      // border: "1px solid black",
      width: "fit-content",
      margin: "auto",
    },
  };

  return (
    <>
      <ul className="list-group list-group-horizontal justify-content-center" style={styles.navBar}>
        {navBar.map((navOption, index) => (
          <li
            style={styles.navItem}
            className={selectedIndex === index ? "list-group-item active nav-item" : "list-group-item nav-item"}
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
      <div style={styles.content}>{selectedContent}</div>
    </>
  );
}

export default Content;
