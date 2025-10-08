import ProjectCard from './ProjectCard'
import frame from "../../image/Frame.png";
import project1 from "../../image/project1.png";
import project2 from "../../image/project2.png";
import project3 from "../../image/project3.png";
import project4 from "../../image/project4.png";
import project5 from "../../image/project5.png";
import project6 from "../../image/project6.png";
import project7 from "../../image/project7.png";
import project8 from "../../image/project8.png";

const projectsData = [
    {
        title: "SOBAL Ding & SNS for veggie",
        description: "A mobile application focused on sustainable agriculture, providing tools for soil tracking, vegetable logging, and community SNS features for garden enthusiasts.",
        img: project1
    },
    {
        title: "Transcendent Digital",
        description: "A comprehensive digital platform designed to manage and deliver eco-friendly priority services and products for modern, conscious consumers.",
        img: project2
    },
    {
        title: "Job Circular",
        description: "An essential utility app providing real-time job circulars, application forms, exam schedules, and comprehensive preparatory resources for various job exams.",
        img: project3
    },
    {
        title: "Cineplex",
        description: "An online entertainment app offering ticket sales, detailed movie information, and access to a vast library of films, web series, and major productions.",
        img: project5
    },
    {
        title: "SBI General Secure",
        description: "A security and guidance application offering real-time information and resources for global travelers, enhancing safety and preparedness for travel & tourism.",
        img: project6
    },
    {
        title: "Kurmani Proti (Quran Learning)",
        description: "An educational app dedicated to Islamic groups, offering structured lessons, recitations, and study guides for Quran learning for all ages.",
        img: project6
    },
    {
        title: "Swoop News",
        description: "A dedicated news aggregation platform providing the latest updates on global news and environmental messages, aiming to consolidate vital information in one place.",
        img: project7
    },
    {
        title: "Shopify (Mock E-commerce)",
        description: "A mock e-commerce mobile application showcasing full shopping features, including product browsing, cart management, and a smooth checkout process.",
        img: project8
    },
];



export default function ProjectSchema() {
    return (
        <div>
            <div className="min-h-screen bg-[#0E111D] font-inter p-4 sm:p-8 lg:p-12">
                <div className="container mx-auto">
                    {/* Header Section */}
                    <header className="mb-12 pt-6 sm:pt-10">
                        <div className="flex gap-2 items-center text-cyan-400 mb-4">
                            <img src={frame} />
                            <h1 className="text-customHeadFont font-semibold text-white font-roboto">
                                My Recent Projects
                            </h1>
                        </div>
                        <p className="text-sm  text-[#DBB9B9BA] font-medium lg:w-[600px] w-100">
                            I want to become a skilled full stack developer, proficient in both frontend and backend technologies. My goal is to build visually appealing and high-performing web applications.
                        </p>
                    </header>

                    {/* Projects Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projectsData.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}
