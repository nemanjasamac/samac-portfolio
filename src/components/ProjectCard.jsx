import React from 'react';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const techBadgeClass =
    'px-3 py-1.5 text-sm rounded-full bg-gradient-to-br from-[#ffffff0a] to-[#ffffff03] text-white border border-white/10 backdrop-blur-md transition-all duration-300';

export default function ProjectCard({ project }) {
    return (
        <div className="my-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/50 via-purple-800/20 to-purple-500/20 shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col justify-between backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="p-6 flex justify-between items-start">
                        <div>
                            <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md mb-2 inline-block">
                                {project.category || "Web App"}
                            </span>
                            <p className="text-white/80 text-sm max-w-xs leading-relaxed tracking-wide">
                                {project.subtitle}
                            </p>
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-cyan-400 transition-colors"
                        >
                            <FiExternalLink size={22} />
                        </a>
                    </div>

                    <div className="w-full px-6 pt-4 pb-0 mt-auto">
                        <div className="relative overflow-hidden rounded-t-xl shadow-[0_0_90px_rgba(0,211,241,0.1)]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                </div>

                <div className="text-white space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                        {project.description}
                    </p>

                    <div className="space-y-2 pt-2">
                        <h4 className="text-cyan-400 text-sm font-semibold">KEY FEATURES</h4>
                        <ul className="text-sm text-gray-400 space-y-3 pl-5">
                            {project.features.map((feat, i) => (
                                <li
                                    key={i}
                                    className="relative list-none pl-6 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-4 before:h-[2px] before:bg-gradient-to-r before:from-cyan-400 before:to-transparent"
                                >
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-6">
                        {project.tech.map((tech, idx) => (
                            <span key={idx} className={techBadgeClass}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-6">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-semibold rounded-full shadow-lg shadow-cyan-500/25 transition-all duration-300 relative overflow-hidden group"
                        >
                            <span className="relative z-10">View Live</span>
                            <span className="relative z-10">
                                <FiArrowUpRight size={18} />
                            </span>
                            <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                        </a>

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
                            >
                                <FiGithub size={18} />
                                <span>Source</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
