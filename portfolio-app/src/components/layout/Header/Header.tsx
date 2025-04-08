import "./header.css";
// import Image from "next/image";

export default function Header() {
    return (
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
                <p>Home</p>
                <p><a href="./#about">About</a></p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </div>
    );
};