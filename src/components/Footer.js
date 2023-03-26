import React from "react";

function Footer() {
  const styles = {
    footer: {
      margin: "auto",
      "margin-top": "1.5em",
      width: "60em",
    },
    list: {
      "list-style": "none",
      "text-align": "center",
      display: "flex",
      "flex-direction": "row",
    },
    listItem: {
      color: "gray",
      margin: "auto",
    },
    link: {
      "text-decoration": "none",
      color: "dark-gray",
    },
    image: {
      height: "50px",
      width: "50px",
      opacity: "0.7",
    },
  };

  const footerLinks = [
    {
      name: "github",
      url: "https://github.com/edgarmartinez1212",
      image: require(`../assets/github.png`),
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/edgarmartinez9319/",
      image: require(`../assets/linkedin.png`),
    },
    {
      name: "email",
      url: "mailto:edgar.martinez9319@gmail.com",
      image: require(`../assets/email.png`),
    },
  ];

  return (
    <div style={styles.footer}>
      <ul style={styles.list} className="footer-ul">
        {footerLinks.map((link, index) => (
          <li style={styles.listItem}>
            <a href={link.url} target="_blank" style={styles.link}>
              <img src={link.image} style={styles.image}></img>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
