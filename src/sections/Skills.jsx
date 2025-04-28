import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function SkillsSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { amount: 0.1, once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	const skills = [
		{ name: "React", icon: "devicon-react-original", category: "frontend", level: 90 },
		{ name: "Vue.js", icon: "devicon-vuejs-plain", category: "frontend", level: 85 },
		{ name: "Node.js", icon: "devicon-nodejs-plain", category: "backend", level: 88 },
		{ name: "JavaScript", icon: "devicon-javascript-plain", category: "language", level: 92 },
		{ name: "Docker", icon: "devicon-docker-plain", category: "tool", level: 60 },
		{ name: "Python", icon: "devicon-python-plain", category: "language", level: 90 },
		{ name: "PostgreSQL", icon: "devicon-postgresql-plain", category: "database", level: 82 },
		{ name: "MySQL", icon: "devicon-mysql-plain", category: "database", level: 78 },
		{ name: "Git", icon: "devicon-git-plain", category: "tool", level: 85 },
		{ name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", category: "frontend", level: 90 },
		{ name: "CSS3", icon: "devicon-css3-plain", category: "frontend", level: 88 },
		{ name: "HTML5", icon: "devicon-html5-plain", category: "frontend", level: 95 },
	];

	return (
		<section
			id="skills"
			ref={sectionRef}
			className="relative py-24 overflow-hidden"
		>
			<div className="absolute top-[15%] right-[8%] w-[250px] h-[250px] bg-blue-500 rounded-full blur-[120px] opacity-15 animate-slow-float-reverse z-0" />
			<div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-cyan-400 rounded-full blur-[100px] opacity-10 animate-slow-float z-0" />

			<div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 mb-16 z-10">
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
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6 }}
						className="text-sm uppercase text-cyan-400 tracking-[0.2em] mb-2"
					>
						Technical Arsenal
					</motion.h2>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-4xl sm:text-5xl font-extrabold tracking-tight relative inline-block"
					>
						<span className="text-white">Skills & </span>{' '}
						<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">Technologies</span>
						<motion.span
							initial={{ width: 0 }}
							animate={isInView ? { width: '100%' } : { width: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-cyan-400/60 to-transparent"
						/>
					</motion.h1>

					<p className="mt-6 max-w-2xl mx-auto text-gray-300">
						My toolkit for building modern, responsive, and scalable web applications
					</p>
				</motion.div>
			</div>

			<div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.8 }}
					className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
				>
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: index * 0.05 }}
							whileHover={{
								y: -5,
								boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.3)",
								transition: { duration: 0.2 }
							}}
							className="flex flex-col items-center justify-center p-5 bg-gradient-to-br from-white/8 to-transparent backdrop-blur-sm rounded-xl border border-white/10 relative group"
						>
							<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

							<i className={`${skill.icon} text-4xl mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300`}></i>

							<h3 className="text-white text-sm font-medium mb-2">{skill.name}</h3>

							<div className="w-full bg-white/10 rounded-full h-1.5 mb-1">
								<motion.div
									className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full"
									initial={{ width: 0 }}
									animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
									transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
								/>
							</div>

							<span className="text-xs text-gray-400 uppercase tracking-wider">
								{skill.category}
							</span>

							<motion.div
								className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
								initial={{ width: 0 }}
								whileHover={{ width: "60%" }}
								transition={{ duration: 0.3 }}
							/>
						</motion.div>
					))}
				</motion.div>

				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl -z-10">
					<svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<radialGradient id="skillsGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
								<stop offset="0%" stopColor="rgba(6, 182, 212, 0.15)" />
								<stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
							</radialGradient>
						</defs>
						<circle cx="100" cy="100" r="100" fill="url(#skillsGradient)" />
					</svg>
				</div>
			</div>
		</section>
	);
}