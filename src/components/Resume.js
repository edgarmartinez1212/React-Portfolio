import React from "react";

function Resume() {
  const resume = require(`../assets/resumeMarch2023.pdf`);
  const styles = {
    resumeDiv: {
      margin: "auto",
      "margin-top": "2em",
      border: "1px solid white",
      "border-radius": "10px",
      width: "50em",
      height: "30em",
    },
    resume: {
      "border-radius": "10px",
      width: "100%",
      height: "100%",
    },
  };
  return (
    <div className="resumeDiv" style={styles.resumeDiv}>
      <embed src={resume} style={styles.resume} />
    </div>
  );
}

export default Resume;
