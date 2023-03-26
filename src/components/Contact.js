import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const fullName = event.target[0].value.split(" ");

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
