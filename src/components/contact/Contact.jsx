import React from 'react';
import './contact.css';
import contact from '../../assets/images/contact-img.svg';
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>c</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
      </h1>

      <div className="row">
        <div className="image">
          <img src={contact} alt="" />
        </div>

        <form action="">
          <div className="inputBox">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>
          <div className="inputBox">
            <input type="number" placeholder="number" />
            <input type="text" placeholder="subject" />
          </div>
          <textarea
            placeholder="message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" className="btn" value="send message" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
