import React, { useState } from "react";
import { Nav } from "./Nav";
import "../styles/contact.css";
import { Footer } from "./Footer";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


export const Contact = ({activeIndex, index }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [projectInfo, setProjectInfo] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState(""); // Add this line

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_rue705e";
    const templateId = "template_f6obubi";
    const publicKey = "3aqOKs-aknVY0-1-8";

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "ovgraphic1@gmail.com", // Recipient email
        message: message,
      },
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setService("");
      setProjectInfo("");
      setEmail("");
      setBudget("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="contact__section">
          <div className="contact__header" data-aos="fade-up">
            <h1>Ping us a message</h1>
          </div>

          <div className="form__container">
            <div className="form__main" data-aos="fade-up">
              <form onSubmit={handleSubmit}>
                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="name">Name</label> <br />
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="service">Service</label> <br />
                    <div className="input__wrapper">
                      <input
                        type="text"
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                      />
                      <FontAwesomeIcon
                        icon={
                          activeIndex === index ?faChevronDown  : faChevronUp
                        }
                        className="icon"
                      />
                    </div>
                  </div>
                </div>

                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="projectInfo">Project Info</label> <br />
                    <input
                      type="text"
                      id="projectInfo"
                      value={projectInfo}
                      onChange={(e) => setProjectInfo(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="email">Email</label> <br />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="budget">Budget</label> <br />
                    <input
                      type="text"
                      id="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit" className="form__btn">
                  <p>Send</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
