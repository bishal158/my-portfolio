import "./styles/Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Skills = () => {
  return (
    <div className={"container skills_container"} id={"skill"}>
      <h1>My Skills</h1>
      <div className={"row"}>
        <div className={"col-md-6"}>
          <div className={"skill"}>
            <div className={"name_and_percentage"}>
              <p>
                <FontAwesomeIcon
                  icon="fa-brands fa-html5"
                  style={{ color: "#FF5225" }}
                />{" "}
                HTML5
              </p>
              <p>90%</p>
            </div>
            <div className={"progress"}>
              <div className={"html_bar"}></div>
            </div>
          </div>
          <div className={"skill"}>
            <div className={"name_and_percentage"}>
              <p>
                <FontAwesomeIcon
                  icon="fa-brands fa-php"
                  style={{ color: "#556096" }}
                />{" "}
                PHP
              </p>
              <p>60%</p>
            </div>
            <div className={"progress"}>
              <div className={"php_bar"}></div>
            </div>
          </div>
          <div className={"skill"}>
            <div className={"name_and_percentage"}>
              <p>
                <FontAwesomeIcon
                  icon="fa-brands fa-js"
                  style={{ color: "#F3DD55" }}
                />{" "}
                JAVASCRIPT
              </p>
              <p>75%</p>
            </div>
            <div className={"progress"}>
              <div className={"js_bar"}></div>
            </div>
          </div>
          <div className={"skill"}>
            <div className={"name_and_percentage"}>
              <p>
                <FontAwesomeIcon
                  icon="fa-brands fa-react"
                  style={{ color: "#66DBFB" }}
                />{" "}
                REACT
              </p>
              <p>50%</p>
            </div>
            <div className={"progress"}>
              <div className={"react_bar"}></div>
            </div>
          </div>
          <div className={"skill"}>
            <div className={"name_and_percentage"}>
              <p>
                <FontAwesomeIcon
                  icon="fa-brands fa-figma"
                  style={{ color: "#F35424" }}
                />{" "}
                FIGMA
              </p>
              <p>70%</p>
            </div>
            <div className={"progress"}>
              <div className={"figma_bar"}></div>
            </div>
          </div>
          <div className={"skill"}>
            <div className={"name_and_percentage"}>
              <p>
                <FontAwesomeIcon
                  icon="fas fa-database"
                  style={{ color: "#08EE69" }}
                />{" "}
                MongoDB
              </p>
              <p>30%</p>
            </div>
            <div className={"progress"}>
              <div className={"mongodb_bar"}></div>
            </div>
          </div>
        </div>
        <div className={"col-md-6"}>
          <div className={"skill"}>
            <div className={"name_and_percentage"}>
              <p>
                <FontAwesomeIcon
                  icon="fa-brands fa-css3"
                  style={{ color: "#0974BC" }}
                />{" "}
                CSS3
              </p>
              <p>90%</p>
            </div>
            <div className={"progress"}>
              <div className={"css_bar"}></div>
            </div>
          </div>
          <div className={"skill"}>
            <div className={"name_and_percentage"}>
              <p>
                <FontAwesomeIcon
                  icon="fa-brands fa-bootstrap"
                  style={{ color: "#8210F5" }}
                />{" "}
                BOOTSTRAP
              </p>
              <p>90%</p>
            </div>
            <div className={"progress"}>
              <div className={"bootstrap_bar"}></div>
            </div>
          </div>
          <div className={"skill"}>
            <div className={"name_and_percentage"}>
              <p>
                <FontAwesomeIcon
                  icon="fa-brands fa-angular"
                  style={{ color: "#D6032E" }}
                />{" "}
                ANGULAR
              </p>
              <p>50%</p>
            </div>
            <div className={"progress"}>
              <div className={"angular_bar"}></div>
            </div>
          </div>
          <div className={"skill"}>
            <div className={"name_and_percentage"}>
              <p>
                <FontAwesomeIcon
                  icon="fa-brands fa-node"
                  style={{ color: "#75AB66" }}
                />{" "}
                NODE JS
              </p>
              <p>30%</p>
            </div>
            <div className={"progress"}>
              <div className={"node_bar"}></div>
            </div>
          </div>
          <div className={"skill"}>
            <div className={"name_and_percentage"}>
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-database"
                  style={{ color: "#086690" }}
                />{" "}
                MySQL
              </p>
              <p>50%</p>
            </div>
            <div className={"progress"}>
              <div className={"mysql_bar"}></div>
            </div>
          </div>
          <div className={"skill"}>
            <div className={"name_and_percentage"}>
              <p>
                <FontAwesomeIcon
                  icon="fa-brands fa-github"
                  style={{ color: "#283344" }}
                />{" "}
                Git &amp; Github
              </p>
              <p>50%</p>
            </div>
            <div className={"progress"}>
              <div className={"github_bar"}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
