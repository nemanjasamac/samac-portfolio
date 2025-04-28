import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import SkillsPage from './pages/Skills';
import ProjectsPage from './pages/Projects';
import SpaceDots from './components/SpaceDots';
import MouseTrail from './components/MouseTrail';
import CTASection from './sections/CTASection';
import SingleProject from './pages/SingleProject';
import CustomCursor, { CursorContext } from './components/CustomCursor';
import NotFound from './pages/NotFound';

function ScrollToTopWithoutScroll() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, [pathname]);

	return null;
}

function PageWrapper({ children }) {
	return <div>{children}</div>;
}

function AppContent() {
	const [loaded, setLoaded] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		const timer = setTimeout(() => {
			setLoaded(true);
			document.body.style.overflow = '';
		}, 800);

		return () => {
			clearTimeout(timer);
			document.body.style.overflow = '';
		};
	}, []);

	const getCurrentPage = () => {
		const path = location.pathname;
		if (path === '/') return 'home';
		return path.substring(1);
	};

	const handleNavigation = (page) => {
		const path = page === 'home' ? '/' : `/${page}`;
		navigate(path);
	};

	const shouldShowFooterAndCTA = () => {
		const knownRoutes = ['/', '/about', '/skills', '/projects', '/contact'];
		const isProjectRoute = location.pathname.startsWith('/projects/');

		if (!knownRoutes.includes(location.pathname) && !isProjectRoute) return false;

		return true;
	};

	return (
		<div className="relative w-full">
			<ScrollToTopWithoutScroll />

			<div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-[#030712] to-[#050505]" />

			{!loaded && (
				<motion.div
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
				>
					<div className="relative w-16 h-16">
						<div className="absolute top-0 left-0 w-full h-full border-4 border-cyan-400 rounded-full opacity-20 animate-ping"></div>
						<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
							<div className="w-2 h-2 bg-cyan-400 rounded-full animate-[pulse_0.8s_infinite]"></div>
						</div>
						<motion.div
							initial={{ width: 0 }}
							animate={{ width: '100%' }}
							transition={{ duration: 0.8 }}
							className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
						/>
					</div>
				</motion.div>
			)}

			<MouseTrail />
			<SpaceDots count={60} color="rgba(0, 211, 241" opacity={0.3} />
			<Header onNavigate={handleNavigation} currentPage={getCurrentPage()} />

			<AnimatePresence mode="wait" initial={false}>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={
						<PageWrapper>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}
							>
								<Home onNavigate={handleNavigation} />
							</motion.div>
						</PageWrapper>
					} />
					<Route path="/about" element={
						<PageWrapper>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<AboutPage />
							</motion.div>
						</PageWrapper>
					} />
					<Route path="/contact" element={
						<PageWrapper>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<ContactPage />
							</motion.div>
						</PageWrapper>
					} />
					<Route path="/skills" element={
						<PageWrapper>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<SkillsPage />
							</motion.div>
						</PageWrapper>
					} />
					<Route path="/projects" element={
						<PageWrapper>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<ProjectsPage />
							</motion.div>
						</PageWrapper>
					} />
					<Route path="/projects/:projectId" element={
						<PageWrapper>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<SingleProject />
							</motion.div>
						</PageWrapper>
					} />
					<Route path="*" element={
						<PageWrapper>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<NotFound />
							</motion.div>
						</PageWrapper>
					} />
				</Routes>
			</AnimatePresence>

			{shouldShowFooterAndCTA() && <CTASection />}
			{shouldShowFooterAndCTA() && <Footer />}
		</div>
	);
}

export default function App() {
	const [cursorVisible, setCursorVisible] = useState(false);
	const [cursorActive, setCursorActive] = useState(false);

	return (
		<CursorContext.Provider value={{
			visible: cursorVisible,
			active: cursorActive,
			setVisible: setCursorVisible,
			setActive: setCursorActive
		}}>
			<CustomCursor />
			<Router>
				<AppContent />
			</Router>
		</CursorContext.Provider>
	);
}
