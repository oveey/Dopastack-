import React, { useEffect } from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRight } from "@fortawesome/free-regular-svg-icons";

export const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      startEvent: "DOMContentLoaded", // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed
    });
  }, []);

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <>
      <section className="footer__section" id="faq">
        <div className="footer">
          <div className="footer__content">
            <div className="footer__logo" data-aos="fade-up">
              <p>Prefer Email ?</p>
              <a href="mailto:dopastack@gmail.com" className="email__link">
                {" "}
                dopastack@gmail.com
                <ArrowIcon className="email__icon" />
              </a>
            </div>

            <div className="footer__logo" data-aos="fade-up">
              <p>Call or message us</p>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995203/PHONE_pjod42.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995204/SEND_vbzis7.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995203/CHATS_obsolp.png"
                  alt=""
                />
              </a>{" "}
            </div>

            <div className="footer__logo" data-aos="fade-up">
              <p>Socials</p>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995205/Twitter_we2ucr.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1722106207/linkden_nm7aty.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995204/INSTAGRAM_owu9c5.png"
                  alt=""
                />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995204/FACEBOOK_howetp.png"
                  alt=""
                />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995205/TIKTOK_suanq1.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="footer__section2" id="home">
        <div className="footer__two">
          <p>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
            >Back to Top</ScrollLink>
          </p>
        </div>
      </div>
    </>
  );
};
