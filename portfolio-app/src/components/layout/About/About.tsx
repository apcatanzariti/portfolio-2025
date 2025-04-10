import "./about.css";

interface AboutProps {
    scrollToContact: () => void;
};

export default function About({ scrollToContact }: AboutProps) {
    return (
        <div className="about-container">
            <div className="about-text">
                <h1>Hey, I&apos;m Anthony</h1>
                <p>Full Stack Developer building websites and web applications for a variety of different industries, focusing on incredible UI/UX and efficient back end code</p>
                <button className="about-button" onClick={scrollToContact}>Contact</button>
            </div>
        </div>
    );
};