import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const techBadgeClass =
  'px-3 py-1.5 text-sm rounded-full bg-gradient-to-br from-[#ffffff0a] to-[#ffffff03] text-white border border-white/10 backdrop-blur-md hover:scale-110 hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-blue-500/20 hover:text-cyan-300 hover:border-cyan-400/30 transition-all duration-300';

export default function ProjectCard({ project }) {
  return (
    <div className="my-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/50 via-purple-800/20 to-purple-500/20 shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col justify-between backdrop-blur-md"
        >
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
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 15 }}
              className="text-white/70 hover:text-cyan-400 transition-colors"
            >
              <FiExternalLink size={22} />
            </motion.a>
          </div>

          <div className="w-full px-6 pt-4 pb-0 mt-auto">
            <motion.div
              className="relative overflow-hidden rounded-t-xl shadow-[0_0_90px_rgba(0,211,241,0.1)]"
              whileHover="hover"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                initial={{ scale: 1 }}
                variants={{
                  hover: { scale: 1.05, transition: { duration: 1.2 } }
                }}
                className="w-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0"
                variants={{
                  hover: { opacity: 1, transition: { duration: 0.3 } }
                }}
              />
            </motion.div>
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
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4] animate-[pulse_2s_infinite]" />
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
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  className="relative list-none pl-6 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-4 before:h-[2px] before:bg-gradient-to-r before:from-cyan-400 before:to-transparent"
                >
                  {feat}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-6">
            {project.tech.map((tech, idx) => (
              <motion.span
                key={idx}
                className={techBadgeClass}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + (idx * 0.1) }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-4 pt-6">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 20px rgba(6,182,212,0.5)',
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-semibold rounded-full shadow-lg shadow-cyan-500/25 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">View Live</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative z-10"
              >
                <FiArrowUpRight size={18} />
              </motion.span>
              <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </motion.a>

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
              >
                <FiGithub size={18} />
                <span>Source</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
