import React from "react";
// import { Toast } from "bootstrap";
import "../styles/contact.css";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const fullName = event.target[0].value.split(" ");

    toast.success(`Thank you for your message, ${fullName[0]}!`, {
      position: "bottom-center",
      autoClose: false,
      closeOnClick: true,
    //   theme: "dark",
    });
  };

  return (
    <div className="contact-container">
      {/* <p className="contact-title">contact me</p> */}
      <form onSubmit={handleSubmit} className="">
        <div className="form-item">
          <input type="text" name="name" className="form-control name-input" placeholder="name" required />
        </div>
        <div className="form-item">
          <input type="email" name="email" className="form-control email-input" placeholder="email" required />
        </div>
        <div className="form-item">
          <textarea rows="5" name="message" className="form-control text-message message-input" placeholder="write your message" required />
        </div>
        <div className="btn-div">
          <input type="submit" value="submit" className="btn btn-primary m-3" />
          <input type="reset" value="reset" className="btn btn-primary m-3" />
        </div>
      </form>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Contact;
