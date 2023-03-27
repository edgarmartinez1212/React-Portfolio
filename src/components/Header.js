import React from "react";

function Header() {
  const name = "edgar martinez";
  const styles = {
    header: {
      // width: "fit-content",
      width: "16em",
      margin: "10px",
      display: "block",
    },
    text: {
      padding: "0.25em",
      color: "white",
      borderBottom: "1px solid white",
      textAlign: "center",
    },
  };

  return (
    <>
      <div className="headerDiv" style={styles.header}>
        <h2 className="headerTitle" style={styles.text}>
          {name}
        </h2>
      </div>
    </>
  );
}

export default Header;
