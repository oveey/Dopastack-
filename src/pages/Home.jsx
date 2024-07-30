import React, { useEffect, useState, useRef } from "react";
import { Nav } from "../component/Nav";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { Contact } from "../component/Contact";
import { Footer } from "../component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "../styles/faq.css";
import Faq from "../component/Faq"; // Adjust the path if necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const WhatData = [
    {
      question: "What industries does Dopastack specialize in ?",
      answer:
        "You can get involved by joining our community and participating in events.",
    },
    {
      question:
        "Can Dopastack help with the digital transformation of a traditional business ?",
      answer:
        "You can get involved by joining our community and participating in events.",
    },
    {
      question: "What is the typical timeline for a project ?",
      answer:
        "You can get involved by joining our community and participating in events.",
    },

    {
      question:
        "How does Dopastack support its clients after project completion ?",
      answer:
        "You can get involved by joining our community and participating in events.",
    },

    {
      question: "Why do I need a tech agency ?",
      answer:
        "You can get involved by joining our community and participating in events.",
    },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [datetime, setDatetime] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [document, setDocument] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_rue705e";
    const templateId = "template_f6obubi";
    const publicKey = "3aqOKs-aknVY0-1-8";

    const formData = new FormData();
    formData.append("service_id", serviceId);
    formData.append("template_id", templateId);
    formData.append("user_id", publicKey);
    formData.append("template_params[from_name]", `${firstName} ${lastName}`);
    formData.append("template_params[to_name]", "ovgraphic1@gmail.com");
    formData.append("template_params[phone_number]", phoneNumber);
    formData.append("template_params[address]", address);
    formData.append("template_params[datetime]", datetime);
    formData.append("template_params[consultation_type]", consultationType);
    formData.append("template_params[message]", message);

    if (document) {
      formData.append("template_params[document]", document);
    }

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send-form",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setAddress("");
      setDatetime("");
      setConsultationType("");
      setDocument(null);
      setMessage("");
    } catch (error) {
      console.error(error);
    }

    closePopup();
  };

  const handleFileChange = (e) => {
    setDocument(e.target.files[0]);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (form) {
      const inputs = form.querySelectorAll("input, textarea, select");

      const handleFocus = (event) => {
        setTimeout(() => {
          event.target.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      };

      inputs.forEach((input) => {
        input.addEventListener("focus", handleFocus);
      });

      return () => {
        inputs.forEach((input) => {
          input.removeEventListener("focus", handleFocus);
        });
      };
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      startEvent: "DOMContentLoaded", // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed
    });
  }, []);

  return (
    <>
      <section className="header__section">
        <div className="header__inner__con">
          <Nav />
          <div className="header__text__con" data-aos="fade-up">
            <h1 className="header__text">BRIDGING THE GAP</h1>
            <p>BETWEEN BUSINESS PROBLEMS</p>
            <span className="text">
              AND
              <span className="text--normal"> CREATIVE SOLUTIONS</span>
            </span>

            <div className="hero_image">
              <img
                src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995204/Group_2_lioxvv.png"
                alt=""
              />
            </div>
            <div className="btn-container ">
              <div>
                <div className="btn-border"></div>
                <div className="btn">
                  <p>GET IN TOUCH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recent__section">
        <div className="recent__work">
          <h2>RECENT WORKS </h2>
          <h2>•</h2>
          <h2>RECENT WORKS</h2>
          <h2>•</h2>
          <h2>RECENT WORKS</h2>
          <h2>•</h2>
          <h2>RECENT WORKS</h2>
          <h2>•</h2>
          <h2>RECENT WORKS</h2>
          <h2>•</h2>
          <h2>RECENT WORKS</h2>
          <h2>•</h2>
        </div>

        <div className="work__section ">
          <div className="work__con" data-aos="fade-up">
            <div class="who_under_text">
              <h1>RALCON</h1>
              <div className="under_text">
                <p>Design</p>
                <p>Branding</p>
              </div>
              <div className="under_text">
                <p>Development</p>
                <p>SEO</p>
              </div>
            </div>

            <div className="work__img" data-aos="fade-up">
              <img
                src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995206/Ralcon_wyy0di.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="work__section ">
          <div className="work__con" data-aos="fade-up">
            <div class="who_under_text">
              <h1>DOPASTACK</h1>
              <div className="under_text">
                <p>Design</p>
                <p>Branding</p>
              </div>
            </div>

            <div className="work__img" data-aos="fade-up">
              <img
                src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995205/Dopastack_xtpzjy.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="work__section ">
          <div className="work__con last__b" data-aos="fade-up">
            <div class="who_under_text">
              <h1>YEZY FINANCE</h1>
              <div className="under_text">
                <p>Design</p>
                <p>Branding</p>
              </div>
              <div className="under_text">
                <p>Development</p>
                <p>SEO</p>
              </div>
            </div>

            <div className="work__img" data-aos="fade-up">
              <img
                src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995208/yezy_vysime.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="btn-container2">
          <div className="btn2">
            <p>EXPLORE MORE RECENT PROJECTS</p>
          </div>
        </div>
      </section>

      <section className="offer__section">
        <div className="offer__inner__con">
          <div className="offer__header">
            <div
              className="offer__title"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h1>Who We Are:</h1>
            </div>

            <div className="offer__con" data-aos="fade-up">
              <span className="p">
                Dopastack
                <span className="P__two">
                  {" "}
                  is an innovative tech solutions company dedicated to
                  connecting tech professionals with clients in need of
                  specialized services. Our mission is to bridge the gap between
                  clients with tech challenges and professionals capable of
                  solving them, ensuring seamless and efficient service
                  delivery.
                </span>
              </span>
            </div>
          </div>

          <div className="offer__header last__border">
            <div
              className="offer__title"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h1>What We Offer:</h1>
            </div>

            <div className="offer__con" data-aos="fade-up">
              <h2>Expert Tech Solutions:</h2>
              <span className="p__one">
                Tailored Services
                <span className="P__two">
                  {" "}
                  Dopastack employs the right professionals for each job,
                  ensuring that clients receive precise and effective solutions
                  for their tech problems.
                </span>
              </span>

              <span className="p__one">
                Comprehensive Maintenance:
                <span className="P__two">
                  {" "}
                  We offer ongoing maintenance services to keep your systems
                  running smoothly and efficiently.
                </span>
              </span>

              <span className="p__one">
                Talent Matching:
                <span className="P__two">
                  {" "}
                  Whether you need a temporary consultant or a full-time
                  employee, Dopastack provides suitable candidates to fill your
                  job openings, saving you time and resources in the hiring
                  process.
                </span>
              </span>
            </div>
          </div>

          <div className="offer__header last__border">
            <div
              className="offer__title"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              {/* <h1>What We Offer:</h1> */}
            </div>

            <div className="offer__con last__border" data-aos="fade-up">
              <h2>Enhanced Efficacy</h2>
              <span className="p__one">
                Tailored Services:
                <span className="P__two">
                  {" "}
                  Dopastack employs the right professionals for each job,
                  ensuring that clients receive precise and effective solutions
                  for their tech problems.
                </span>
              </span>

              <span className="p__one">
                Comprehensive Maintenance:
                <span className="P__two">
                  {" "}
                  We offer ongoing maintenance services to keep your systems
                  running smoothly and efficiently.
                </span>
              </span>

              <span className="p__one">
                Talent Matching:
                <span className="P__two">
                  {" "}
                  Whether you need a temporary consultant or a full-time
                  employee, Dopastack provides suitable candidates to fill your
                  job openings, saving you time and resources in the hiring
                  process.
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="getintouch">
        <div className="getintouch-container">
          <div className="get-in-touch-item">
            <span>WHAT WE DO</span>

            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1722106312/HLKH3519_ds9rrh.png"
              alt=""
            />
          </div>
          <div className="get-in-touch-item">
            <span>WHAT WE DO</span>

            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1722106325/FURB6117_fzadf2.png"
              alt=""
            />
          </div>
          <div className="get-in-touch-item">
            <span>WHAT WE DO</span>

            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1722106312/HLKH3519_ds9rrh.png"
              alt=""
            />
          </div>
          <div className="get-in-touch-item">
            <span>WHAT WE DO</span>

            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1722106325/FURB6117_fzadf2.png"
              alt=""
            />
          </div>
          <div className="get-in-touch-item">
            <span>WHAT WE DO</span>

            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1722106312/HLKH3519_ds9rrh.png"
              alt=""
            />
          </div>
          <div className="get-in-touch-item">
            <span>WHAT WE DO</span>

            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1722106312/HLKH3519_ds9rrh.png"
              alt=""
            />
          </div>
          <div className="get-in-touch-item">
            <span>WHAT WE DO</span>

            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1722106312/HLKH3519_ds9rrh.png"
              alt=""
            />
          </div>
          <div className="get-in-touch-item">
            <span>WHAT WE DO</span>

            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1722106312/HLKH3519_ds9rrh.png"
              alt=""
            />
          </div>
          <div className="get-in-touch-item">
            <span>WHAT WE DO</span>

            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1722106312/HLKH3519_ds9rrh.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <Faq />

      <section className="offer__section">
        <div className="offer__inner__con">
          <div className="what__header">
            <div
              className="offer__title"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h1>What You should Know:</h1>
            </div>
            <div className="what-items">
              {WhatData.map((item, index) => (
                <div className="what-item" key={index}>
                  <div
                    className="questions"
                    data-aos="fade-up"
                    onClick={() => toggleAnswer(index)}
                  >
                    {item.question}
                    <FontAwesomeIcon
                      icon={activeIndex === index ? faChevronUp : faChevronDown}
                    />
                  </div>
                  {activeIndex === index && (
                    <div className="answers">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="offer__header">
            <div
              className="offer__title"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h1>Why Invest in us?</h1>
            </div>

            <div className="offer__con" data-aos="fade-up">
              <div className="n__one">
                <span className="number">01</span>
                <h3>
                  Market Demand. The demand for tech solutions is ever-growing,
                  and Dopastack is well-positioned to meet this need by
                  connecting clients with skilled professionals.
                </h3>
              </div>

              <div className="n__one">
                <span className="number">02</span>
                <h3>
                Proven Expertise. With a team of experienced tech
                  professionals and a robust client network, Dopastack is
                  equipped to deliver high-quality, reliable tech solutions.
                </h3>
              </div>

              <div className="n__one">
                <span className="number">03</span>
                <h3>
                  Proven Expertise. With a team of experienced tech
                  professionals and a robust client network, Dopastack is
                  equipped to deliver high-quality, reliable tech solutions.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="summary__section">
        <div className="summary__text">
          <p>
            <Typewriter
              words={[
                "Dopastack is not just a service provider; it’s a bridge that connects the tech world, facilitating seamless interactions between clients and professionals. By investing in Dopastack, you are supporting a company that is dedicated to innovation, efficiency, and excellence in the tech industry. Join us in transforming the way tech solutions are delivered and experienced.",
              ]}
              loop={20}
              cursor
              cursorStyle="_"
              typeSpeed={20}
              deleteSpeed={10}
              delaySpeed={1000}
            />
          </p>
        </div>
      </section>
      <section className="getintouch">
        <div className="getintouch-container">
          <div className="get-in-touch-item">
            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995203/Chat_khnffb.png"
              alt=""
            />
            <span>GET IN TOUCH</span>
          </div>
          <div className="get-in-touch-item">
            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995203/Call_djx3ly.png"
              alt=""
            />
            <span>GET IN TOUCH</span>
          </div>
          <div className="get-in-touch-item">
            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995203/Chat_khnffb.png"
              alt=""
            />
            <span>GET IN TOUCH</span>
          </div>
          <div className="get-in-touch-item">
            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995203/Call_djx3ly.png"
              alt=""
            />
            <span>GET IN TOUCH</span>
          </div>
          <div className="get-in-touch-item">
            <img
              src="https://res.cloudinary.com/dwrkgmmsz/image/upload/v1721995203/Chat_khnffb.png"
              alt=""
            />
            <span>GET IN TOUCH</span>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};
