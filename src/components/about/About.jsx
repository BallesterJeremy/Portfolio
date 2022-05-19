import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FiAward } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { FiFolder } from "react-icons/fi";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>WildCodeSchool : 5 months course</small>
            </article>
            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5>Clients</h5>
              <small>WildCodeSchool Clients</small>
              <small> & Relatives</small>
            </article>
            <article className="about__card">
              <FiFolder className="about__icon" />
              <h5>Projects</h5>
              <small>5+</small>
            </article>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            asperiores sapiente quisquam iusto aperiam fuga dolorem tempora
            exercitationem impedit fugit magni fugiat illo quod dolores eligendi
            adipisci, nihil sint facilis?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
