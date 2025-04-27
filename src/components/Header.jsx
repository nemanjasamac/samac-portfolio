import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const sections = ['home', 'about', 'skills', 'projects', 'contact'];
const sectionToPath = {
	'home': '/',
	'about': '/about',
	'skills': '/skills',
	'projects': '/projects',
	'contact': '/contact'
};

export default function Header({ onNavigate, currentPage }) {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const headerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (headerRef.current) {
				const rect = headerRef.current.getBoundingClientRect();
				setMousePosition({
					x: e.clientX - rect.left,
					y: e.clientY - rect.top
				});
			}
		};

		const headerElement = headerRef.current;
		if (headerElement) {
			headerElement.addEventListener('mousemove', handleMouseMove);
			return () => {
				headerElement.removeEventListener('mousemove', handleMouseMove);
			};
		}
	}, []);

	const handleNavClick = (section) => {
		if (onNavigate) {
			onNavigate(section);
		}
		if (menuOpen) {
			setMenuOpen(false);
		}
	};

	return (
		<>
			<motion.header
				ref={headerRef}
				className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out overflow-hidden
          ${scrolled
						? 'backdrop-blur-xl bg-gradient-to-r from-black/60 via-white/10 to-black/60 py-1 shadow-lg scale-[0.97] opacity-95'
						: 'backdrop-blur-md bg-white/5 py-3 shadow-xl scale-100 opacity-100'
					} border border-white/10 rounded-full px-8 w-fit items-center justify-between gap-8 hidden md:flex`}
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", duration: 0.8 }}
			>
				<div
					className="absolute pointer-events-none w-[150px] h-[150px] bg-cyan-400/10 rounded-full blur-xl"
					style={{
						left: `${mousePosition.x - 75}px`,
						top: `${mousePosition.y - 75}px`,
						opacity: scrolled ? 0.6 : 0.3,
						transition: 'opacity 0.3s ease'
					}}
				/>

				<Link
					to="/"
					className="relative z-10 text-cyan-400 font-bold text-lg tracking-wide whitespace-nowrap hover:text-cyan-300 transition-colors group"
				>
					<span className="relative">
						Samac.dev
						<motion.span
							initial={{ width: 0 }}
							whileHover={{ width: '100%' }}
							transition={{ duration: 0.3 }}
							className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"
						/>
					</span>
				</Link>

				<nav className="relative z-10 flex items-center gap-4 text-white/80 text-sm">
					{sections.slice(1).map((item) => (
						<Link
							key={item}
							to={sectionToPath[item]}
							onClick={() => handleNavClick(item)}
							className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-all duration-300 
                ${currentPage === item
									? 'bg-gradient-to-r from-cyan-500/30 to-cyan-500/10 text-cyan-300 border-white/10'
									: 'hover:bg-cyan-400/10 hover:text-cyan-300'
								} relative z-10 overflow-hidden group`}
						>
							{item.charAt(0).toUpperCase() + item.slice(1)}
							{currentPage === item && (
								<motion.span
									layoutId="activeSection"
									className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400/60 to-transparent"
									transition={{ type: "spring", stiffness: 380, damping: 30 }}
								/>
							)}
							<span className="absolute inset-0 rounded-full bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]" />
						</Link>
					))}
				</nav>

				<Link
					to="/contact"
					className="relative z-10 ml-2 px-5 py-1.5 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-semibold text-sm rounded-full shadow-md transition-all duration-300 whitespace-nowrap group overflow-hidden"
				>
					<span className="relative z-10">Let's Connect</span>
					<motion.span
						initial={{ x: -10, opacity: 0 }}
						whileHover={{ x: 0, opacity: 1 }}
						transition={{ type: "spring", stiffness: 400, damping: 25 }}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</motion.span>
					<span className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
				</Link>
			</motion.header>

			<motion.div
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.5 }}
				className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden flex items-center justify-between px-6 py-3.5 w-[90%] max-w-[400px] rounded-full backdrop-blur-md bg-gradient-to-r from-black/80 via-black/70 to-black/80 border border-white/10 shadow-lg"
			>
				<Link
					to="/"
					onClick={() => setMenuOpen(false)}
					className="text-cyan-400 font-bold text-lg tracking-wide whitespace-nowrap hover:text-cyan-300 transition"
				>
					Samac.dev
				</Link>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-white/5 border border-white/10"
					onClick={() => setMenuOpen((prev) => !prev)}
					aria-label="Toggle menu"
				>
					<motion.span
						animate={menuOpen ? 'open' : 'closed'}
						variants={{
							open: { rotate: 45, y: 0 },
							closed: { rotate: 0, y: 0 }
						}}
						transition={{ duration: 0.3 }}
						className="absolute w-4 h-0.5 bg-cyan-400"
					/>
					<motion.span
						animate={menuOpen ? 'open' : 'closed'}
						variants={{
							open: { opacity: 0 },
							closed: { opacity: 1 }
						}}
						transition={{ duration: 0.3 }}
						className="absolute w-4 h-0.5 bg-cyan-400"
					/>
					<motion.span
						animate={menuOpen ? 'open' : 'closed'}
						variants={{
							open: { rotate: -45, y: 0 },
							closed: { rotate: 0, y: 0 }
						}}
						transition={{ duration: 0.3 }}
						className="absolute w-4 h-0.5 bg-cyan-400"
					/>
				</motion.button>
			</motion.div>

			{/* Mobile menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						key="mobile-menu"
						initial={{ opacity: 0, clipPath: 'circle(0% at 85% 8%)' }}
						animate={{ opacity: 1, clipPath: 'circle(150% at 85% 8%)' }}
						exit={{ opacity: 0, clipPath: 'circle(0% at 85% 8%)' }}
						transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
						className="fixed inset-0 z-40 bg-gradient-to-b from-black/90 to-black/95 backdrop-blur-md flex flex-col items-center justify-center"
					>
						<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
							{Array.from({ length: 15 }).map((_, i) => (
								<div
									key={i}
									className="absolute rounded-full bg-cyan-500/5"
									style={{
										top: `${Math.random() * 100}%`,
										left: `${Math.random() * 100}%`,
										width: `${Math.random() * 150 + 50}px`,
										height: `${Math.random() * 150 + 50}px`,
										filter: 'blur(40px)',
										opacity: Math.random() * 0.12 + 0.03,
									}}
								/>
							))}
						</div>

						<motion.nav
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 20, opacity: 0 }}
							transition={{ duration: 0.3, delay: 0.2 }}
							className="flex flex-col items-center gap-8 text-white text-2xl"
						>
							{sections.slice(1).map((item, index) => (
								<motion.div
									key={item}
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.1 + index * 0.1 }}
								>
									<Link
										to={sectionToPath[item]}
										onClick={() => {
											setMenuOpen(false);
											handleNavClick(item);
										}}
										className="relative group"
									>
										<span className="text-white group-hover:text-cyan-400 transition-colors">
											{item.charAt(0).toUpperCase() + item.slice(1)}
										</span>
										<motion.span
											initial={{ width: 0 }}
											whileHover={{ width: '100%' }}
											transition={{ duration: 0.3 }}
											className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"
										/>
									</Link>
								</motion.div>
							))}

							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.5 }}
								className="mt-8"
							>
								<Link
									to="/contact"
									onClick={() => setMenuOpen(false)}
									className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-semibold rounded-full shadow-lg group relative overflow-hidden"
								>
									<span className="relative z-10">Let's Connect</span>
									<span className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
								</Link>
							</motion.div>
						</motion.nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
