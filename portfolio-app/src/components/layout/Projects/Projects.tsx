import ImageCarousel from "../../ui/image-carousel/ImageCarousel";
import "./projects.css";

export default function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-title">
                <p>Projects</p>
            </div>
            <div className="projects-divider"></div>
            <div className="projects-subtext">
                <p>Here you can find some information on professional and personal projects I have worked on.</p>
            </div>
            <div className="project-block">
                <p>something here...</p>
                <div>
                    <ImageCarousel 
                        sources={[
                            '../../../Entergy-1.png',
                            '../../../Entergy-2.png',
                            '../../../Entergy-3.png',
                            '../../../Entergy-4.png',
                            '../../../Entergy-5.png',
                            '../../../Entergy-6.png'
                        ]} />
                </div>
            </div>
        </div>
    );
};