// SkillsSection.js
const techIcons = [
    ["/icons/flutter.png", "/icons/nextjs.png", "/icons/python.png", "/icons/laravel.png"],
    ["/icons/mysql.png", "/icons/aws.png", "/icons/figma.png", ""],
    ["/icons/java.png", "/icons/digitalocean.png", "/icons/php.png", ""],
];

export default function SkillsSection() {
    return (
        <section className="bg-gradient-to-br from-[#1A1652] to-[#231959] py-16 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <h2 className="flex items-center gap-3 text-4xl font-bold text-white mb-8">
                    <svg width="40" height="40" fill="none"><path d="M5 20h30" stroke="#fff" strokeWidth="3" strokeLinecap="round" /><path d="M8 10l-4 10 4 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" /></svg>
                    My Skills
                </h2>
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left: Icons Grid */}
                    <div className="bg-[#232124] rounded-2xl p-8 w-full lg:w-2/3 mb-4 shadow  ">
                        <div className="grid grid-cols-4 grid-rows-3 gap-x-12 gap-y-8">
                            {techIcons.flat().map(
                                (icon, i) =>
                                    icon && (
                                        <img
                                            src={icon}
                                            alt="Tech Icon"
                                            className="h-10 w-auto object-contain"
                                            key={i}
                                        />
                                    )
                            )}
                        </div>
                    </div>
                    {/* Right: Skill Details */}
                    <div className="flex-1 flex flex-col gap-4 w-full">
                        <div className="bg-[#232124] rounded-2xl p-5 text-gray-200 text-sm shadow">
                            <ul className="leading-8">
                                <li>
                                    <span className="font-bold text-white">Front-End :</span> HTML, CSS, JavaScript
                                </li>
                                <li>
                                    <span className="font-bold text-white">Frameworks :</span> React, Vue, Angular
                                </li>
                                <li>
                                    <span className="font-bold text-white">CSS Libraries :</span> Tailwind, Bootstrap
                                </li>
                                <li>
                                    <span className="font-bold text-white">Version Control:</span> Git/GitHub
                                </li>
                                <li>
                                    <span className="font-bold text-white">Tools:</span> Figma, Photoshop
                                </li>
                            </ul>
                        </div>
                        <div className="bg-[#232124] rounded-2xl p-5 text-gray-200 text-sm shadow">
                            <ul className="leading-8">
                                <li>
                                    <span className="font-bold text-white">Back-End :</span> Python, Java, Node.js, PHP, C#, Go
                                </li>
                                <li>
                                    <span className="font-bold text-white">Frameworks :</span> Django, Flask, Express.js, Spring Boot, Laravel
                                </li>
                                <li>
                                    <span className="font-bold text-white">Databases :</span> MySQL, PostgreSQL, MongoDB, Redis
                                </li>
                                <li>
                                    <span className="font-bold text-white">API Development :</span> REST, GraphQL
                                </li>
                                <li>
                                    <span className="font-bold text-white">Server Deployment :</span> AWS, Heroku, DigitalOcean
                                </li>
                                <li>
                                    <span className="font-bold text-white">Version Control:</span> Git/GitHub
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
