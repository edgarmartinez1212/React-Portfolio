import React from "react";
import "../styles/contact.css";

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("submitted");
};

function Contact() {
  return (
    <div className="contact-container">
      <p className="contact-title">contact</p>
      <form onSubmit={handleSubmit} className="">
        <div className="">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" name="name" className="form-control" required/>
        </div>
        <div className="">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="email" name="email" className="form-control" required/>
        </div>
        <div className="">
          <label htmlFor="message" className="form-label">
            message
          </label>
          <textarea rows="5" name="message" className="form-control text-message" required/>
        </div>
        <input type="submit" value="submit" className="btn btn-primary m-3" />
        <input type="reset" value="reset" className="btn btn-primary m-3" />
      </form>
    </div>
  );
}

export default Contact;
