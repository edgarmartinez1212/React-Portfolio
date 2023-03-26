import React from "react";

function Header() {
  const name = "edgar martinez";
  const styles = {
    header: {
      width: "fit-content",
      margin: "10px",
    },
    text: {
      color: "white",
      "border-bottom": "1px solid white",
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
