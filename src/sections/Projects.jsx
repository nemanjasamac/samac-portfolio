import React, { useRef, useEffect, useContext } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ParticlesBackground from '../components/ParticlesBackground';
import { CursorContext } from '../components/CustomCursor';
import lawcrativeImage from '../assets/projects/lawcrative.jpg';
import medAgentXImage from '../assets/projects/medagentx.jpg';
import portfolioImage from '../assets/projects/portfolio.jpg';

export default function ProjectsSection({ onNavigate }) {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
	const controls = useAnimation();
	const { setVisible, setActive } = useContext(CursorContext);

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	const projects = [
		{
			title: 'Lawcrative',
			subtitle: 'A legal-tech platform for lawyers',
			image: lawcrativeImage,
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
		{
			title: 'Med Agent X',
			subtitle: 'AI-powered healthcare assistant',
			image: medAgentXImage,
			description: 'A sophisticated AI-powered healthcare assistant that facilitates patient-doctor communication and provides medical information in a user-friendly manner.',
			category: 'AI Application',
			features: [
				'Natural language processing for medical symptom assessment',
				'Integrated appointment scheduling with healthcare providers',
				'Secure health record summaries and medication tracking',
				'Personalized health insights and educational resources'
			],
			tech: ['React', 'Node.js', 'OpenAI API', 'MongoDB', 'Express', 'TensorFlow'],
			link: 'https://github.com/nemanjasamac/med-agent-x',
			github: 'https://github.com/nemanjasamac/med-agent-x'
		},
		{
			title: 'Personal Portfolio',
			subtitle: 'Interactive developer showcase',
			image: portfolioImage,
			description: 'A cosmic-themed interactive portfolio website showcasing my skills, projects, and professional journey as a full-stack developer with a focus on modern web technologies.',
			category: 'Web Design',
			features: [
				'Responsive design with dynamic scroll-based animations',
				'Interactive project showcase with detailed case studies',
				'Particle system backgrounds and motion graphics',
				'Custom-built components for optimal performance and aesthetics'
			],
			tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'React Router', 'JavaScript'],
			link: 'https://samac.dev',
			github: 'https://github.com/nemanjasamac/samac-portfolio'
		},
	];

	return (
		<section
			id="projects"
			ref={sectionRef}
			className="relative py-24 overflow-hidden"
		>
			<ParticlesBackground />

			<div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 mb-16">
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0 }
					}}
					initial="hidden"
					animate={controls}
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
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 h-[300px]"
							onMouseEnter={() => {
								if (project.title !== 'Personal Portfolio') {
									setVisible(true);
									setActive(true);
								}
							}}
							onMouseLeave={() => {
								setVisible(false);
								setActive(false);
							}}
						>
							<div className="absolute inset-0 z-0">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
							</div>

							<div className="absolute inset-x-0 bottom-0 p-6 z-10 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500">
								<div className="space-y-4">
									<div className="flex justify-between items-start">
										<span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
											{project.category}
										</span>
										<div className="flex space-x-2">
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500/30 transition-colors"
											>
												<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
													<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
													<polyline points="15 3 21 3 21 9"></polyline>
													<line x1="10" y1="14" x2="21" y2="3"></line>
												</svg>
											</a>
											{project.github && (
												<a
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500/30 transition-colors"
												>
													<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
														<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
													</svg>
												</a>
											)}
										</div>
									</div>

									<h3 className="text-2xl font-bold text-white">{project.title}</h3>

									<div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-in-out">
										<p className="text-sm text-gray-300 mb-4">{project.description}</p>

										<div className="flex flex-wrap gap-2 mb-4">
											{project.tech.slice(0, 4).map((tech, i) => (
												<span key={i} className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-gray-300">
													{tech}
												</span>
											))}
										</div>

										<Link
											to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
											className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
										>
											View details
											<svg className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
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