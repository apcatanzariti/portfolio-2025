import Button from "../../ui/button/Button";
import "./about.css";

interface AboutProps {
    scrollToContact: () => void;
}

export default function About({ scrollToContact }: AboutProps) {
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
                    <p className="about-content-text">I&apos;m a Full Stack Developer with experience in a variety of industries including energy, various government agencies, national laboratories, social media, and more! I enjoy developing for both the front and back ends of applications, but favor front end slightly. I&apos;ve always been drawn to clean, attractive, minimalist, yet user friendly designs that seamlessly blend form and function.</p>
                    <p className="about-content-text">Outside of software development, I enjoy playing hockey (I still skate every week!), playing golf, cars and car shows, hiking, and of course spending time with friends and family. When it&apos;s time to relax I enjoy video games, or reading (recently finished the Witcher series of books) depending on what has captured my attention at the time.</p>
                    <p className="about-content-text last-para">I&apos;m open to new jobs where I can not only contribute to, but learn from a team of passionate people. I&apos;m always on the hunt to learn about new languages, frameworks, techniques, and tools to help me become better as a developer. If you think I would be a good fit for your team, I would love to hear from you!</p>
                    <Button onClick={scrollToContact} buttonText="Contact" />
                </div>
                <div className="right-about-content">
                    <p className="about-content-title">My Skills</p>
                    <div className="skills-container">
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">TypeScript</div>
                        <div className="skill">React</div>
                        <div className="skill">React Native</div>
                        <div className="skill">NodeJS</div>
                        <div className="skill">Express</div>
                        <div className="skill">Axios</div>
                        <div className="skill">Postgres</div>
                        <div className="skill">GitHub</div>
                        <div className="skill">Docker</div>
                        <div className="skill">Agile</div>
                        <div className="skill">UI/UX</div>
                    </div>
                </div>
            </div>
        </div>
    );
};