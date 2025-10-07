
import { ArrowRight } from 'lucide-react';


export default function ProjectCard({ project }) {
    return (
        <div>
            <div className="bg-[#141829] p-6 rounded-xl shadow-2xl hover:shadow-cyan-500/30 transition duration-300 transform hover:-translate-y-1 border border-[#141829] hover:border-cyan-600/50">
                <div className="">
                    <div className="">
                        <img src="image" alt="image" />
                    </div>
                    <div className="">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                            {project.description}
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-cyan-400 font-semibold text-sm group transition duration-300 hover:text-cyan-300"
                            onClick={(e) => e.preventDefault()}
                        >
                            Click to Visit
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
