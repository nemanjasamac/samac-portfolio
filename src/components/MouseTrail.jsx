import { useEffect, useRef } from 'react';

export default function MouseTrail() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		let particles = [];
		const mouse = {
			x: undefined,
			y: undefined,
			radius: 100,
			lastMoved: Date.now(),
			isActive: false
		};

		let curveThreshold = window.innerHeight * 0.75;

		window.addEventListener('mousemove', (e) => {
			mouse.x = e.x;
			mouse.y = e.y;
			mouse.lastMoved = Date.now();
			mouse.isActive = true;

			if (mouse.y < curveThreshold) {
				for (let i = 0; i < 3; i++) {
					particles.push({
						x: mouse.x,
						y: mouse.y,
						size: Math.random() * 2 + 0.5,
						color: `rgba(0, 211, 241, ${Math.random() * 0.5 + 0.2})`,
						speedX: Math.random() * 2 - 1,
						speedY: Math.random() * 2 - 1,
						life: 30
					});
				}
			}
		});

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const now = Date.now();
			const isRecentlyActive = now - mouse.lastMoved < 1500;

			if ((mouse.isActive && isRecentlyActive) || particles.length > 0) {
				for (let i = 0; i < particles.length; i++) {
					let p = particles[i];
					ctx.fillStyle = p.color;
					ctx.beginPath();
					ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
					ctx.fill();

					p.x += p.speedX;
					p.y += p.speedY;
					p.life--;

					if (p.life <= 0) {
						particles.splice(i, 1);
						i--;
					}
				}
			}

			requestAnimationFrame(animate);
		}

		animate();

		function handleResize() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			curveThreshold = window.innerHeight * 0.75;
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('mousemove', () => { });
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full z-30 pointer-events-none"
		/>
	);
}