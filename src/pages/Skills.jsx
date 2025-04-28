import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function SkillsPage() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { amount: 0.1, once: true });
	const controls = useAnimation();
	const [activeCategory, setActiveCategory] = useState('frontend');

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	const skillCategories = {
		frontend: {
			title: "Frontend Development",
			description: "Creating responsive, accessible, and visually stunning user interfaces that deliver exceptional user experiences.",
			skills: [
				{ name: "React", level: 95, icon: "devicon-react-original colored", description: "Building complex single-page applications with React hooks, context, and advanced patterns" },
				{ name: "Vue.js", level: 90, icon: "devicon-vuejs-plain colored", description: "Developing reactive components with Vue's composition API and state management" },
				{ name: "Tailwind CSS", level: 98, icon: "devicon-tailwindcss-plain colored", description: "Crafting pixel-perfect designs using utility-first approach and custom configurations" },
				{ name: "JavaScript", level: 95, icon: "devicon-javascript-plain colored", description: "Modern ES6+, async patterns, functional programming, and browser APIs" },
				{ name: "HTML5/CSS3", level: 98, icon: "devicon-html5-plain colored", description: "Semantic markup, animations, CSS Grid, Flexbox, and responsive design" }
			]
		},
		backend: {
			title: "Backend Development",
			description: "Building robust, scalable server-side applications and APIs that power modern web applications.",
			skills: [
				{ name: "Node.js", level: 92, icon: "devicon-nodejs-plain colored", description: "RESTful and GraphQL API development with Express.js and Apollo Server" },
				{ name: "Python", level: 85, icon: "devicon-python-plain colored", description: "Web services with FastAPI, data processing, and automation" },
				{ name: "PostgreSQL", level: 88, icon: "devicon-postgresql-plain colored", description: "Complex queries, performance optimization, and database design" },
				{ name: "MySQL", level: 86, icon: "devicon-mysql-plain colored", description: "Schema design, indexing strategies, and stored procedures" },
				{ name: "MongoDB", level: 84, icon: "devicon-mongodb-plain colored", description: "NoSQL database modeling, aggregation pipelines, and Atlas deployments" },
				{ name: "GraphQL", level: 89, icon: "devicon-graphql-plain colored", description: "Schema design, resolvers, subscriptions, and API federation" }
			]
		},
		tools: {
			title: "DevOps & Tools",
			description: "Leveraging modern tools and practices to streamline development, testing, and deployment workflows.",
			skills: [
				{ name: "Git", level: 94, icon: "devicon-git-plain colored", description: "Advanced workflows, branch management, and collaboration strategies" },
				{ name: "Docker", level: 88, icon: "devicon-docker-plain colored", description: "Containerization, multi-container applications with Docker Compose" },
				{ name: "GitHub Actions", level: 86, icon: "devicon-github-original colored", description: "CI/CD pipelines, automated testing, and deployment workflows" },
				{ name: "Jest", level: 89, icon: "devicon-jest-plain colored", description: "Unit and integration testing, mocking, and test-driven development" },
				{ name: "Webpack", level: 85, icon: "devicon-webpack-plain colored", description: "Module bundling, code splitting, and build optimizations" }
			]
		},
		specialties: {
			title: "Specialties",
			description: "Areas where I've developed deep expertise and passion through focused practice and project work.",
			skills: [
				{ name: "UI/UX Design", level: 90, icon: "devicon-figma-plain colored", description: "User-centered design principles, wireframing, and interactive prototyping" },
				{ name: "Performance", level: 92, icon: "devicon-chrome-plain colored", description: "Web vitals optimization, lighthouse auditing, and runtime performance" },
				{ name: "Animation", level: 88, icon: "devicon-threejs-original colored", description: "Interactive animations, transitions, and micro-interactions" },
				{ name: "API Design", level: 91, icon: "devicon-nodejs-plain colored", description: "RESTful principles, versioning, documentation, and security" },
				{ name: "Accessibility", level: 87, icon: "devicon-html5-plain colored", description: "WCAG compliance, keyboard navigation, and screen reader support" },
				{ name: "State Management", level: 93, icon: "devicon-redux-original colored", description: "Global state patterns, context, signals, and efficient updates" }
			]
		}
	};

	const orbitalConfig = {
		radian: Math.PI * 2,
		centerX: 0,
		centerY: 0,
		ellipseX: 180,
		ellipseY: 120,
		duration: 90,
	};

	const getOrbitalPosition = (index, total, time) => {
		const angle = orbitalConfig.radian * (index / total) + (time / orbitalConfig.duration) * orbitalConfig.radian;
		return {
			x: orbitalConfig.centerX + Math.cos(angle) * orbitalConfig.ellipseX,
			y: orbitalConfig.centerY + Math.sin(angle) * orbitalConfig.ellipseY,
		};
	};

	const [orbitalTime, setOrbitalTime] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setOrbitalTime(prev => (prev + 0.05) % orbitalConfig.duration);
		}, 50);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			ref={sectionRef}
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

			<div className="max-w-7xl mx-auto relative z-10">
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
						Technical Arsenal
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
						<span className="text-white">Skills & </span>
						<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Expertise</span>
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
						My toolkit for building modern, responsive, and scalable web applications
					</motion.p>
				</motion.div>

				<div className="mb-16">
					<motion.div
						className="flex flex-wrap justify-center gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						{Object.keys(skillCategories).map((category) => (
							<motion.button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
										? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-black shadow-lg shadow-cyan-500/25'
										: 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
									}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
							>
								{skillCategories[category].title}
							</motion.button>
						))}
					</motion.div>
				</div>

				<motion.div
					key={`desc-${activeCategory}`}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<p className="text-gray-300 max-w-2xl mx-auto">
						{skillCategories[activeCategory].description}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<motion.div
						key={`skills-${activeCategory}`}
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -30 }}
						transition={{ duration: 0.5 }}
						className="space-y-6"
					>
						{skillCategories[activeCategory].skills.map((skill, index) => (
							<motion.div
								key={skill.name}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								className="group"
							>
								<div className="flex justify-between items-center mb-2">
									<div className="flex items-center gap-3">
										<i className={`${skill.icon} text-2xl`}></i>
										<h3 className="text-white font-medium">{skill.name}</h3>
									</div>
									<span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
								</div>

								<div className="h-2 bg-white/5 rounded-full overflow-hidden relative">
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: `${skill.level}%` }}
										transition={{ duration: 1, delay: 0.4 + (index * 0.1) }}
										className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
									/>
									<div className="absolute top-0 left-0 h-full w-full bg-[url('/subtle-dots.png')] opacity-10"></div>
								</div>

								<motion.div
									initial={{ height: 0, opacity: 0 }}
									whileHover={{ height: 'auto', opacity: 1 }}
									transition={{ duration: 0.3 }}
									className="overflow-hidden mt-2"
								>
									<p className="text-gray-400 text-sm">{skill.description}</p>
								</motion.div>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
						className="relative h-[400px] hidden lg:block"
					>
						<motion.div
							className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/5 rounded-full border border-cyan-400/30 flex items-center justify-center z-10"
							animate={{
								boxShadow: ["0 0 20px rgba(6, 182, 212, 0.3)", "0 0 40px rgba(6, 182, 212, 0.5)", "0 0 20px rgba(6, 182, 212, 0.3)"]
							}}
							transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
						>
							<span className="text-cyan-400 font-bold">{activeCategory.toUpperCase()}</span>
						</motion.div>

						<motion.div
							className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] h-[240px] border border-white/5 rounded-full rotate-12"
							style={{ borderStyle: 'dashed' }}
							animate={{ rotate: [12, 372] }}
							transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
						/>

						{skillCategories[activeCategory].skills.map((skill, index, array) => {
							const position = getOrbitalPosition(index, array.length, orbitalTime);
							return (
								<motion.div
									key={skill.name}
									className="absolute flex items-center justify-center"
									style={{
										top: `calc(50% + ${position.y}px)`,
										left: `calc(50% + ${position.x}px)`,
										transform: 'translate(-50%, -50%)'
									}}
								>
									<motion.div
										whileHover={{ scale: 1.2 }}
										className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center"
									>
										<i className={`${skill.icon} text-xl`}></i>
									</motion.div>
								</motion.div>
							);
						})}

						<svg className="absolute inset-0 w-full h-full">
							<defs>
								<linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
									<stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
								</linearGradient>
							</defs>

							{skillCategories[activeCategory].skills.map((skill, index, array) => {
								const position = getOrbitalPosition(index, array.length, orbitalTime);
								return (
									<motion.line
										key={`line-${skill.name}`}
										x1="50%"
										y1="50%"
										x2={`calc(50% + ${position.x}px)`}
										y2={`calc(50% + ${position.y}px)`}
										stroke="url(#lineGradient)"
										strokeWidth="1"
										opacity="0.5"
									/>
								);
							})}
						</svg>
					</motion.div>
				</div>

				<motion.div
					className="mt-24 lg:hidden"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<h2 className="text-xl text-white font-bold mb-6 flex items-center justify-center gap-2">
						<span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
						<span>All Technologies</span>
					</h2>

					<div className="grid grid-cols-3 gap-4">
						{Object.values(skillCategories).flatMap(category =>
							category.skills
						).slice(0, 15).map((skill, index) => (
							<motion.div
								key={`grid-${skill.name}`}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: 0.1 * index }}
								className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/30 hover:bg-white/8 transition-all duration-300"
							>
								<i className={`${skill.icon} text-2xl mb-2`}></i>
								<span className="text-xs text-gray-300">{skill.name}</span>
							</motion.div>
						))}
					</div>
				</motion.div>

				<motion.div
					className="mt-32 p-8 rounded-2xl bg-gradient-to-br from-white/8 via-cyan-500/5 to-transparent backdrop-blur-sm border border-white/10 relative overflow-hidden"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl opacity-70 animate-slow-float"></div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						<div>
							<h3 className="text-cyan-400 font-medium mb-2 text-sm uppercase tracking-wider">Featured Implementation</h3>
							<h2 className="text-2xl font-bold text-white mb-4">Skill-Powered Projects</h2>
							<p className="text-gray-300 mb-6">
								These skills aren't just for show - they power real projects with real impact.
								From responsive single-page applications to high-performance backend systems,
								I transform technical knowledge into practical solutions.
							</p>

							<div className="flex gap-3 flex-wrap mb-8">
								{["React", "Node.js", "PostgreSQL", "RestAPI", "Docker"].map((tag, i) => (
									<span key={i} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300">
										{tag}
									</span>
								))}
							</div>

							<motion.a
								href="#projects"
								className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-medium rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 group"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
							>
								<span>View Projects</span>
								<FaChevronDown className="transition-transform group-hover:translate-y-1" />
							</motion.a>
						</div>

						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-xl opacity-30 -z-10"></div>

							<div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors code-snippet overflow-hidden shadow-xl">
								<div className="flex items-center gap-2 mb-3">
									<div className="w-3 h-3 rounded-full bg-red-400"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
									<div className="w-3 h-3 rounded-full bg-green-400"></div>
									<div className="text-xs text-gray-400 ml-2">skills-implementation.jsx</div>
								</div>

								<pre className="text-sm text-left overflow-x-auto font-mono scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-white/5">
									<code className="language-javascript text-gray-300">
										<span className="text-blue-400">import</span> React, &#123; <span className="text-yellow-300">useState</span>, <span className="text-yellow-300">useEffect</span> &#125; <span className="text-blue-400">from</span> <span className="text-green-400">'react'</span>;{'\n\n'}
										<span className="text-blue-400">const</span> <span className="text-cyan-300">SkillsImplementation</span> = () =&gt; &#123;{'\n'}
										{'  '}<span className="text-blue-400">const</span> [<span className="text-yellow-300">projects</span>, <span className="text-yellow-300">setProjects</span>] = <span className="text-cyan-300">useState</span>([]);{'\n\n'}
										{'  '}<span className="text-cyan-300">useEffect</span>(() =&gt; &#123;{'\n'}
										{'    '}<span className="text-blue-400">async function</span> <span className="text-cyan-300">fetchData</span>() &#123;{'\n'}
										{'      '}<span className="text-blue-400">const</span> <span className="text-yellow-300">data</span> = <span className="text-blue-400">await</span> <span className="text-cyan-300">api.getProjectsBySkill</span>(<span className="text-green-400">'react'</span>);{'\n'}
										{'      '}<span className="text-cyan-300">setProjects</span>(<span className="text-yellow-300">data</span>);{'\n'}
										{'    '}&#125;{'\n\n'}
										{'    '}<span className="text-cyan-300">fetchData</span>();{'\n'}
										{'  '}&#125;, []);{'\n\n'}
										{'  '}<span className="text-blue-400">return</span> ({'\n'}
										{'    '}&lt;<span className="text-blue-400">div</span> <span className="text-yellow-300">className</span>=<span className="text-green-400">"skills-container"</span>&gt;{'\n'}
										{'      '}&#123;<span className="text-yellow-300">projects</span>.<span className="text-cyan-300">map</span>(<span className="text-yellow-300">project</span> =&gt; ({'\n'}
										{'        '}&lt;<span className="text-blue-400">ProjectCard</span> <span className="text-yellow-300">key</span>=&#123;<span className="text-yellow-300">project</span>.<span className="text-yellow-300">id</span>&#125; &#123;...project&#125; /&gt;{'\n'}
										{'      '}))&#125;{'\n'}
										{'    '}&lt;/<span className="text-blue-400">div</span>&gt;{'\n'}
										{'  '});{'\n'}
										&#125;
									</code>
								</pre>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					className="mt-32 text-center"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1 }}
				>
					<h2 className="text-2xl font-bold text-white mb-8">Currently Exploring</h2>

					<div className="flex flex-wrap justify-center gap-5">
						{[
							{ name: "AI/ML Integration", icon: "🧠", color: "from-purple-400 to-pink-600" },
							{ name: "Web3 & Blockchain", icon: "⛓️", color: "from-amber-400 to-orange-600" },
							{ name: "AR/VR Experiences", icon: "🥽", color: "from-green-400 to-teal-600" },
							{ name: "Rust for WebAssembly", icon: "🦀", color: "from-red-400 to-rose-600" }
						].map((tech, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20, scale: 0.8 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{ duration: 0.5, delay: 1 + (idx * 0.1) }}
								whileHover={{ y: -5, scale: 1.05 }}
								className="px-5 py-3 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-md flex items-center gap-3"
							>
								<div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-xl`}>
									{tech.icon}
								</div>
								<span className="text-gray-200">{tech.name}</span>
							</motion.div>
						))}
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