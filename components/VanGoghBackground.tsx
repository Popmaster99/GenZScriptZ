import React, { useEffect, useRef } from 'react';

const VanGoghBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Background particles (Starry Night sky effect)
    const particles: { x: number; y: number; vx: number; vy: number; life: number; color: string; size: number }[] = [];
    
    // Cursor trail particles (Interactive Swirls)
    const cursorParticles: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; color: string; size: number }[] = [];

    const colors = ['#1a1f3d', '#324a76', '#7da4c7', '#f4c542', '#e89b35', '#2c5282'];
    // Brighter palette for the cursor swirls to make them stand out
    const cursorColors = ['#f4c542', '#e89b35', '#7da4c7', '#a6c6d9', '#ffffff'];

    // Simplex noise-like pseudo-random function for flow field
    const noise = (x: number, y: number) => {
      return Math.sin(x * 0.005) + Math.cos(y * 0.005);
    };

    const initParticles = () => {
      const count = Math.min(window.innerWidth < 768 ? 400 : 1000, 1200);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: 0,
          vy: 0,
          life: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 2 + 1
        });
      }
    };

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Calculate distance moved to determine how many particles to spawn
      const dx = mouseX - prevMouseX;
      const dy = mouseY - prevMouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Spawn particles based on movement
      if (dist > 2) {
        const spawnCount = Math.min(Math.floor(dist / 3) + 1, 4);
        
        for (let i = 0; i < spawnCount; i++) {
          cursorParticles.push({
            x: mouseX + (Math.random() - 0.5) * 15, // Scatter slightly
            y: mouseY + (Math.random() - 0.5) * 15,
            vx: (Math.random() - 0.5) * 1, // Initial random velocity
            vy: (Math.random() - 0.5) * 1,
            life: 1.0,
            maxLife: 1.0,
            color: cursorColors[Math.floor(Math.random() * cursorColors.length)],
            size: Math.random() * 3 + 2
          });
        }
      }
      
      prevMouseX = mouseX;
      prevMouseY = mouseY;
    };

    const animate = () => {
      // Trail effect
      ctx.fillStyle = 'rgba(11, 15, 25, 0.1)'; 
      ctx.fillRect(0, 0, width, height);

      // --- 1. Background Flow Particles ---
      particles.forEach(p => {
        // Calculate flow field angle
        const angle = noise(p.x, p.y) * Math.PI * 4;
        
        // Base velocity from flow field
        p.vx += Math.cos(angle) * 0.1;
        p.vy += Math.sin(angle) * 0.1;

        // Mouse interaction (repel/swirl)
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          const force = (200 - dist) / 200;
          p.vx -= (dx / dist) * force * 0.5;
          p.vy -= (dy / dist) * force * 0.5;
        }

        // Friction
        p.vx *= 0.95;
        p.vy *= 0.95;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.lineCap = 'round';
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 4, p.y - p.vy * 4); 
        ctx.stroke();
      });

      // --- 2. Cursor Swirl Particles ---
      for (let i = cursorParticles.length - 1; i >= 0; i--) {
        const p = cursorParticles[i];
        p.life -= 0.015; // Fade out speed

        if (p.life <= 0) {
          cursorParticles.splice(i, 1);
          continue;
        }

        // Enhanced swirl math for cursor particles
        // We use a tighter noise scale (multiply coords) to create smaller, tighter swirls
        const angle = noise(p.x * 3, p.y * 3) * Math.PI * 4;
        
        p.vx += Math.cos(angle) * 0.3; // Higher acceleration for dynamism
        p.vy += Math.sin(angle) * 0.3;
        
        p.vx *= 0.92; // Drag
        p.vy *= 0.92;
        
        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = p.life; // Fade out
        ctx.lineWidth = p.size * p.life; // Shrink
        ctx.lineCap = 'round';
        
        // Draw elongated stroke
        ctx.moveTo(p.x - p.vx * 3, p.y - p.vy * 3);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        
        ctx.globalAlpha = 1.0; // Reset alpha
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    initParticles();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-80"
    />
  );
};

export default VanGoghBackground;