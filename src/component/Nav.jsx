import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom"; 
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; 
import "../styles/nav.css";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth > 900) {
        setIsOpen(false); // Close menu if resizing above 900px
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }
  }, [isOpen]);

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div className="home__nav" data-aos="fade-down">
        <RouterLink to="/">
          <img
            src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995203/Dopastack_logo_jw4qjy.png"
            alt=""
          />
        </RouterLink>

        <ul className={`${isOpen ? "open" : ""}`}>
          <li>
            <ScrollLink
              to="about-us"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="nav_link"
            >
              ABOUT US
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="nav_link"
            >
              PROJECTS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="service"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="nav_link"
            >
              SERVICES
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="faq"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="nav_link"
            >
              FAQ
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="nav_link"
            >
              CONTACT US
            </ScrollLink>
          </li>

          <div className="dropdown">
            <span className="colors"></span>
          </div>
        </ul>

        <button
          className={`${isOpen ? "menu open" : "menu"}`}
          onClick={toggleMenu}
        >
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
        </button>
      </div>
    </>
  );
};
