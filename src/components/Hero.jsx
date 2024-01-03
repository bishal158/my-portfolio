import profile from "../assets/images/profile.png";
import Resume from "../assets/Mafuj Ahmed Bishal.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Hero.css";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div className={"container-fluid hero-container mb-4"} id="hero">
      <div className="row">
        <div className="col-md-7 hero-heading">
          <div className="heading-1 text-focus-in-1">Hello I am,</div>
          <div className="heading-2 text-focus-in-2">Mafuj Ahmed Bishal</div>
          <div className="heading-3">
            A passionate frontend developer from Bangladesh.I am always eager to
            learn new technologies and I am always up for a challenge. I am
            confident that I can quickly learn and adapt to new technologies. I
            am confident and passionate about frontend development and looking
            for a challenging opportunity so that i can learn and build a
            healthy career on web development.
          </div>
          <div className="heading-4">
            <a href={"https://www.facebook.com/mafuj.bishal.9"} target="_blank">
              <FontAwesomeIcon
                icon="fa-brands fa-facebook"
                style={{ color: "#316FF6" }}
              />
            </a>
            <a
              href={"https://www.linkedin.com/in/mafuj-ahmed-bishal/"}
              target="_blank"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                style={{ color: "#0077b5" }}
              />
            </a>
            <a href={"https://www.instagram.com/mafujbishal/"} target="_blank">
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                style={{ color: "#fccc63" }}
              />
            </a>
            {/*https://twitter.com/BishalMafuj*/}
            <a href={"https://twitter.com/BishalMafuj"} target="_blank">
              <FontAwesomeIcon
                icon="fa-brands fa-twitter"
                style={{ color: "#1DA1F2" }}
              />
            </a>
            <a href={"https://github.com/bishal158"} target="_blank">
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                style={{ color: "#4078c0" }}
              />
            </a>
          </div>
          <div className="heading-5">Contact Me:</div>
          <div className="heading-6">
            <p>
              <FontAwesomeIcon icon="fa-solid fa-phone-volume" /> +880
              1798541625
            </p>
            <p>
              <FontAwesomeIcon icon="fa-solid fa-phone-volume" /> +880
              1798541625
            </p>
            <p>
              <FontAwesomeIcon icon="fa-solid fa-envelope" />{" "}
              afnanmafuj22@gmail.com
            </p>
          </div>
          <div className="heading-7">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <button>
                <FontAwesomeIcon icon="fa-solid fa-user" /> About Me
              </button>
            </Link>

            <a
              href={Resume}
              download="Mafuj Ahmed Bishal.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                Download Resume
                <FontAwesomeIcon
                  icon="fa-solid fa-file-arrow-down"
                  className={"mx-1"}
                />
              </button>
            </a>
          </div>
        </div>
        <div className="col-md-5 hero-image">
          <img className={"img-fluid"} src={profile} alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Hero;
