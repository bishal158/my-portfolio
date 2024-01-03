import "./styles/Projects.css";
import food_monkeys from "../assets/images/food monkey.jpg";
import mentor_mind from "../assets/images/mentor mind.jpg";
import web_talk from "../assets/images/web talk.jpg";
export const Projects = () => {
  return (
    <div className={"container-fluid project_container"} id={"project"}>
      <h1>My Projects</h1>
      <div className={"container"}>
        <div className={"project_card"}>
          <img src={mentor_mind} alt={".."} />
          <h4>Mentor Mind</h4>
          <p>
            This project is my university final project. Here i contribute as a
            Frontend Developer. This project is focus on university mentor-ships
            programme to bring mentor and mentees in one platform and make
            bridge between them. Technologies used in this project are Angular
            and ASP.NET CORE web api.
          </p>
          <div className={"project_links"}>
            <a href="https://github.com/bishal158/MentorMind" target="_blank">
              Github Repo
            </a>
            <a
              href="https://65706e9a923b3d0008f25414--shimmering-cucurucho-21c6fe.netlify.app/"
              target="_blank"
            >
              Live
            </a>
          </div>
        </div>
        <div className={"project_card"}>
          <img src={food_monkeys} alt={".."} />
          <h4>Food Monkey</h4>
          <p>
            A Full-Stack online food ordering application built with MERN
            Stack..It built for specific restaurant.It allows users to create
            their own accounts, order food, see food details, rate a food, add
            food to cart cancel a order etc. Provide services like Dine in,
            Pick-up, Home Delivery etc.
          </p>
          <div className={"project_links"}>
            <a href="https://github.com/bishal158/Food-Monkey" target="_blank">
              Github Repo
            </a>
            <a
              href="https://658cf4ef5e284f0008b14b08--eclectic-hummingbird-5430ab.netlify.app/"
              target="_blank"
            >
              Live
            </a>
          </div>
        </div>
        <div className={"project_card"}>
          <img src={web_talk} alt={".."} />
          <h4>Web Talk</h4>
          <p>
            A Full-Stack Blogging Application Built with MERN Stack.This is a
            fully functional blogging website built using the MERN Stack. It
            allows users to create their own accounts, write and edit blogs, and
            read blogs written by other users. The website is designed to be
            user-friendly and easy to navigate.
          </p>
          <div className={"project_links"}>
            <a href="https://github.com/bishal158/WebTalk" target="_blank">
              Github Repo
            </a>
            <a href="#" target="_blank">
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
