// AboutSection.js
export default function AboutSection() {
    return (
        <section className="bg-gradient-to-br from-[#1A1652] to-[#231959] py-10 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-14 items-center md:items-start">
                {/* Left: Image */}
                <img
                    src="/images/laptop-code.jpg" // Replace with your image path
                    alt="Developer working"
                    className="w-full max-w-xs rounded-lg shadow-lg object-cover"
                />
                {/* Right: Text Info */}
                <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 mb-1">
                        <span className="text-[#ea39ff] text-lg">👨‍💻</span>
                        <span className="text-[#ea39ff] font-bold">ARAFAT</span>{" "}
                        <span className="text-white font-bold">HOSSAIN SOBUJ</span>
                    </h2>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                        A Full Stack Web Developer
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-5">
                        As a Full Stack Web Developer, I am responsible for designing and building complete web applications from start to finish. This includes creating user interfaces, writing server-side code, and managing databases. With my comprehensive knowledge of the entire web development process, I can efficiently turn ideas into fully functional websites or applications.
                    </p>
                    <button className="bg-[#b055b3] hover:bg-[#9441f6] text-white px-5 py-2 rounded-md font-semibold shadow transition">
                        Contact Me &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
}
