import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion } from 'framer-motion';

export const CursorContext = createContext({
	visible: false,
	active: false,
	setVisible: () => { },
	setActive: () => { }
});

export default function CustomCursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [hasMouseMoved, setHasMouseMoved] = useState(false);
	const cursorRef = useRef(null);
	const { visible, active } = useContext(CursorContext);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
			if (!hasMouseMoved) {
				setHasMouseMoved(true);
			}
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [hasMouseMoved]);

	return (
		<motion.div
			ref={cursorRef}
			className="fixed pointer-events-none z-50"
			animate={{
				x: position.x - 40,
				y: position.y - 40,
				scale: active ? 1.2 : 1,
				opacity: visible && hasMouseMoved ? 1 : 0
			}}
			transition={{
				type: "spring",
				damping: 20,
				stiffness: 350,
				mass: 0.5
			}}
		>
			<motion.div
				className="relative w-20 h-20 flex items-center justify-center"
				animate={{ rotate: 360 }}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "linear"
				}}
			>
				<div className="absolute inset-0 rounded-full bg-blue-500 blur-sm opacity-50"></div>

				<div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 
                      shadow-lg shadow-blue-500/50 flex items-center justify-center">
					<motion.div
						className="text-center"
						animate={{
							scale: [1, 1.05, 1],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut"
						}}
					>
						<p className="text-xs uppercase font-bold text-white tracking-wider mb-0">Coming</p>
						<p className="text-lg font-bold text-white leading-none">2025</p>
					</motion.div>
				</div>

				<motion.div
					className="absolute w-full h-full"
					animate={{ rotate: -360 }}
					transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
				>
					<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-white rounded-full"></div>
					<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-white rounded-full"></div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}