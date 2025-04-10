import "./about.css";

export default function About() {
    return (
        <div className="about-container">
            <div className="about-title">
                <p>About Me</p>
            </div>
            <div className="about-divider"></div>
            <div className="about-subtext">
                <p>Here is where you can learn a little more about me, what I do, and some of the languages, frameworks, and tools I currently enjoy using to build applications.</p>
            </div>
            <div className="about-content">
                <div className="left-about-content">
                    <p className="about-content-title">A Little About Me</p>
                    <p>Lorem ipsum</p>
                </div>
                <div className="right-about-content">
                    <p className="about-content-title">My Skills</p>
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>
    );
};