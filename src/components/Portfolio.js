import React from "react";

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
      name: "work day scheduler",
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
    portfolioContainer: {
      width: "60em",
      margin: "auto",
      marginTop: "2em",
    },
    portfolioList: {
      listStyle: "none",
      margin: "auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    portfolioListItem: {
      height: "200px",
      width: "350px",
      margin: "0.5em",
    },
    portfolioImage: {
      height: "100%",
      width: "100%",
    },
    projectCard: {
      margin: "auto",
      marginTop: "2em",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
      width: "55em",
    },
    imageDiv: {
      width: "60%",
      height: "100%",
    },
    projectCardInfoDiv: {
      width: "20em",
    },
    name: {
      paddingBottom: "0.2em",
      margin: "auto",
      marginBottom: "1em",
      width: "fit-content",
      textAlign: "center",
      borderBottom: "1px solid white",
    },
    description: {
      backgroundColor: "#444",
      textAlign: "center",
      margin: "auto",
      padding: "1em",
      width: "20em",
    },
    linkDiv: {
      width: "fit-content",
      margin: "auto",
      display: "flex",
      flexDirection: "row",
    },
    link: {
      textAlign: "center",
      textDecoration: "none",
      color: "white",
      margin: "0.5em",
      marginLeft: "1em",
      marginRight: "1em",
      width: "6em",
    },
  };

  const createProjectContainer = () => {
    return (
      <div className="" style={styles.portfolioContainer}>
        <ul className="" style={styles.portfolioList}>
          {projects.map((project, index) => (
            <li key={index} style={styles.portfolioListItem}>
              <img style={styles.portfolioImage} src={project.image} alt={project.name} className="project-image" onClick={handleClick} id={index} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const createProjectCard = (id) => {
    const project = projects[id];

    return (
      <div className="" style={styles.projectCard}>
        <div className="" style={styles.imageDiv}>
          <img style={styles.portfolioImage} src={project.image} alt={project.name} className="" />
        </div>
        <div className="" style={styles.projectCardInfoDiv}>
          <h3 style={styles.name} className="">
            {project.name}
          </h3>
          <p className="" style={styles.description}>
            {project.description}
          </p>
          <div className="" style={styles.linkDiv}>
            <a href={project.url} target="_blank" className="projectLink" style={styles.link}>
              visit site
            </a>
            <a href="" onClick={handleBack} className="projectLink" style={styles.link}>
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
}

export default Portfolio;
