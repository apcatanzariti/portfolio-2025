import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (form.current) {
          emailjs.sendForm("service_t1did17", "template_c7vob2r", form.current, { publicKey: "8FxreZAX5r_UhSMol" })
            .then(() => {
              setFormSubmitted(true);
            }, () => {
              alert(`Error sending email. Please try again.`);
            }
          );
        } else {
          alert("Form reference is not available.");
        };
    };

    return (
        <div className="contact-container">
            <div className="contact-title">
                <p>Contact</p>
            </div>
            <div className="contact-divider"></div>
            <div className="contact-subtext">
                <p>Feel free to reach out by filling out the form below and I will respond as soon as I can</p>
            </div>
            <div className="contact-form-container">
                {!formSubmitted ? (
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <div className="input-container">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input className="form-input" type="text" id="name" name="name" required />
                    </div>
                    <div className="input-container">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-input" type="email" id="email" name="email" required />
                    </div>
                    <div className="input-container">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea className="form-input" id="message" name="message" cols={30} rows={8} required></textarea>
                    </div>
                    <button className="email-button">Submit</button>
                </form>
                ) : (
                    <div style={{ textAlign: "center", fontWeight: "bold" }}>Thank you for reaching out! I will respond as soon as I can.</div>
                )}
            </div>
        </div>
    );
};