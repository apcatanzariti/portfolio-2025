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
                <div>
                    <p className="projects-content-title">Entergy Isolated Backup Application</p>
                    <p className="projects-content-text">The Isolated Backup Application for Entergy was a web applicaiton built to protect the company from incidents where its data could be compromised - such as hackers, ransomware, and even natural disasters. The application would back up all servers and safely store the data in an isolated enviroment, allowing the data to be recovered in the event of an attack or data loss due to physical damage from natural disasters. This created tremendous value for not only Entergy, but its customers as well. I designed and developed both the front and back ends (React/Node) of the application, integrating Ansible automation and CommVault where needed.</p>
                </div>
                <div>
                    <ImageCarousel 
                        sources={[
                            '../../../Entergy-1.png',
                            '../../../Entergy-2.png',
                            '../../../Entergy-3.png',
                            '../../../Entergy-4.png',
                            '../../../Entergy-5.png',
                            '../../../Entergy-6.png'
                        ]}
                        displayImage="/Entergy-1.png" 
                    />
                </div>
            </div>
            <div className="project-block">
                <div>
                    <p className="projects-content-title">SEC and HHS Enterprise Web Applications</p>
                    <p className="projects-content-text">These projects for both the SEC and HHS were designed to streamline the intake process of applicants, as well as manage applicant data and provide analytics. These functions were previously handled by an Excel-based system. By switching to the web based applications developed by myself and the team, these organizations saw less errors, the intake processing time was drastically reduced, and users could see metrics in real time. The applications were built using React, TypeScript, Next.js, Python, Prisma ORM, Terraform, and Azure App Service for deployment, and O365 Authentication.</p>
                </div>
                <div>
                    <ImageCarousel 
                        sources={[
                            '../../../HHS-1.png',
                            '../../../HHS-2.png',
                            '../../../HHS-3.png',
                            '../../../HHS-4.png'
                        ]}
                        displayImage="/HHS-1.png"
                    />
                </div>
            </div>
        </div>
    );
};