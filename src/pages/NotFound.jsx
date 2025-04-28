import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {

	return (
		<section className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 overflow-hidden">
			<div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[200px] opacity-20 animate-[var(--animation-slow-float)] -z-10" />
			<div className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] bg-cyan-400 rounded-full blur-[180px] opacity-15 animate-[var(--animation-slow-float-reverse)] -z-10" />

			<div
				className="absolute w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-[80px] pointer-events-none"
				style={{
					transition: 'transform 0.2s'
				}}
			/>

			{[...Array(12)].map((_, i) => (
				<div
					key={i}
					className="absolute w-1 h-1 bg-white rounded-full animate-[var(--animation-twinkle)]"
					style={{
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
						opacity: Math.random() * 0.7 + 0.3,
						animationDelay: `${Math.random() * 3}s`,
						animationDuration: `${Math.random() * 2 + 1}s`
					}}
				/>
			))}

			<div className="max-w-2xl mx-auto z-10 text-center">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="mb-6"
				>
					<motion.div
						animate={{
							rotate: [0, 10, 0, -10, 0],
							scale: [1, 1.1, 1, 1.1, 1],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: "easeInOut"
						}}
						className="relative inline-block"
					>
						<span className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">404</span>
						<div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl opacity-80 animate-[var(--animation-slow-float)]" />
						<div className="absolute -bottom-5 -left-5 w-16 h-16 bg-blue-500/20 rounded-full blur-xl opacity-60 animate-[var(--animation-slow-float-reverse)]" />
					</motion.div>
				</motion.div>

				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="text-3xl font-bold text-white mb-4"
				>
					Lost in <span className="text-cyan-400">Digital Space</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.6 }}
					className="text-gray-300 mb-8 max-w-lg mx-auto"
				>
					The page you're looking for has drifted into the digital void or hasn't been launched yet.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="flex justify-center gap-6 flex-wrap"
				>
					<Link
						to="/"
						className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 relative group overflow-hidden"
					>
						<span className="relative z-10">Return Home</span>
						<motion.span
							initial={{ scale: 0, opacity: 0 }}
							whileHover={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.3 }}
							className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"
						/>
					</Link>

					<Link
						to="/projects"
						className="inline-flex items-center gap-2 px-7 py-3 bg-white/5 border border-white/10 hover:border-cyan-400/30 text-white rounded-full backdrop-blur-sm transition-all duration-300"
					>
						<span>View Projects</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</Link>
				</motion.div>
			</div>

			<motion.div
				className="absolute opacity-30 pointer-events-none"
				animate={{ rotate: 360 }}
				transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
				style={{ width: '600px', height: '600px' }}
			>
				<motion.div
					className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full blur-[2px]"
				/>
				<div className="absolute w-full h-full rounded-full border border-white/5" />
			</motion.div>
		</section>
	);
}