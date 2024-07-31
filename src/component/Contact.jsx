import React, { useState } from "react";
import { Nav } from "./Nav";
import "../styles/contact.css";
import { Footer } from "./Footer";
import axios from "axios";

export const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

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
        to_name: "ovgraphic1@gmail.com",
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
      setLastName("");
      setEmail("");
      setAddress("");
      setPhoneNumber("");
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
                <div className="input__con" >
                  <div className="name__form">
                    <label htmlFor="fname">Name</label> <br />
                    <input
                      type="text"
                      id="fname"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="num">Service</label> <br />
                    <input
                      type="text"
                      id="num"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="num">Project Info</label> <br />
                    <input
                      type="text"
                      id="num"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="num">Email</label> <br />
                    <input
                      type="text"
                      id="num"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="num">Budget</label> <br />
                    <input
                      type="text"
                      id="num"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit" className="form__btn">
                  <p>Send Message</p>
            
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
