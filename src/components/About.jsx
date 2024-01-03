import React from "react";
import profile from "../assets/images/839-removebg-preview.png";

import "./styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../assets/Mafuj Ahmed Bishal.pdf";
import { Link } from "react-scroll";
export const About = () => {
  return (
    <div className={"container-fluid mt-3"}>
      <div className={"container about-container"} id="about">
        <h1>About Me</h1>
        <div className={"about"}>
          <ul>
            <li>
              I am a passionate and driven Computer Science graduate from Green
              University of Bangladesh, eager to launch my career as a
              full-stack web developer. My academic journey has equipped me with
              a strong foundation in software development principles,
              programming languages including (C, PHP, JavaScript, HTML5, CSS3
              ), and web development technologies (React, Angular, Bootstrap).
            </li>
            <li>
              I am a highly motivated learner with a strong desire to
              continuously improve my knowledge and skills. I am equally adept
              at working independently and collaborating in a team environment.
              I am a quick learner and can adapt to new technologies quickly.
            </li>
            <li>
              I am currently seeking a full-time internship opportunity to gain
              practical experience in a professional setting. I am confident
              that my skills and enthusiasm will be an asset to your team. I am
              eager to learn from experienced professionals and contribute
              meaningfully to your projects.
            </li>
          </ul>
        </div>
        <div className="links">
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={150}
            duration={500}
          >
            <button>Projects</button>
          </Link>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={150}
            duration={500}
          >
            <button>Skills</button>
          </Link>
          <a
            href={Resume}
            download="Mafuj Ahmed Bishal.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              Download Resume{" "}
              <FontAwesomeIcon icon="fa-solid fa-file-arrow-down" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
