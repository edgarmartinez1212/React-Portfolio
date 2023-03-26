import React from "react";

function Resume() {
  const resume = require(`../assets/resumeMarch2023.pdf`);
  const styles = {
    resumeDiv: {
      margin: "auto",
      "margin-top": "2em",
      width: "50em",
      height: "30em",
    },
    resume: {
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
