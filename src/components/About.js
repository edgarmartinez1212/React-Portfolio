import React from "react";
import "../styles/portfolio.css";

function About() {
  const imageUrl = require(`../assets/me.jpg`);
  const styles = {
    container: {
      margin: "auto",
      "margin-top": "4em",
      width: "50em",
      height: "20em",
      display: "flex",
      flexDirection: "row",
      flexwrap: "wrap",
      justifyContent: "space-evenly",
    },
    imageDiv: {
      width: "200px",
      height: "300px",
    },
    image: {
      height: "100%",
      width: "100%",
      "border-radius": "10px",
    },
    aboutMe: {
      height: "fit-content",
      width: "50%",
      "background-color": "#444",
      "border-radius": "10px",
      // border: "1px solid white",
      "text-align": "center",
      padding: "1em",
    },
    text: {},
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageDiv}>
        <img src={imageUrl} alt="edgar_avatar" style={styles.image}></img>
      </div>
      <div style={styles.aboutMe}>
        <p className="" style={styles.text}>
          Currently an IT User Support Specialist for Northwestern University Libraries with an interest in movies, music, and social events.
        </p>
        <p className="" style={styles.text}>
          After having been introduced to Web Development through a colleague, I decided to register for Northwestern University's Coding Bootcamp. Exepericing the world of programming and logic, I now have hopes of becoming a Web Developer.
        </p>
      </div>
    </div>
  );
}

export default About;
