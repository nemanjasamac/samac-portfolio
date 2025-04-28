import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';

export default function MiniAbout() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { amount: 0.1, once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	return (
		<section
			ref={sectionRef}
			className="relative py-24 overflow-hidden"
		>
			<div className="absolute top-[25%] left-[15%] w-[220px] h-[220px] bg-violet-500 rounded-full blur-[130px] opacity-10 animate-slow-float z-0" />
			<div className="absolute bottom-[20%] right-[10%] w-[180px] h-[180px] bg-cyan-400 rounded-full blur-[120px] opacity-10 animate-slow-float-reverse z-0" />

			<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
				<div className="grid md:grid-cols-5 gap-8 items-center">
					<motion.div
						className="md:col-span-2 relative"
						variants={{
							hidden: { opacity: 0, x: -30 },
							visible: { opacity: 1, x: 0 }
						}}
						initial="hidden"
						animate={controls}
						transition={{ duration: 0.7 }}
					>
						<div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-lg">
							<div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/20 opacity-50" />
							<img
								src={avatar}
								alt="Profile"
								className="object-cover w-full h-full relative z-10"
								style={{ filter: 'saturate(0.9)' }}
							/>

							<div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-violet-400/60" />
							<div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-400/60" />

							<div className="absolute inset-0 flex items-center justify-center">
								<div className="relative w-[110%] h-[110%] animate-slow-spin opacity-70">
									{[45, 135, 225, 315].map((deg, i) => (
										<div
											key={i}
											className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500"
											style={{
												transform: `rotate(${deg}deg) translateX(calc(50% - 4px)) translateY(-50%)`,
												boxShadow: '0 0 15px rgba(6, 182, 212, 0.5)'
											}}
										/>
									))}
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						className="md:col-span-3"
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: { opacity: 1, y: 0 }
						}}
						initial="hidden"
						animate={controls}
						transition={{ duration: 0.7, delay: 0.2 }}
					>
						<motion.span
							className="inline-block text-sm uppercase text-cyan-400 tracking-[0.2em] mb-1"
							initial={{ opacity: 0, y: 10 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
							transition={{ duration: 0.5 }}
						>
							Quick Introduction
						</motion.span>

						<motion.div
							className="w-16 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent mb-6"
							initial={{ width: 0 }}
							animate={isInView ? { width: '4rem' } : { width: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						/>

						<motion.h2
							className="text-3xl md:text-4xl font-bold mb-6 relative inline-block"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							<span className="text-white">Hello, I'm </span>
							<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Nemanja</span>
							<motion.span
								initial={{ width: 0 }}
								animate={isInView ? { width: '100%' } : { width: 0 }}
								transition={{ duration: 1, delay: 0.2 }}
								className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-cyan-400/60 to-transparent"
							/>
						</motion.h2>

						<p className="text-gray-300 mb-6 leading-relaxed">
							Full-stack developer with a passion for creating seamless user experiences
							and scalable architectures. I specialize in modern JavaScript frameworks,
							cloud solutions, and performance optimization. When I'm not coding, you
							might find me exploring new technologies or contributing to open-source.
						</p>

						<div className="flex flex-wrap gap-3 mb-8">
							{['Developer', 'Designer', 'Problem Solver', 'Tech Enthusiast'].map((tag, i) => (
								<span
									key={i}
									className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
								>
									{tag}
								</span>
							))}
						</div>

						<Link
							to="/about"
							className="group relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white font-medium transition-all duration-300 hover:gap-4 hover:px-7"
						>
							<span>Learn more about me</span>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
							<span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: 'blur(20px)' }}></span>
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
}