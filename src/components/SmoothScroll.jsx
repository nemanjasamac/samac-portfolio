import React, { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
	const scrollRef = useRef(null);
	const locomotiveScrollRef = useRef(null);
	const location = useLocation();
	const [scrollDisabled, setScrollDisabled] = useState(false);

	useEffect(() => {
		locomotiveScrollRef.current = new LocomotiveScroll({
			el: scrollRef.current,
			smooth: true,
			smoothMobile: false,
			inertia: 0.1,
			multiplier: 1.0,
			lerp: 0.1,
			smartphone: {
				smooth: false
			},
			tablet: {
				smooth: false,
				breakpoint: 1024
			},
			class: 'is-revealed'
		});

		locomotiveScrollRef.current.on('scroll', ScrollTrigger.update);

		ScrollTrigger.scrollerProxy(scrollRef.current, {
			scrollTop(value) {
				return arguments.length
					? locomotiveScrollRef.current.scrollTo(value, 0, 0)
					: locomotiveScrollRef.current.scroll.instance.scroll.y;
			},
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight
				};
			},
			pinType: scrollRef.current.style.transform ? 'transform' : 'fixed'
		});

		const resizeObserver = new ResizeObserver(() => {
			setTimeout(() => {
				if (locomotiveScrollRef.current) {
					locomotiveScrollRef.current.update();
					ScrollTrigger.refresh();
				}
			}, 300);
		});

		resizeObserver.observe(document.body);
		resizeObserver.observe(scrollRef.current);

		setTimeout(() => {
			if (locomotiveScrollRef.current) {
				locomotiveScrollRef.current.update();
			}
		}, 500);

		return () => {
			if (locomotiveScrollRef.current) {
				locomotiveScrollRef.current.destroy();
				locomotiveScrollRef.current = null;
			}
			ScrollTrigger.getAll().forEach(st => st.kill());
			resizeObserver.disconnect();
		};
	}, []);

	useEffect(() => {
		setScrollDisabled(true);

		document.body.classList.add('scroll-locked');

		if (locomotiveScrollRef.current) {
			locomotiveScrollRef.current.stop();

			locomotiveScrollRef.current.scrollTo(0, { duration: 0, disableLerp: true });

			const timer = setTimeout(() => {
				setScrollDisabled(false);
				document.body.classList.remove('scroll-locked');

				locomotiveScrollRef.current.start();
				locomotiveScrollRef.current.update();
			}, 400);

			return () => clearTimeout(timer);
		}
	}, [location.pathname]);

	return (
		<div
			data-scroll-container
			ref={scrollRef}
			className={`smooth-scroll min-h-screen w-full ${scrollDisabled ? 'pointer-events-none' : ''}`}
		>
			{children}
		</div>
	);
}