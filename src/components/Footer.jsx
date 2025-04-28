import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer data-scroll-section className="relative pt-20 pb-8 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-t from-black via-[#030712] to-transparent -z-10" />

			<div className="absolute top-[15%] left-[10%] w-[250px] h-[250px] bg-blue-500 rounded-full blur-[120px] opacity-10 animate-[var(--animation-slow-float-reverse)] -z-10" />
			<div className="absolute bottom-[20%] right-[8%] w-[300px] h-[300px] bg-cyan-400 rounded-full blur-[140px] opacity-10 animate-[var(--animation-slow-float)] -z-10" />

			<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

			<div className="absolute inset-0 -z-10 opacity-30">
				{Array.from({ length: 20 }).map((_, i) => (
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

			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-12">
					<div className="md:col-span-1">
						<Link
							to="/"
							className="text-cyan-400 font-bold text-xl tracking-wide inline-block mb-4"
						>
							Samac.dev
						</Link>
						<p className="text-gray-400 text-sm">
							Crafting elegant digital experiences through clean code and thoughtful design.
						</p>
					</div>

					<div className="md:col-span-1">
						<h3 className="text-white font-medium mb-4">Navigation</h3>
						<ul className="space-y-2">
							{['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
								<li key={item}>
									<Link
										to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
										className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
									>
										<span className="w-0 h-[1px] bg-cyan-400 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="md:col-span-1">
						<h3 className="text-white font-medium mb-4">Services</h3>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>Full-Stack Development</li>
							<li>Frontend Architecture</li>
							<li>UI/UX Implementation</li>
							<li>Performance Optimization</li>
						</ul>
					</div>

					<div className="md:col-span-1">
						<h3 className="text-white font-medium mb-4">Connect</h3>
						<p className="text-gray-400 text-sm mb-4">
							Have a project in mind or want to chat?
						</p>
						<motion.a
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
							href="mailto:nemanja@samac.dev"
							className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white text-sm font-medium rounded-full transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
						>
							<FaEnvelope size={14} />
							<span>Get In Touch</span>
						</motion.a>

						<div className="flex gap-4 mt-6 text-cyan-400 text-lg">
							<motion.a
								whileHover={{ y: -3, color: "#ffffff", scale: 1.1 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
								href="https://github.com/nemanjasamac"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition hover:shadow-lg"
							>
								<FaGithub />
							</motion.a>
							<motion.a
								whileHover={{ y: -3, color: "#ffffff", scale: 1.1 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
								href="https://www.linkedin.com/in/nemanja-samac/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition"
							>
								<FaLinkedin />
							</motion.a>
							<motion.a
								whileHover={{ y: -3, color: "#ffffff", scale: 1.1 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
								href="https://x.com/SamacDev"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition"
							>
								<FaTwitter />
							</motion.a>
						</div>
					</div>
				</div>

				<div className="pt-8 flex flex-col md:flex-row justify-between items-center">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="text-gray-500 text-sm"
					>
						© {currentYear} Nemanja Samac. All rights reserved.
					</motion.div>

					<div className="mt-4 md:mt-0">
						<motion.div
							initial={{ width: 0 }}
							whileInView={{ width: '100%' }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="h-[1px] w-full md:w-[180px] bg-gradient-to-r from-cyan-400/40 via-blue-500/20 to-transparent mb-4"
						/>
						<p className="text-[12px] text-gray-500">
							Made with ❤️ exploring digital space
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}