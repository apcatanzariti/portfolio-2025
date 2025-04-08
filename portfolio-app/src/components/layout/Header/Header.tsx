import "./header.css";
// import Image from "next/image";

interface HeaderProps {
    scrollToTop: () => void;
    scrollToAbout: () => void;
    scrollToProjects: () => void;
    scrollToContact: () => void;
};

export default function Header({ scrollToTop, scrollToAbout, scrollToProjects, scrollToContact }: HeaderProps) {
    return (
        <div className="header">
            <div className="header-container">
                <div className="logo-title-container">
                    {/* <div className="header-image-container">
                        <Image
                            src="/header-image.png"
                            alt="Anthony Catanzariti Logo"
                            width={60}
                            height={70}
                            style={{  display: "block", margin: "0 auto" }}
                        />
                    </div> */}
                    <p className="title-text">Anthony Catanzariti</p>
                </div>
                <div className="navigation-container">
                    <p onClick={scrollToTop}>Home</p>
                    <p onClick={scrollToAbout}>About</p>
                    <p onClick={scrollToProjects}>Projects</p>
                    <p onClick={scrollToContact}>Contact</p>
                </div>
            </div>
        </div>
    );
};