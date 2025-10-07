import React from 'react'

export default function ContactSection() {
    return (
        <div>
            <section className=" bg-black text-white pt-16 pb-6 px-4 sm:px-8 lg:px-16">
                {/* Title */}
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold uppercase text-center mb-16 tracking-wider">
                    LET'S CONNECT
                </h1>

                {/* Main Content Grid */}
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Contact Form Container (Left Side) */}
                    <div className="p-6 bg-[#252528] rounded-lg shadow-xl">
                        <form className="space-y-6">

                            {/* Input Fields */}
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-4 bg-[#333336] text-white border-none rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-4 bg-[#333336] text-white border-none rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full p-4 bg-[#333336] text-white border-none rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <textarea
                                placeholder="Please type your message here..."
                                rows="5"
                                className="w-full p-4 bg-[#333336] text-white border-none rounded-md placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />

                            {/* Send Message Button with Gradient */}
                            <button
                                type="submit"
                                className="w-full py-3 px-6 text-lg font-semibold text-white rounded-md 
                         bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 
                         hover:from-purple-700 hover:via-pink-700 hover:to-red-600 
                         transition duration-300"
                            >
                                Send message
                            </button>
                        </form>
                    </div>

                    {/* Contact Details and Description (Right Side) */}
                    <div className="lg:pt-16">

                        {/* Contact Us Heading */}
                        <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-gray-500 inline-block">
                            Contact us
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 mb-10 leading-relaxed">
                            Are you looking for a dedicated Full Stack Developer to bring your
                            vision to life? I specialize in delivering end-to-end solutions,
                            from robust back-end architecture to engaging user interfaces. Let's
                            discuss how I can leverage my expertise to help you build your next
                            great application.
                        </p>

                        {/* Contact Items */}
                        <div className="space-y-6">

                            {/* Email */}
                            <div className="flex items-center space-x-3">
                                <span className="text-pink-500 text-xl">📧</span> {/* Email Icon */}
                                <div>
                                    <a href="mailto:CONTACT@COMPANY.COM" className="text-white hover:text-pink-400 transition duration-300">
                                        CONTACT@COMPANY.COM
                                    </a>
                                    <div className="w-full h-px bg-gray-600 mt-1"></div> {/* Underline */}
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center space-x-3">
                                <span className="text-pink-500 text-xl">📞</span> {/* Phone Icon */}
                                <div>
                                    <a href="tel:123456789" className="text-white hover:text-pink-400 transition duration-300">
                                        (123)456-789
                                    </a>
                                    <div className="w-full h-px bg-gray-600 mt-1"></div> {/* Underline */}
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start space-x-3">
                                <span className="text-pink-500 text-xl mt-1">📍</span> {/* Location Icon */}
                                <div>
                                    <p className="text-gray-300">
                                        794 MCALLISTER ST. ROAD-1256,
                                    </p>
                                    <p className="text-gray-300">
                                        SAN FRANCISGO,84102
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
