import React from "react";
import "./experience.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experiences</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developpement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Developpement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
