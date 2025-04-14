import { Linkedin, Github } from "react-bootstrap-icons";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div>
                    <p className="footer-text">Anthony Catanzariti</p>
                    <p className="small-footer-text">© Copyright 2025. Made by Anthony Catanzariti</p>
                </div>
                <div>
                    <p className="footer-text">Socials</p>
                    <div className="socials-container">
                        <a href="https://www.linkedin.com/in/anthony-catanzariti" target="_blank"><Linkedin size={30} /></a>
                        <a href="https://www.github.com/apcatanzariti" target="_blank"><Github size={30} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};