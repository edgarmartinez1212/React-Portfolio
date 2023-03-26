import React from "react";
import "../styles/portfolio.css";

function Portfolio() {
  const projects = [
    {
      name: "password generator",
      description: "Web page that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code.",
      image: require(`../assets/password-gen.png`),
      url: "https://edgarmartinez1212.github.io/password-generator/",
    },
    {
      name: "code quiz",
      description: "Web page that generates questions and answers for a coding quiz. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code.",
      image: require(`../assets/code-quiz.png`),
      url: "https://edgarmartinez1212.github.io/code-quiz/",
    },
    {
      name: "word day scheduler",
      description: "Web page that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code.",
      image: require(`../assets/workday-scheduler.png`),
      url: "https://edgarmartinez1212.github.io/work-day-scheduler/",
    },
    {
      name: "weather dashboard",
      description: "Web page that allows a user to search for a city and then displays the current and future conditions for that city and that city is added to the search history. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code.",
      image: require(`../assets/weather-dashboard.png`),
      url: "https://edgarmartinez1212.github.io/weather-dashboard/",
    },
    {
      name: "pwa text editor",
      description: "Web page that allows a user to create, save, and edit text files. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code.",
      image: require(`../assets/text-editor.png`),
      url: "https://challenge19-pwatexteditor.herokuapp.com/",
    },
    {
      name: "group project: restaurant finder",
      description: "Group Project Web page that allows a user to search for a restaurant and then displays the current and future conditions for that restaurant and that restaurant is added to the search history. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code and API calls.",
      image: require(`../assets/groupProject-1.png`),
      url: "https://team-takez.github.io/project-one/",
    },
    {
      name: "group project: future finder",
      description: "Group Project Web page that allows a user to search for a job posting and then displays the current and future conditions for that job posting and that job posting is added to the search history. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code and API calls.",
      image: require(`../assets/groupProject-2.png`),
      url: "https://future-finder.herokuapp.com/",
    },
  ];

  const styles = {
    projectCard: {
      // border: "1px solid black",

      margin: "auto",
      "margin-top": "2em",
      display: "flex",
      "flex-direction": "row",
      "justify-content": "space-between",
      "flex-wrap": "wrap",
      width: "70%",
    },
    imageDiv: {
      width: "60%",
      height: "100%",
      // border: "1px solid green",
      "border-radius": "10px",
    },
    projectCardInfoDiv: {
      // border: "1px solid pink",
      width: "40%",
    },
    name: {
      // border: "1px solid blue",

      padding: "0.5em",
      "text-align": "center",
      // "border-bottom": "1px solid white",
    },
    description: {
      // height: "fit-content",
      // width: "50%",
      "background-color": "#444",
      "border-radius": "10px",
      // border: "1px solid white",
      "text-align": "center",
      padding: "1em",
    },
    linkDiv: {
      // border: "1px solid red",
      width: "fit-content",
      margin: "auto",
      display: "flex",
      "flex-direction": "row",
    },
    link: {
      // border: "1px solid white",
      // width: "fit-content",
      "text-decoration": "none",
      color: "black",
      margin: "0.5em",
      "border-radius": "10px",
    },
    test: {
      "border-radius": "10px",
    },
  };

  const createProjectContainer = () => {
    return (
      <div className="portfolio-container">
        <div>
          <ul className="projects-flex">
            {projects.map((project, index) => (
              <li key={index}>
                <img style={styles.test} src={project.image} alt={project.name} className="project-image" onClick={handleClick} id={index} />
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
          <img style={styles.test} src={project.image} alt={project.name} className="project-image" />
        </div>
        <div className="projectCardInfoDiv" style={styles.projectCardInfoDiv}>
          <h3 style={styles.name} className="background-white">
            {project.name}
          </h3>
          <p className="background-white" style={styles.description}>
            {project.description}
          </p>
          <div className="projectCardLinksDiv list-group" style={styles.linkDiv}>
            <a href={project.url} target="_blank" className="list-group-item" style={styles.link}>
              visit site
            </a>
            <a href="" onClick={handleBack} className="list-group-item" style={styles.link}>
              all projects
            </a>
          </div>
        </div>
      </div>
    );
  };

  const handleBack = (event) => {
    event.preventDefault();
    setPortfolioContainer(createProjectContainer());
  };

  const handleClick = (event) => {
    setPortfolioContainer(createProjectCard(event.target.id));
  };

  const [portfolioContainer, setPortfolioContainer] = React.useState(createProjectContainer());
  return portfolioContainer;

  // return (  <div>
  //         <div>
  //           <ul>
  //             {projects.map((project, index) => (
  //               <li key={index}>
  //                 {createProjectCard(index)}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>)

  // return createProjectCard(0);
}

export default Portfolio;
