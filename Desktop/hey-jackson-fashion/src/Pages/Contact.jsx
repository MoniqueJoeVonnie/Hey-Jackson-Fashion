import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Contact.css";
import {
  FaEnvelope,
  FaClock,
  FaBusinessTime,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import {
  useForm,
  ValidationError,
} from "@formspree/react";
import { FaCheckCircle } from "react-icons/fa";




function Contact() {

    const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [state, handleFormspreeSubmit] = useForm("mjgnyneg");

const successRef = useRef(null);

function handleChange(event) {
  const { name, value } = event.target;

  setFormData((currentData) => ({
    ...currentData,
    [name]: value,
  }));
}

useEffect(() => {
  if (state.succeeded) {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    window.setTimeout(() => {
      successRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 150);
  }
}, [state.succeeded]);

function handleSubmit(event) {
  handleFormspreeSubmit(event);
}

  return (
    <div className="contact-page">
      <Navbar />

      <main className="contact-main">
        <section className="contact-hero">
          <p className="contact-eyebrow">We’d Love to Hear From You</p>

          <h1>Contact Hey Jackson! Fashion</h1>

          <p className="contact-intro">
            Questions about an order, product sizing, shipping, or styling?
            Send us a message and our team will be happy to assist you.
          </p>
        </section>

        <section className="contact-layout">
          <div className="contact-info-card">
            <h2>Customer Care</h2>

            <p>
              We’re here to help make every shopping experience feel
              effortless, personal, and luxurious.
            </p>

            <div className="contact-detail">
                <FaEnvelope className="contact-icon" />

                <div>
                    <h3>Email</h3>
                    <p>support@heyjacksonfashion.com</p>
                </div>
                </div>

                <div className="contact-detail">
                <FaClock className="contact-icon" />

                <div>
                    <h3>Response Time</h3>
                    <p>Within 1–2 business days</p>
                </div>
                </div>

                <div className="contact-detail">
                <FaBusinessTime className="contact-icon" />

                <div>
                    <h3>Business Hours</h3>
                    <p>Monday–Friday, 9:00 AM–5:00 PM</p>
                </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <p>Send a Message</p>
              <h2>How Can We Help?</h2>
            </div>

            <div className="contact-field-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Name</label>
                <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email</label>
                <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleChange}
                required
                />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="7"
                placeholder="Tell us how we can assist you..."
                value={formData.message}
                onChange={handleChange}
                required
                />
            </div>

            {state.succeeded && (
            <div
                ref={successRef}
                className="contact-success"
                role="status"
                tabIndex="-1"
            >
                <FaCheckCircle className="contact-success-icon" />

                <h3>Message Sent!</h3>

                <p>
                Thank you for contacting <strong>Hey Jackson! Fashion</strong>.
                </p>

                <p>
                We've received your message and will respond within
                <strong> 1–2 business days.</strong>
                </p>

                <button
                type="button"
                className="contact-submit contact-another-btn"
                onClick={() => window.location.reload()}
                >
                Send Another Message
                </button>
            </div>
            )}

            {state.errors && state.errors.length > 0 && (
            <div className="contact-error" role="alert">
                <h3>Message not sent</h3>

                <ValidationError errors={state.errors} />
            </div>
            )}

            {!state.succeeded && (
            <button
                type="submit"
                className="contact-submit"
                disabled={state.submitting}
            >
                {state.submitting ? "Sending..." : "Send Message"}
            </button>
            )}
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;