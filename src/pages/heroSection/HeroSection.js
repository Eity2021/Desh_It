// HeroSection.js
import { FaWhatsapp, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import StatItem from "./StatItem";
import CompanyInfo from "../companyInfo/CompanyInfo";

const HeroSection = () => (
    <section className=" bg-gradient-to-br from-[#22105e] to-[#24185c] md:px-0 sm:px-6 py-8 md:py-20 ">
        {/* Left Side Text */}
        <div className="container mx-auto  flex flex-col md:flex-row items-center justify-between">
            <div className=" flex flex-col gap-6 z-10">
                <div>
                    <h2 className="text-white text-lg md:text-xl font-semibold tracking-tight mb-2">
                        I AM <span className="text-[#ea39ff] font-bold">ARAFAT</span> HOSSAIN SOBUJ
                    </h2>
                    <div className="bg-[#201a5c] bg-opacity-70 rounded-xl p-3 text-white text-sm md:text-base font-medium shadow">
                        Full-Stack Mobile App Developer | 9+ Years Experience <br />
                        Expert in Flutter & Node.js | 40+ Successful Projects Delivered
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2 text-white">
                        Maximize Your Business{" "}
                        <span className="text-[#f5576c]">Potential</span> <br />
                        with Custom Web Development <span className="text-[#5078ff]">Solutions!</span>
                    </h1>
                    <p className="text-gray-300 text-base mt-2 max-w-lg">Take your business to the next level with custom web development solutions.</p>
                </div>
                <div className="flex gap-4 mt-4">
                    <button className="bg-[#9441f6] hover:bg-[#631fc9] text-white px-5 py-2 rounded-lg font-bold shadow transition">Get In Touch →</button>
                    <button className="bg-[#ba88fc] hover:bg-[#9441f6] text-white px-5 py-2 rounded-lg font-bold shadow transition">Download CV</button>
                </div>
            </div>
            {/* Right Side Profile */}
            <div className="flex-1 flex flex-col items-center mt-12 md:mt-0 z-10">
                <div className="relative mb-4">

                    <img
                        src="/profile.jpg"
                        className="w-52 h-52 md:w-60 md:h-60 rounded-full border-4 border-[#ea39ff] shadow-2xl object-cover"
                        alt="Profile"
                    />

                    <span className="absolute -left-[60px] top-[40px] bg-[#ff59ad] text-white px-4 py-2 rounded-full rotate-[-22deg] text-xs font-bold shadow-lg">
                        30+<br />Clients
                    </span>

                    <span className="absolute -right-[60px] top-[35px] bg-[#ff59ad] text-white px-4 py-2 rounded-full rotate-[22deg] text-xs font-bold shadow-lg">
                        40+<br />Projects
                    </span>

                    <div className="flex gap-4 justify-center mt-4">
                        <a href="#" className="text-white bg-[#27177e] hover:text-[#ea39ff] p-2 rounded-full text-xl"><FaWhatsapp /></a>
                        <a href="#" className="text-white bg-[#27177e] hover:text-[#ea39ff] p-2 rounded-full text-xl"><FaLinkedinIn /></a>
                        <a href="#" className="text-white bg-[#27177e] hover:text-[#ea39ff] p-2 rounded-full text-xl"><FaFacebookF /></a>
                    </div>
                </div>
            </div>  *
        </div>
        <CompanyInfo></CompanyInfo>
    </section>
);



export default HeroSection;
