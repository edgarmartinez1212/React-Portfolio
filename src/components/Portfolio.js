import React from "react";
import "../styles/portfolio.css";

function Portfolio() {
  const projects = [
    {
      name: "password generator",
      description: "",
      image: require(`../assets/password-gen.png`),
      url: "https://edgarmartinez1212.github.io/password-generator/",
    },
    {
      name: "code quiz",
      description: "",
      image: require(`../assets/code-quiz.png`),
      url: "https://edgarmartinez1212.github.io/code-quiz/",
    },
    {
      name: "word day scheduler",
      description: "",
      image: require(`../assets/workday-scheduler.png`),
      url: "https://edgarmartinez1212.github.io/work-day-scheduler/",
    },
    {
      name: "weather dashboard",
      description: "",
      image: require(`../assets/weather-dashboard.png`),
      url: "https://edgarmartinez1212.github.io/weather-dashboard/",
    },
    {
      name: "pwa text editor",
      description: "",
      image: require(`../assets/text-editor.png`),
      url: "https://challenge19-pwatexteditor.herokuapp.com/",
    },
    {
      name: "group project: restaurant finder",
      description: "",
      image: require(`../assets/groupProject-1.png`),
      url: "https://team-takez.github.io/project-one/",
    },
    {
      name: "group project: future finder",
      description: "",
      image: require(`../assets/groupProject-2.png`),
      url: "https://future-finder.herokuapp.com/",
    },
  ];

  const styles = {
    projectCard: {
      border: "1px solid black",

      margin: "auto",
      display: "flex",
      "flex-direction": "row",
      "justify-content": "space-between",
      width: "80%",
    },
    imageDiv: {
      width: "50%",
    },
  };

  const createProjectContainer = () => {
    return (
      <div className="portfolio-container">
        <div>
          <ul className="projects-flex">
            {projects.map((project, index) => (
              <li key={index}>
                <img src={project.image} alt={project.name} className="project-image" onClick={handleClick} id={index} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const createProjectCard = (projectId) => {
    const project = projects[projectId];

    return (
      <div className="projectCard" style={styles.projectCard}>
        <div className="projectCardImageDiv" style={styles.imageDiv}>
          <img src={project.image} alt={project.name} className="project-image" />
        </div>
        <div className="projectCardInfoDiv">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.url} target="_blank">
            visit the page
          </a>
          <p onClick={handleBack}>BACK</p>
        </div>
      </div>
    );
  };

  const handleBack = () => {
    setPortfolioContainer(createProjectContainer());
  };

  const handleClick = (event) => {
    setPortfolioContainer(createProjectCard(event.target.id));
  };

  const [portfolioContainer, setPortfolioContainer] = React.useState(createProjectContainer());
  return portfolioContainer;
}

export default Portfolio;
