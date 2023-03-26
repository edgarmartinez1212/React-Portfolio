import React from "react";
import "../styles/header.css";

function Header() {
  const name = "edgar martinez";
  const styles = {
    header: {
      width: "fit-content",
      margin: "10px",
      // border: "1px solid black",
      // background: "rgba(204, 204, 204, 0.1)",

      // border: "0",
      // opacity: "0.1",
    },
    text: {
      color: "white",
      // color: "black",
      "border-bottom": "1px solid white",
      // "border-radius": "10px",
    },
  };

  return (
    <>
      <div className="header-div" style={styles.header}>
        <h2 className="p-1" style={styles.text}>
          {name}
        </h2>
      </div>
    </>
  );
}

export default Header;
