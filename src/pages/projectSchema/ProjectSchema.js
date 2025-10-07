import ProjectCard from './ProjectCard'
import { Briefcase } from 'lucide-react';

const projectsData = [
    {
        title: "SOBAL Ding & SNS for veggie",
        description: "A mobile application focused on sustainable agriculture, providing tools for soil tracking, vegetable logging, and community SNS features for garden enthusiasts.",
        img: ""
    },
    {
        title: "Transcendent Digital",
        description: "A comprehensive digital platform designed to manage and deliver eco-friendly priority services and products for modern, conscious consumers.",
        img: ""
    },
    {
        title: "Job Circular",
        description: "An essential utility app providing real-time job circulars, application forms, exam schedules, and comprehensive preparatory resources for various job exams.",
        img: ""
    },
    {
        title: "Cineplex",
        description: "An online entertainment app offering ticket sales, detailed movie information, and access to a vast library of films, web series, and major productions.",
        img: ""
    },
    {
        title: "SBI General Secure",
        description: "A security and guidance application offering real-time information and resources for global travelers, enhancing safety and preparedness for travel & tourism.",
        img: ""
    },
    {
        title: "Kurmani Proti (Quran Learning)",
        description: "An educational app dedicated to Islamic groups, offering structured lessons, recitations, and study guides for Quran learning for all ages.",
        img: ""
    },
    {
        title: "Swoop News",
        description: "A dedicated news aggregation platform providing the latest updates on global news and environmental messages, aiming to consolidate vital information in one place.",
        img: ""
    },
    {
        title: "Shopify (Mock E-commerce)",
        description: "A mock e-commerce mobile application showcasing full shopping features, including product browsing, cart management, and a smooth checkout process.",
        img: ""
    },
];



export default function ProjectSchema() {
    return (
        <div>
            <div className="min-h-screen bg-[#0E111D] font-inter p-4 sm:p-8 lg:p-12">
                <div className="container mx-auto">
                    {/* Header Section */}
                    <header className="mb-12 pt-6 sm:pt-10">
                        <div className="flex items-center text-cyan-400 mb-4">
                            <Briefcase className="w-8 h-8 mr-3" />
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                                My Recent Projects
                            </h1>
                        </div>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
                            This is a curated collection of mobile and web applications I have built, showcasing my expertise in front-end and back-end development.
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
