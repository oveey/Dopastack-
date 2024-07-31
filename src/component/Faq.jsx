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
      question: "Business Branding?",
      answer:
        "You can get involved by joining our community and participating in events.",
    },
    {
      question: "Web Development?",
      answer:
        "You can get involved by joining our community and participating in events.",
    },
    {
      question: "Mobile App Development?",
      answer:
        "You can get involved by joining our community and participating in events.",
    },
    {
      question: "AI and Machine Learning?",
      answer:
        "You can get involved by joining our community and participating in events.",
    },
    {
      question: "UI/UX Design?",
      answer:
        "You can get involved by joining our community and participating in events.",
    },

    {
      question: "Digital Marketing?",
      answer:
        "You can get involved by joining our community and participating in events.",
    },

    {
      question: "Digital Transformation?",
      answer:
        "You can get involved by joining our community and participating in events.",
    },
    {
        question: "E-commerce Solution?",
        answer:
          "You can get involved by joining our community and participating in events.",
      },

      {
        question: "Product Design?",
        answer:
          "You can get involved by joining our community and participating in events.",
      },
    // Add more FAQ data as needed
  ];

  return (
    <div className="faq-section" id="faq">
      <div className="faq"data-aos="fade-up">
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
