import React from "react";
import "../styles/header.css";

function Header() {
  const name = "edgar martinez";
  const styles = {
    header: {
      width: "fit-content",
      // border: "1px solid black",
      margin: "10px",
    },
    text: {
      "font-size": "2rem",
    },
  };

  return (
    <>
      <div className="header-div" style={styles.header}>
        <p className="" style={styles.text}>
          {name}
        </p>
      </div>
    </>
  );
}

export default Header;
