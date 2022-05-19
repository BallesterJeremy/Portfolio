import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_44iu8vy",
      "template_02kgbur",
      form.current,
      "Ue-dyrJSN8Qqjbi_8"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ballesterbernatjeremy@gmail.com</h5>
            <a href="mailto:ballesterbernatjeremy@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Ballester Bernat Jeremy</h5>
            <a
              href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-ballester-bernat-392a73123/"
              target="_blank"
            >
              My profil
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp/send?phone=123456789" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="text" name="mail" placeholder="Your mail" required />
          <textarea
            name="message"
            placeholder="Your message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
