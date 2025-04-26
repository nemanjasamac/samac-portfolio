import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const techBadgeClass =
  'px-3 py-1 text-sm rounded-full bg-[#ffffff0a] text-white border border-white/10 backdrop-blur-md hover:scale-110 hover:bg-cyan-400/20 hover:text-cyan-300 transition-all duration-300';


export default function ProjectCard({ project }) {
  return (
    <div className="relative w-full max-w-7xl mx-auto my-24 px-6 lg:px-12">
      {/* Section Title */}
      <div className="mb-14 text-center">
        <h2 className="text-sm uppercase text-gray-400 tracking-widest">
          Featured Case Study
        </h2>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          <span className="text-white">Curated</span>{' '}
          <span className="text-cyan-400 italic">work</span>
        </h1>
      </div>

      {/* Project Content */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* Left: Gradient Card with Text and Image */}
        <motion.div
          whileHover={{ scale: 1.02, rotateX: 3, rotateY: -3 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/50 to-purple-500/20 shadow-xl flex flex-col justify-between backdrop-blur-md"
        >

          <div className="p-6 flex justify-between items-start">
            <p className="text-white/80 text-sm max-w-xs leading-relaxed tracking-wide">
              {project.subtitle}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-125 transition-transform"
            >
              <FiArrowUpRight size={24} />
            </a>
          </div>

          <div className="w-full px-6 pt-4 pb-0 mt-auto">
            <motion.img
              src={project.image}
              alt={project.title}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="w-full object-cover shadow-[0_0_90px_rgba(255,255,255,0.08)]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <h3 className="text-2xl font-bold">{project.title}</h3>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            {project.description}
          </p>

          <ul className="text-sm text-gray-400 space-y-2 list-disc pl-5">
            {project.features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-4">
            {project.tech.map((tech, idx) => (
              <span key={idx} className={techBadgeClass}>
                {tech}
              </span>
            ))}
          </div>

          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 20px rgba(6,182,212,0.5)',
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">View Project</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="relative z-10"
            >
              <FiArrowUpRight size={18} />
            </motion.span>

            <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </motion.a>

        </motion.div>

      </div>
    </div>
  );
}
