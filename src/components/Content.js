import React, { useState } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

function Content() {
  const navBar = ["about", "portfolio", "contact", "resume"];
  const content = [<About />, <Portfolio />, <Contact />, <Resume />];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedContent, setSelectedContent] = useState(content[selectedIndex]);

  const styles = {
    navBar: {
      height: "fit-content",
      width: "fit-content",
      margin: "auto",
      display: "flex",
      flexDirection: "row",
      listStyle: "none",
    },
    navItem: {
      display: "block",
      textAlign: "center",
      marginLeft: "1em",
      marginRight: "1em",
      textDecoration: "none",
      color: "white",
      width: "100px",
    },
    content: {
      width: "fit-content",
      margin: "auto",
    },
  };

  const handleClick = (event) => {
    event.preventDefault();
    const index = parseInt(event.target.id);
    setSelectedIndex(index);
    setSelectedContent(content[index]);
  };

  const createNavBar = () => {
    return (
      <ul className="" style={styles.navBar}>
        {navBar.map((navOption, index) => (
          <li key={index}>
            <a href="" id={index} onClick={handleClick} style={styles.navItem} className={selectedIndex === index ? "selectedItem navItem" : "navItem"}>
              {navOption}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {createNavBar()}
      <div style={styles.content}>{selectedContent}</div>
    </>
  );
}

export default Content;
