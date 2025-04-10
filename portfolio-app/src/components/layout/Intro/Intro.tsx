import "./intro.css";

interface IntroProps {
    scrollToProjects: () => void;
};

export default function Intro({ scrollToProjects }: IntroProps) {
    return (
        <div className="intro-container">
            <div className="intro-text">
                <h1>Hey, I&apos;m Anthony</h1>
                <p>Full Stack Developer building websites and web applications for a variety of different industries, focusing on incredible UI/UX and efficient back end code</p>
                <button className="intro-button" onClick={scrollToProjects}>Projects</button>
            </div>
        </div>
    );
};