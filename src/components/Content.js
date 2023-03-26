import React, { useState } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import "../styles/content.css";

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
      "flex-direction": "row",
      "list-style": "none",
    },
    navItem: {
      display: "block",
      "text-align": "center",
      "margin-left": "1em",
      "margin-right": "1em",
      "text-decoration": "none",
      color: "white",
      width: "100px",
    },
    content: {
      // border: "1px solid white",
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

    // return (
    //   <ul className="list-group list-group-horizontal justify-content-center" style={styles.navBar}>
    //     {navBar.map((navOption, index) => (
    //       <li
    //         style={styles.navItem}
    //         className={selectedIndex === index ? "list-group-item active nav-item" : "list-group-item nav-item"}
    //         key={index}
    //         onClick={() => {
    //           setSelectedIndex(index);
    //           setSelectedContent(content[index]);
    //         }}
    //       >
    //         {navOption}
    //       </li>
    //     ))}
    //   </ul>
    // );
  };

  return (
    <>
      {/* <div className="navBar">{createNavBar()}</div> */}
      {createNavBar()}
      <div style={styles.content}>{selectedContent}</div>
    </>
  );
}

export default Content;
