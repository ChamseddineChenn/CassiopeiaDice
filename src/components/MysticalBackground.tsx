'use client';

import { useEffect, useRef } from 'react';

export default function MysticalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      time += 0.003;
      const w = canvas.width;
      const h = canvas.height;

      // Deep black base
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, w, h);

      // Draw multiple flowing wave layers
      for (let layer = 0; layer < 4; layer++) {
        const layerAlpha = 0.03 + layer * 0.015;
        const speed = (layer + 1) * 0.4;
        const amplitude = 80 + layer * 40;
        const frequency = 0.002 - layer * 0.0003;
        const yOffset = h * (0.25 + layer * 0.18);

        // Violet hue shifts per layer
        const hues = [
          [80, 20, 120], // deep violet
          [120, 40, 160], // medium purple
          [60, 10, 90], // dark plum
          [140, 60, 180], // bright violet
        ];
        const [r, g, b] = hues[layer];

        ctx.beginPath();
        ctx.moveTo(0, h);

        for (let x = 0; x <= w; x += 3) {
          const y =
            yOffset +
            Math.sin(x * frequency + time * speed) * amplitude +
            Math.sin(x * frequency * 2.5 + time * speed * 0.7) *
              (amplitude * 0.4) +
            Math.cos(x * frequency * 0.5 + time * speed * 1.3) *
              (amplitude * 0.3);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(w, h);
        ctx.closePath();

        // Gradient fill for each wave
        const grad = ctx.createLinearGradient(0, yOffset - amplitude, 0, h);
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${layerAlpha * 0.5})`);
        grad.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${layerAlpha})`);
        grad.addColorStop(
          0.7,
          `rgba(${r * 0.5}, ${g * 0.3}, ${b * 0.7}, ${layerAlpha * 0.6})`,
        );
        grad.addColorStop(1, `rgba(5, 5, 8, 0)`);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Floating ambient glow orbs (subtle, no dots/particles)
      for (let i = 0; i < 3; i++) {
        const orbX = w * (0.2 + i * 0.3) + Math.sin(time * 0.5 + i * 2) * 100;
        const orbY = h * (0.3 + i * 0.15) + Math.cos(time * 0.3 + i * 1.5) * 80;
        const orbRadius = 150 + Math.sin(time + i) * 50;

        const orbGrad = ctx.createRadialGradient(
          orbX,
          orbY,
          0,
          orbX,
          orbY,
          orbRadius,
        );
        orbGrad.addColorStop(
          0,
          `rgba(120, 40, 160, ${0.04 + Math.sin(time + i) * 0.015})`,
        );
        orbGrad.addColorStop(0.5, `rgba(80, 20, 120, 0.02)`);
        orbGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = orbGrad;
        ctx.fillRect(
          orbX - orbRadius,
          orbY - orbRadius,
          orbRadius * 2,
          orbRadius * 2,
        );
      }

      // Top-down vignette to keep it very dark at edges
      const vignetteGrad = ctx.createRadialGradient(
        w / 2,
        h / 2,
        w * 0.2,
        w / 2,
        h / 2,
        w * 0.8,
      );
      vignetteGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignetteGrad.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
      ctx.fillStyle = vignetteGrad;
      ctx.fillRect(0, 0, w, h);

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: '#050508' }}
    />
  );
}
