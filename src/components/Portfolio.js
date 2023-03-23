import React from "react";
import "../styles/portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "project 1",
      description: "project 1 description",
      image: "../password-generator.png",
      url: "",
    },
  ];

  return (
    <div className="portfolio-container">
      {/* <h2>portfolio</h2> */}
      <div>
        <ul className="projects-flex">
          {projects.map((project, index) => (
            <li className="project" key={index}><img src="/Users/edgarmartinez/code/Homeworks/React-Portfolio/assets/password-gen.png"></img></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
