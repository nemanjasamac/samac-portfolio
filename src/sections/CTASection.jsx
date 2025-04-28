import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTASection() {
	const ctaRef = useRef(null);
	const isInView = useInView(ctaRef, { once: true, amount: 0.3 });

	return (
		<motion.section
			ref={ctaRef}
			data-scroll-section
			className="relative py-24 overflow-hidden"
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : { opacity: 0 }}
			transition={{ duration: 0.8 }}
		>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-[120px] opacity-30 -z-10" />

			<div className="absolute inset-0 -z-10 opacity-50">
				{Array.from({ length: 10 }).map((_, i) => (
					<div
						key={i}
						className="absolute w-[1px] h-[1px] bg-white rounded-full"
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							opacity: Math.random() * 0.7 + 0.3,
							animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`
						}}
					/>
				))}
			</div>

			<motion.div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-cyan-400/20 rounded-full -z-10"
				animate={{
					width: ["0%", "90%", "95%"],
					height: ["0%", "90%", "95%"],
					opacity: [0, 0.2, 0]
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					repeatType: "loop"
				}}
			/>

			<div className="container mx-auto px-6 relative">
				<motion.div
					initial={{ y: 50 }}
					animate={isInView ? { y: 0 } : { y: 50 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="max-w-4xl mx-auto bg-gradient-to-br from-white/8 via-cyan-500/5 to-transparent backdrop-blur-sm rounded-3xl border border-white/10 shadow-xl p-10 relative overflow-hidden"
				>
					<div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl opacity-70" />
					<div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-70" />

					<motion.div
						initial={{ width: 0 }}
						animate={isInView ? { width: '100%' } : { width: 0 }}
						transition={{ duration: 1.5, delay: 0.5 }}
						className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
					/>

					<div className="text-center relative z-10">
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="mb-2 inline-block"
						>
							<div className="p-2 bg-cyan-500/20 rounded-full inline-flex">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
									<path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
								</svg>
							</div>
						</motion.div>

						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
						>
							Ready to Launch Your Next Project?
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="text-gray-300 mb-8 max-w-xl mx-auto"
						>
							Let's collaborate and build something extraordinary together. Whether you have a specific idea or need guidance, I'm here to turn your vision into reality.
						</motion.p>

						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<motion.div
								initial={{ opacity: 0, y: 20, scale: 0.9 }}
								animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								whileHover={{ scale: 1.05 }}
								className="relative"
							>
								<Link
									to="/contact"
									className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
								>
									<span className="relative z-10">Start a Project</span>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
										<line x1="5" y1="12" x2="19" y2="12"></line>
										<polyline points="12 5 19 12 12 19"></polyline>
									</svg>
									<span className="absolute inset-0 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></span>
								</Link>

								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full opacity-0 animate-[pulse_2s_infinite]" style={{ border: '1px solid rgba(6, 182, 212, 0.5)' }}></div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ duration: 0.6, delay: 0.8 }}
								whileHover={{ scale: 1.05 }}
							>
								<a
									href="mailto:nemanja@samac.dev"
									className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
										<rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
										<polyline points="3 7 12 13 21 7"></polyline>
									</svg>
									<span>Get in Touch</span>
								</a>
							</motion.div>
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : { opacity: 0 }}
							transition={{ duration: 0.8, delay: 1 }}
							className="mt-10 text-gray-400 text-sm flex items-center justify-center gap-2"
						>
							<span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-[pulse_2s_infinite]"></span>
							Available for new projects starting June 2025
						</motion.div>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
}