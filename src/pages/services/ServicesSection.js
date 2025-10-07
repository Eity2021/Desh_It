// ServicesSection.js

const services = [
    {
        title: "Web Application",
        description:
            "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
        icon: "/icons/web-app.svg",
    },
    {
        title: "Web Development",
        description:
            "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
        icon: "/icons/web-dev.svg",
    },
    {
        title: "App Development",
        description:
            "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
        icon: "/icons/app.svg",
    },
    {
        title: "Database Management",
        description:
            "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
        icon: "/icons/db.svg",
    },
    {
        title: "Data Analysis",
        description:
            "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
        icon: "/icons/data.svg",
    },
    {
        title: "Web Design",
        description:
            "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
        icon: "/icons/design.svg",
    },
];

export default function ServicesSection() {
    return (
        <section className="py-16 px-4 md:px-10 bg-gradient-to-br from-[#1A1652] to-[#231959] min-h-[100vh]">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div>
                    <h2 className="flex items-center gap-3 text-4xl md:text-5xl font-bold text-white mb-3">
                        <svg width="40" height="40" fill="none"><path d="M5 20h30" stroke="#fff" strokeWidth="3" strokeLinecap="round" /><path d="M8 10l-4 10 4 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" /></svg>
                        My Services
                    </h2>
                    <p className="text-gray-300 mt-2 text-base md:text-lg max-w-3xl">
                        I am a highly experienced Full-Stack Mobile App Developer with over seven years in the industry. I specialize in Flutter for mobile development and Node.js for backend solutions. With a deep understanding of scalable architectures, I have successfully delivered 40+ high-performance applications across various industries, ensuring seamless user experiences and efficient backend systems.
                    </p>
                </div>
                {/* Services Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, idx) => (
                        <div
                            key={s.title}
                            className="
                rounded-xl p-8 shadow-lg bg-[#181436] text-white/90
                transition-all duration-500 ease-out
                hover:bg-gradient-to-tr hover:from-[#fc7e6a] hover:via-[#4c23ea] hover:to-[#8b5cf7] hover:text-white
                hover:scale-105 hover:shadow-2xl
                cursor-pointer
                "
                        >
                            <div className="mb-5">
                                <img src={s.icon} alt="" className="w-12 h-12" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                            <p className="mb-6 text-sm text-gray-200">{s.description}</p>
                            <a
                                href="#"
                                className="font-semibold underline-offset-4 hover:underline text-white"
                            >
                                Learn More &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
