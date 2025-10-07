

export default function ReviewCard({ review }) {

    return (
        <div className="p-8 h-full rounded-xl bg-purple-950/40 backdrop-blur-sm shadow-2xl flex flex-col justify-between border border-purple-800/50">
            <div>
                {/* Quotation mark icon */}
                <span className="text-6xl text-purple-400 font-serif block mb-4">”</span>

                {/* Stars - using a placeholder for simplicity */}
                <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    ))}
                </div>

                {/* Review Text */}
                <p className="text-white text-base md:text-lg italic leading-relaxed mb-6">
                    {review.quote}
                </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center mt-4 pt-4 border-t border-purple-800/50">
                {/* Avatar */}
                <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                    <p className="text-white font-semibold text-lg">{review.name}</p>
                    <p className="text-purple-300 text-sm">{review.title}</p>
                </div>
            </div>
        </div>
    )
}
