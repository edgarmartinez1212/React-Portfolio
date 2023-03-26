import React from "react";

function About() {
  const imageUrl = require(`../assets/me.jpg`);
  const styles = {
    container: {
      margin: "auto",
      "margin-top": "2.5em",
      width: "45em",
      height: "20em",
      display: "flex",
      flexDirection: "row",
      flexwrap: "wrap",
      justifyContent: "space-evenly",
    },
    imageDiv: {
      display: "block",
      width: "200px",
      height: "300px",
      "margin-top": "1.5em",
    },
    image: {
      height: "100%",
      width: "100%",
    },
    about: {
      display: "block",
      height: "fit-content",
      width: "25em",
      "background-color": "#444",
      "text-align": "center",
      padding: "1em",
    },
  };

  const createAbout = () => {
    return (
      <div style={styles.container}>
      <div style={styles.imageDiv}>
        <img src={imageUrl} alt="edgar_avatar" style={styles.image}></img>
      </div>
      <div style={styles.about}>
        <p className="">
          Currently an IT User Support Specialist for Northwestern University Libraries with an interest in movies, music, and social events.
        </p>
        <p className="">
          After having been introduced to Web Development through a colleague, I decided to register for Northwestern University's Coding Bootcamp. Exepericing the world of programming and logic, I now have hopes of becoming a Web Developer.
        </p>
      </div>
    </div>
    );
  };

  return (
    createAbout()
  );
}

export default About;
