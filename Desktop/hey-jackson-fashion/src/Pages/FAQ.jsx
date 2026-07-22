import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/FAQ.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are typically processed within 1–3 business days. Delivery usually takes an additional 3–5 business days depending on your location.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes! Orders over $50 qualify for free standard shipping within the United States.",
  },
  {
    question: "Can I return my order?",
    answer:
      "Absolutely. Eligible items may be returned within 30 days of delivery if they are unused and in their original condition.",
  },
  {
    question: "How do I know which size to order?",
    answer:
      "Each product includes a detailed sizing guide. We recommend measuring your pet before placing your order to ensure the perfect fit.",
  },
  {
    question: "Where are your products shipped from?",
    answer:
      "Our products are fulfilled through trusted U.S. shipping partners to ensure reliable and timely delivery.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Visit our Contact page anytime. We typically respond within one business day.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const cardRefs = useRef([]);

  function toggleFAQ(index) {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  }

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="faq-page">
        <div className="faq-hero">
          <p className="faq-subtitle">
            CUSTOMER SUPPORT
          </p>

          <h1>Frequently Asked Questions</h1>

          <p className="faq-description">
            Everything you need to know about ordering from
            Hey Jackson! Fashion.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-card ${
                  isOpen ? "active" : ""
                }`}
                key={faq.question}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
              >
                <button
                  className="faq-question"
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>

                  <FaChevronDown
                    className={`faq-icon ${
                      isOpen ? "rotate" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`faq-answer ${
                    isOpen ? "show" : ""
                  }`}
                >
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <section className="faq-contact-card">
          <p className="faq-contact-eyebrow">
            PERSONALIZED SUPPORT
            </p>

            <h2>We're Here to Help</h2>

            <p>
            Whether you need sizing advice, shipping updates,
            help with an order, or recommendations for your
            pup, our team is ready to assist you every step
            of the way.
          </p>

          <Link
            to="/contact#contact-form"
            className="faq-contact-button"
          >
            Contact Our Team
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FAQ;