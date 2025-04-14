import Button from "../../ui/button/Button";
import "./intro.css";

interface IntroProps {
    scrollToAbout: () => void;
};

export default function Intro({ scrollToAbout }: IntroProps) {
    return (
        <div className="intro-container">
            <div className="intro-content">
                <div className="intro-text">
                    <h1>Hey, I&apos;m Anthony</h1>
                    <p>Full Stack Developer building websites and web applications for a variety of different industries, focusing on incredible UI/UX and efficient back end code</p>
                    <Button onClick={scrollToAbout} buttonText="Learn More" />
                </div>
            </div>
        </div>
    );
};