import { Link } from "react-scroll";
import Sheet from "react-modal-sheet";
import { useEffect, useState } from "react";
import "./styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 1 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${!top && `fixed-top effect`}`}>
        <div className="container header-content">
          <div className="col-md-4 header-logo">
            <a className="logo">Mafuj Ahmed Bishal</a>
          </div>
          <div className="col-md-8 header-items">
            <Link
              className="header-item"
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Home
            </Link>
            <Link
              className="header-item"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              About me
            </Link>
            <Link
              className="header-item"
              activeClass="active"
              to="education_and_experience"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Education and Experience
            </Link>
            <Link
              className="header-item"
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Skills
            </Link>
            <Link
              className="header-item"
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className="header-item"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Contact me
            </Link>
          </div>
          {isOpen ? (
            <FontAwesomeIcon
              icon="fa-solid fa-xmark"
              className="header-icon"
              onClick={() => setOpen(!isOpen)}
            />
          ) : (
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              className="header-icon"
              onClick={() => setOpen(!isOpen)}
            />
          )}
        </div>
      </nav>
      <Sheet
        className={"header-sheet"}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        detent={"full-height"}
        snapPoints={[550, 500, 400, 200, 0]}
      >
        <Sheet.Container>
          <Sheet.Header></Sheet.Header>
          <Sheet.Content>
            <Link
              className="tab-link"
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Home
            </Link>
            <Link
              className="tab-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              About Me
            </Link>
            <Link
              className="tab-link"
              activeClass="active"
              to="education_and_experience"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Education and Experience
            </Link>
            <Link
              className="tab-link"
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Skills
            </Link>
            <Link
              className="tab-link"
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className="tab-link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Contact Me
            </Link>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};
