import "./styles/EducationAndExperience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const EducationAndExperience = () => {
  return (
    <div
      className="container mt-lg-5 education_and_experience_container "
      id={"education_and_experience"}
    >
      <h1 className={"education_and_experience_container_header"}>
        Education &#38; Experience
      </h1>
      <main className="row">
        <section className="col">
          <header className="title">
            <h2>
              <FontAwesomeIcon
                icon="fa-solid fa-school"
                className={"mx-3 fa-sm"}
              />
              Education
            </h2>
          </header>
          <div className="contents">
            <div className="box">
              <h3>BSC in CSE</h3>
              <h4>Green University of Bangladesh,Dhaka</h4>
              <div className={"details"}>
                <p>
                  <time>2020 - 2024</time>
                </p>
                <p>CGPA:3.22 out of 4.00</p>
              </div>
              <h5>
                Green University of Bangladesh (GUB), one of the leading private
                universities in Bangladesh, was founded in 2003 under the
                Private University Act 1992 with a vision to create a global
                higher education center of excellence.
              </h5>
            </div>
            <div className="box">
              <h3>Higher Secondary School Certificate</h3>
              <h4>Royal Media College,Mymensingh</h4>
              <div className={"details"}>
                <p>
                  <time>2017 - 2019</time>
                </p>
                <p>GPA:4.00 out of 5.00</p>
              </div>
              <h5>
                Royal Media College is an intermediate college in Mymensingh,
                Bangladesh.It is situated at 18 Gangadas Guha Road, Mymensingh,
                between the Male and Female Teachers' Training Colleges.
              </h5>
            </div>
            <div className="box">
              <h3>Secondary School Certificate</h3>
              <h4>Mukul Niketon High School,Mymensingh</h4>
              <div className={"details"}>
                <p>
                  <time>2015 - 2017</time>
                </p>
                <p>GPA:4.95 out of 5.00</p>
              </div>
              <h5>
                Mukul Niketon High School is a private school in Mymensingh
                District, Bangladesh.The school is located at 10, Moharaza Road
                which is few minutes walk from Mymensingh Rail Station.
              </h5>
            </div>
          </div>
        </section>
        <section className="col">
          <header className="title">
            <h2>
              <FontAwesomeIcon
                icon="fa-solid fa-briefcase"
                className={"mx-3 fa-sm"}
              />
              Experience
            </h2>
          </header>

          <div className="contents">
            <div className="box">
              <h3>Intern At</h3>
              <h4>Nexttech Ltd,Dhaka</h4>
              <div>
                <p>
                  <time>11/2023 - 01/2024</time>
                </p>
                <p>Frontend Developer</p>
              </div>
              <h5>
                NextTech Limited is a Software Development Company & Training
                Institute for Hardware,Software,Web Development,Networking,
                Graphics Design,Microcontroller,Robotics,PLC,and Outsourcing
                Company in Bangladesh.It has been operative independently since
                2012.
              </h5>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
