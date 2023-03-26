import React from "react";
// import { Toast } from "bootstrap";
import "../styles/contact.css";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./Content";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const fullName = event.target[0].value.split(" ");

    // toast.style = {color: "black"};
    toast.success(`Thank you for your message, ${fullName[0]}!`, {
      position: "bottom-center",
      autoClose: 7000,
      closeOnClick: true,
      theme: "dark",
    });
  };

  const styles = {
    contactContainer: {
      width: "30em",
      margin: "auto",
      "margin-top": "2em",
      // color: #C4CED4;
    },
    formItem: {
      "margin-top": "1em",
    },
    buttonDiv: {
      width: "fit-content",
      margin: "auto",
    },
    button: {
      margin: "1em",
      width: "5em",
      "background-color": "#444",
      "text-align": "center",
    },
  };

  return (
    <div className="contact-container" style={styles.contactContainer}>
      {/* <p className="contact-title">contact me</p> */}
      <form onSubmit={handleSubmit} className="">
        <div className="form-item" style={styles.formItem}>
          <input type="text" name="name" className="form-control name-input" placeholder="name" required />
        </div>
        <div className="form-item" style={styles.formItem}>
          <input type="email" name="email" className="form-control email-input" placeholder="email" required />
        </div>
        <div className="form-item"  style={styles.formItem}>
          <textarea rows="5" name="message" className="form-control text-message message-input" placeholder="write your message" required />
        </div>
        <div className="btn-div" style={styles.buttonDiv}>
          {/* btn btn-primary m-3 */}
          <input type="submit" value="submit" className="" style={styles.button} />
          <input type="reset" value="reset" className="" style={styles.button} />
        </div>
      </form>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Contact;
