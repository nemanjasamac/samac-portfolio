import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import lawcrativeImage from '../assets/projects/lawcrative.jpg';
import medagentxImage from '../assets/projects/medagentx.jpg';
import portfolioImage from '../assets/projects/portfolio.jpg';

export default function ProjectsPage() {
	const pageRef = useRef(null);
	const isInView = useInView(pageRef, { once: true, amount: 0.1 });
	const controls = useAnimation();

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
			category: 'SaaS',
			features: [
				'AI-generated case summaries using GPT-4 for rapid document analysis',
				'Integrated document management with version control and smart tagging',
				'Team collaboration with granular access controls and audit logging',
				'Client portal with secure document sharing and appointment booking'
			],
			tech: ['Vue.js', 'Python', 'Express', 'MySQL', 'GPT-4', 'FastAPI'],
			link: 'https://lawcrative.com',
			github: 'https://github.com/nemanjasamac/lawcrative-app',
			featured: true
		},
		{
			title: 'Med Agent X',
			subtitle: 'AI-powered healthcare assistant',
			image: medagentxImage,
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
			github: 'https://github.com/nemanjasamac/med-agent-x',
			featured: true
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
			github: 'https://github.com/nemanjasamac/samac-portfolio',
			featured: true
		},
	];

	return (
		<section
			ref={pageRef}
			className="relative min-h-screen py-24 px-6 overflow-hidden"
		>
			<div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-blue-500 rounded-full blur-[200px] opacity-10 animate-slow-float -z-10" />
			<div className="absolute bottom-[15%] right-[10%] w-[350px] h-[350px] bg-cyan-400 rounded-full blur-[180px] opacity-15 animate-slow-float-reverse -z-10" />

			<motion.div
				initial={{ width: 0 }}
				animate={{ width: '100%' }}
				transition={{ duration: 1.5 }}
				className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
			/>

			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<motion.span
						className="text-cyan-400 uppercase text-sm tracking-widest mb-2 inline-block"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						My Work
					</motion.span>

					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="w-16 h-[2px] mx-auto my-3 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
					/>

					<motion.h1
						className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<span className="text-white">Project </span>
						<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Gallery</span>
						<motion.span
							initial={{ width: 0 }}
							animate={{ width: '100%' }}
							transition={{ duration: 1.2, delay: 0.8 }}
							className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-cyan-400/60 to-transparent"
						/>
					</motion.h1>

					<motion.p
						className="text-gray-300 max-w-2xl mx-auto text-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Explore my key projects showcasing expertise in various technologies
					</motion.p>
				</motion.div>

				<div className="relative">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.7 }}
						className="mb-12"
					>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
							{projects.map((project, index) => (
								<motion.div
									key={project.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.2 }}
									className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-white/20 transition-colors h-full flex flex-col"
								>
									<div className="relative h-48 overflow-hidden">
										<img
											src={project.image}
											alt={project.title}
											className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60" />
										<div className="absolute top-4 left-4">
											<span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/30">
												{project.category}
											</span>
										</div>
										<div className="absolute top-4 right-4 flex space-x-2">
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500/30 transition-colors"
											>
												<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
												</svg>
											</a>

											{project.github && (
												<a
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500/30 transition-colors"
												>
													<FiGithub size={16} />
												</a>
											)}
										</div>
										<h3 className="absolute bottom-4 left-4 text-xl text-white font-bold drop-shadow-lg">
											{project.title}
										</h3>
									</div>

									<div className="p-5 flex-1 flex flex-col">
										<p className="text-sm text-gray-300 mb-4 flex-1">
											{project.description}
										</p>

										<div className="flex flex-wrap gap-2 mb-4">
											{project.tech.slice(0, 4).map((tech, idx) => (
												<span
													key={idx}
													className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-gray-300 hover:bg-white/10 hover:text-cyan-300 transition-all cursor-default"
												>
													{tech}
												</span>
											))}
											{project.tech.length > 4 && (
												<span className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-gray-300">
													+{project.tech.length - 4}
												</span>
											)}
										</div>

										<Link
											to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
											className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors mt-auto"
										>
											View details
											<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
											</svg>
										</Link>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-white/8 via-cyan-500/5 to-transparent backdrop-blur-sm border border-white/10 relative overflow-hidden"
				>
					<div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl opacity-70 animate-slow-float"></div>

					<div className="text-center mb-8">
						<h3 className="text-cyan-400 font-medium mb-2 text-sm uppercase tracking-wider">Technology Focus</h3>
						<h2 className="text-2xl font-bold text-white mb-4">My Technical Toolkit</h2>
						<p className="text-gray-300 max-w-2xl mx-auto">
							These are the primary technologies and frameworks I specialize in and utilize across my projects
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
						{['React', 'Vue.js', 'Node.js', 'Python', 'MongoDB', 'Express', 'Tailwind CSS', 'TypeScript', 'FastAPI', 'OpenAI API', 'MySQL', 'Framer Motion'].map((tech, index) => (
							<motion.div
								key={tech}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.05 }}
								className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors text-center"
								whileHover={{ scale: 1.05 }}
							>
								<span className="text-white font-medium">{tech}</span>
							</motion.div>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-white/8 via-cyan-500/5 to-transparent backdrop-blur-sm border border-white/10 relative overflow-hidden"
				>
					<div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl opacity-70 animate-slow-float"></div>

					<div className="flex flex-col md:flex-row gap-8 items-center">
						<div className="md:flex-1">
							<h3 className="text-cyan-400 font-medium mb-2 text-sm uppercase tracking-wider">More Code & Projects</h3>
							<h2 className="text-2xl font-bold text-white mb-4">Explore My GitHub</h2>
							<p className="text-gray-300 mb-6">
								Beyond these featured projects, my GitHub profile showcases my open-source contributions,
								experiments, and collaborative work. Check out my repositories to see my coding style,
								documentation practices, and ongoing development.
							</p>

							<motion.a
								href="https://github.com/nemanjasamac"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-full shadow-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 group border border-white/10"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
							>
								<FiGithub size={18} />
								<span>Visit GitHub Profile</span>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</motion.a>
						</div>

						<motion.div
							className="relative bg-[#0d1117] rounded-xl border border-white/10 p-4 overflow-hidden shadow-xl max-w-md"
							whileHover={{ scale: 1.02 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						>
							<div className="flex items-center gap-3 mb-4">
								<div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
									<FiGithub size={20} className="text-white" />
								</div>
								<div>
									<h4 className="text-white font-semibold">nemanjasamac</h4>
									<p className="text-gray-400 text-sm">Full-Stack Developer</p>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-2 mb-4">
								<div className="bg-[#161b22] p-2 rounded-md text-center">
									<div className="text-white font-bold">9</div>
									<div className="text-xs text-gray-400">Repos</div>
								</div>
								<div className="bg-[#161b22] p-2 rounded-md text-center">
									<div className="text-white font-bold">76</div>
									<div className="text-xs text-gray-400">Contributions</div>
								</div>

							</div>

							<div className="relative h-28 bg-[#161b22] rounded-md overflow-hidden">
								<div className="absolute bottom-0 left-0 w-full h-24 flex items-end">
									{Array.from({ length: 30 }).map((_, i) => {
										const height = Math.floor(Math.random() * 20) + 4;
										return (
											<div
												key={i}
												className="w-2 mx-0.5 bg-cyan-500 rounded-sm opacity-80"
												style={{ height: `${height}px` }}
											/>
										);
									})}
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>

			<svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" height="60" viewBox="0 0 1440 60" fill="none">
				<path d="M0,30 C480,50 960,10 1440,30 L1440,60 L0,60 Z" fill="url(#footer-fade)" />
				<defs>
					<linearGradient id="footer-fade" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#00d3f1" stopOpacity="0.05" />
						<stop offset="100%" stopColor="#030712" stopOpacity="0.2" />
					</linearGradient>
				</defs>
			</svg>
		</section>
	);
}