import React from "react";
// First we import our Hello component from our components folder.
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./styles/main.css";

function App() {
  // const background = require(`./assets/background.jpg`);
  // const background = require(`./assets/background.jpg`);
  // const styles = {
  //   container: {
  //     backgroundImage: `url(${background}) no-repeat center fixed`,
  //     "background-size": "cover",
  //   },
  // };
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
