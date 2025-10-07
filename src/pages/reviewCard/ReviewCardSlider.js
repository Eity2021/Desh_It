import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export const reviewsData = [
    {
        quote:
            "DeshIT-BD brings the kind of speed and adaptability every startup dreams of. They understand how to balance rapid execution with long-term scalability, which is rare in a tech partner. From idea to implementation, their team has been reliable, resourceful, and deeply committed to our success. DeshIT-BD isn't just a development team—they're an extension of our startup.",
        name: "Woody Klemetson",
        title: "Founder and CEO at AskElephant",
        image: "/path/to/woody.jpg", // Replace with actual image path
    },
    {
        quote:
            "Working with DeshIT-BD has been transformative for our organization. Their team doesn't just deliver technology—they understand our vision and help bring it to life with precision and care. What sets them apart is their dedication, professionalism, and ability to translate complex ideas into solutions that truly make a difference. DeshIT-BD is a partner you can trust to elevate your projects from concept to success.",
        name: "Stacy Duty",
        title: "Founder at The WeighPay Group",
        image: "/path/to/stacy.jpg", // Replace with actual image path
    },
    {
        quote:
            "Collaborating with DeshIT-BD has been an inspiring experience. Their team combines technical excellence with a creative approach that brings ideas to life in ways I didn't imagine possible. They are more than developers—they are true partners who listen, innovate, and deliver with precision. For anyone seeking a team that can turn vision into reality, DeshIT-BD is unmatched.",
        name: "Lauren Messemer",
        title: "Founder & Lead Developer at Mesmerize Software Studio",
        image: "/path/to/lauren.jpg", // Replace with actual image path
    },
];

export default function ReviewCardSlider() {
    return (
        <section
            className="py-16 md:py-24 bg-gray-900 overflow-hidden"
            style={{
                backgroundImage:
                    "radial-gradient(at 0% 0%, rgba(139, 92, 246, 0.1) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(236, 72, 153, 0.1) 0, transparent 50%)",
            }}
        >
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center md:text-left flex items-center">
                    <svg
                        className="w-8 h-8 mr-3 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                    Client Reviews
                </h2>

                {/* Custom Swiper Styles (You might put this in a global CSS file or use a styled-component approach) */}
                {/* For this example, we'll rely on global or component-specific CSS to override Swiper defaults */}
                <style jsx global>{`
          /* Custom styles for the nav and pagination to match the image */
          .swiper-button-prev,
          .swiper-button-next {
            width: 40px !important;
            height: 40px !important;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.1);
            color: #c084fc !important; /* Tailwind purple-400 */
            transition: all 0.3s ease;
          }
          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            background-color: rgba(255, 255, 255, 0.2);
          }
          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 18px !important;
          }
          .swiper-button-disabled {
            opacity: 0.5 !important;
            cursor: not-allowed;
          }

          /* Custom pagination dots */
          .swiper-pagination-bullet {
            width: 10px !important;
            height: 10px !important;
            background: rgba(255, 255, 255, 0.5) !important;
            opacity: 1 !important;
            margin: 0 4px !important;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: #d946ef !important; /* Tailwind fuchsia-500 */
            width: 25px !important;
            border-radius: 9999px; /* Pill shape */
          }
        `}</style>

                <Swiper
                    // Swiper Modules
                    modules={[Navigation, Pagination, A11y]}
                    // Responsive Breakpoints for slidesPerView
                    breakpoints={{
                        640: {
                            // sm
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            // md
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            // lg
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    // Configuration
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
                >
                    {reviewsData.map((review, index) => (
                        <SwiperSlide key={index} className="pb-16">
                            <ReviewCard review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center md:justify-start items-center mt-8 space-x-4">
                    {/* Navigation Arrows */}
                    <div className="swiper-button-prev cursor-pointer">fsdf</div>
                    <div className="swiper-button-next cursor-pointer">dfsd</div>
                    <div className="swiper-pagination-custom flex items-center ml-8 !relative !w-auto">vfdfds</div>
                </div>
            </div>
        </section>
    );
}
