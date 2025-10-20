import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // EmailJS configuration - Replace these with your actual values from EmailJS dashboard
    const serviceID = "service_7h4kb8o"; // From Email Services section
    const templateID = "template_6sybt2k"; // From Email Templates section
    const publicKey = "eI8NymWHMsDs481M1"; // From Account → General section

    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setSubmitStatus("success");
        e.target.reset(); // Clear the form
      })
      .catch((error) => {
        console.error("Email send failed:", error.text);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Connect!</h3>
            <p className="contact-description">
              I'm always interested in hearing about new opportunities and
              interesting projects. Whether you have a question or just want to
              say hi, feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:riosjmobusiness@gmail.com">
                  riosjmobusiness@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <strong>Github:</strong>
                <a
                  href="https://github.com/riosjmo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/riosjmo
                </a>
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong>
                <a
                  href="https://linkedin.com/in/riotech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/riotech/
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="from_name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="from_email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="submit-message success">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="submit-message error">
                  Sorry, there was an error sending your message. Please try
                  again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
