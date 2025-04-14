import "./header.css";
// import Image from "next/image";

interface HeaderProps {
    scrollToIntro: () => void;
    scrollToAbout: () => void;
    scrollToProjects: () => void;
    scrollToContact: () => void;
};

export default function Header({ scrollToIntro, scrollToAbout, scrollToProjects, scrollToContact }: HeaderProps) {
    return (
        <div className="header">
            <div className="header-container">
                <div className="logo-title-container">
                    <p className="title-text">Anthony Catanzariti</p>
                </div>
                <div className="navigation-container">
                    <p onClick={scrollToIntro}>Intro</p>
                    <p onClick={scrollToAbout}>About</p>
                    <p onClick={scrollToProjects}>Projects</p>
                    <p onClick={scrollToContact}>Contact</p>
                </div>
            </div>
        </div>
    );
};