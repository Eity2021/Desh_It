const StatItem = ({ icon, value, label }) => (
    <div className="flex flex-col items-center flex-1 min-w-[120px]">
        <span className="text-3xl md:text-4xl" dangerouslySetInnerHTML={{ __html: icon }} />
        <span className="text-white text-2xl font-extrabold mt-2">{value}</span>
        <span className="text-white/80 font-medium mt-1 text-center">{label}</span>
    </div>
);

export default StatItem;