import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const techBadgeClass =
  'px-3 py-1 text-sm rounded-full bg-[#ffffff0a] text-white border border-white/10 backdrop-blur-md hover:scale-105 transition';

export default function ProjectCard({ project }) {
  return (
    <div className="relative w-full max-w-7xl mx-auto my-24 px-6 lg:px-12">
      <div className="mb-10 text-center">
        <h2 className="text-sm uppercase text-gray-400 tracking-widest">
          Featured Case Study
        </h2>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          <span className="text-white">Curated</span>{' '}
          <span className="text-cyan-400 italic">work</span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Image + Overlay */}
        <motion.div
          whileHover={{ scale: 1.015 }}
          className="relative group rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-700/60 to-cyan-400/40 shadow-xl p-6"
        >
          <div className="absolute top-5 left-5 z-10 text-white/80 text-lg max-w-sm">
            <p>{project.subtitle}</p>
          </div>

          <div className="absolute top-5 right-5 z-10 text-white/80">
            <FiArrowUpRight className="text-xl" />
          </div>

          <img
            src={project.image}
            alt={project.title}
            className="relative rounded-xl border border-white/10"
          />
        </motion.div>

        {/* Right: Details */}
        <div className="text-white space-y-5">
          <div className="flex items-center gap-2 text-cyan-400">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <h3 className="text-xl font-semibold">{project.title}</h3>
          </div>

          <p className="text-gray-300 text-base leading-relaxed max-w-xl">
            {project.description}
          </p>

          <ul className="text-sm text-gray-400 space-y-1 list-disc pl-5">
            {project.features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-3">
            {project.tech.map((tech, idx) => (
              <span key={idx} className={techBadgeClass}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
