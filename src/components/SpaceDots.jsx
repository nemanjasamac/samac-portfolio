import { useEffect, useRef } from 'react';

export default function SpaceDots({ count = 40, color = "rgba(0, 211, 241, 0.7)", opacity = 0.3 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationId;
    
    function updateCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    function createDots() {
      return Array.from({ length: count }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * opacity + 0.1,
        pulse: Math.random() * Math.PI * 2, 
        pulseSpeed: Math.random() * 0.02 + 0.005
      }));
    }
    
    let dots = createDots();
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      dots.forEach(dot => {
        dot.pulse += dot.pulseSpeed;
        const pulseFactor = Math.sin(dot.pulse) * 0.3 + 0.7;
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(')', `, ${dot.opacity * pulseFactor})`);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius * 2 * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(')', `, ${dot.opacity * 0.3 * pulseFactor})`);
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    }
    
    function handleResize() {
      updateCanvasSize();
      dots = createDots();
    }
    
    updateCanvasSize();
    animate();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [count, color, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        position: 'fixed',
        zIndex: 0,
        opacity: 0.8,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }}
    />
  );
}