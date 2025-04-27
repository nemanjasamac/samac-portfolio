import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ParticlesBackground from '../components/ParticlesBackground';

export default function ProjectsSection({ onNavigate }) {
  const sectionRef = useRef(null);
  useInView(sectionRef, { once: false, amount: 0.1 });
  
  const projects = [
    {
      title: 'Lawcrative',
      subtitle: 'A legal-tech platform for lawyers',
      image: '/src/assets/projects/lawcrative.jpg',
      description: 'Legal-tech SaaS platform built for lawyers to streamline their practice management and enhance collaboration with clients and colleagues.',
      category: 'SaaS Platform',
      features: [
        'AI-generated case summaries using GPT-4 for rapid document analysis',
        'Integrated document management with version control and smart tagging',
        'Team collaboration with granular access controls and audit logging',
        'Client portal with secure document sharing and appointment booking'
      ],
      tech: ['Vue.js', 'Python', 'Express', 'MySQL', 'GPT-4', 'FastAPI'],
      link: 'https://lawcrative.com',
      github: 'https://github.com/nemanjasamac/lawcrative-app'
    },
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ position: 'relative' }} 
    >
      <ParticlesBackground />
      
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase text-cyan-400 tracking-[0.2em] mb-2"
          >
            Signature Projects
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight relative inline-block"
          >
            <span className="text-white">Stellar </span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">solutions</span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-cyan-400/60 to-transparent"
            />
          </motion.h1>
        </motion.div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-semibold rounded-full shadow-lg shadow-cyan-500/25 transition-all duration-300"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <span>View all projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}