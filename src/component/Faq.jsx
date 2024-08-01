import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "Custom Software Development?",
      answer:
        "We design and develop custom software solutions tailored to your specific business needs. From initial concept to final deployment, our team ensures that your software is scalable, secure, and efficient.",
    },
    {
      question: "Web Development?",
      answer:
        "Our web development services range from building responsive and interactive websites to creating powerful web applications. We use the latest technologies to ensure your online presence is robust, user-friendly, and visually appealing.",
    },
    {
      question: "Mobile App Development?",
      answer:
        "Whether you need a native or cross-platform mobile application, we have the expertise to deliver high-performance mobile solutions. Our apps are designed to provide a seamless user experience and drive engagement.",
    },
    {
      question: "Digital Marketing?",
      answer:
        "Our digital marketing services are designed to increase your online visibility and drive traffic to your website. We offer SEO, SEM, social media marketing, email marketing, and content marketing to help you reach your target audience effectively.",
    },
    {
      question: "AI and Machine Learning?",
      answer:
        "Unlock the potential of artificial intelligence with our AI and machine learning services. We develop intelligent solutions that enhance decision-making, automate processes, and provide deep insights into your data.",
    },
    {
      question: "UI/UX Design?",
      answer:
        "Our design team creates intuitive and aesthetically pleasing user interfaces that enhance user experience. We focus on creating designs that are not only beautiful but also functional and user-centric.",
    },
    {
      question: "IT Consulting?",
      answer:
        "Our IT consulting services help you align your technology strategy with your business goals. We provide expert advice on technology selection, implementation, and optimization to ensure you get the most out of your IT investments."

    },

    {
      question: "Content Writing?",
      answer:
        "Our professional content writers create compelling and engaging content that resonates with your audience. We offer a range of content writing services including blog posts, articles, website content, and marketing copy.",
    },

    {
      question: "Digital Transformation?",
      answer:
        "We assist businesses in their digital transformation journey by integrating advanced technologies and modernizing legacy systems. Our goal is to help you improve operational efficiency and deliver exceptional customer experiences.",
    },
    {
      question: "E-commerce Solution?",
      answer:
        "Build and optimize your online store with our e-commerce solutions. We provide end-to-end services including platform selection, store development, payment gateway integration, and performance optimization.",
    },

    {
      question: "Product Design?",
      answer:
        "Product design services cover the entire product development lifecycle. From concept and prototyping to final design, we create innovative and user-friendly products that meet market needs and exceed customer expectations.",
    },
  ];

  return (
    <div className="faq-section" id="faq">
      <div className="faq" data-aos="fade-up">
        <h1>Our Service Include</h1>
      </div>

      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="question" onClick={() => toggleAnswer(index)}>
            {item.question}
            <FontAwesomeIcon
              icon={activeIndex === index ? faChevronUp : faChevronDown}
            />
          </div>
          {activeIndex === index && <div className="answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
