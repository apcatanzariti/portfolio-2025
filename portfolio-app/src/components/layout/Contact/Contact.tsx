import SmallButton from "../../ui/small-button/SmallButton";
import "./contact.css";

export default function Contact() {
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
                <form className="contact-form">
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
                    <SmallButton onClick={() => { const e = window.event; if (e) e.preventDefault(); }} buttonText="Submit" />
                </form>
            </div>
        </div>
    );
};