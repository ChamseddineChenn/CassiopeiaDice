'use client';

import { useEffect, useRef } from 'react';

const TRAIL_LENGTH = 80;
const FADE_DURATION = 600;

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const points: { x: number; y: number; time: number }[] = [];
    let animationId: number;
    let hueOffset = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      const last = points[points.length - 1];
      // Only add point if moved enough distance for smooth spacing
      if (last) {
        const dx = e.clientX - last.x;
        const dy = e.clientY - last.y;
        if (dx * dx + dy * dy < 9) return;
      }
      points.push({ x: e.clientX, y: e.clientY, time: Date.now() });
      if (points.length > TRAIL_LENGTH) points.shift();
    };
    window.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hueOffset = (hueOffset + 0.15) % 360;

      const now = Date.now();

      // Prune old points
      while (points.length > 0 && now - points[0].time > FADE_DURATION) {
        points.shift();
      }

      if (points.length < 3) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      // Draw a single smooth curve through all points
      for (let i = 1; i < points.length; i++) {
        const t = i / (points.length - 1); // 0 = tail, 1 = head
        const age = (now - points[i].time) / FADE_DURATION;
        const fadeIn = Math.pow(t, 0.6);
        const fadeOut = 1 - age;
        const alpha = fadeIn * fadeOut * 0.25;

        if (alpha <= 0) continue;

        // Smoothly cycle hue: violet (275) → blue (220) → back
        const hue =
          275 + 55 * Math.sin(t * Math.PI + (hueOffset * Math.PI) / 180);

        // Very thin line that tapers
        const width = fadeIn * 1.8 * fadeOut;

        const prev = points[i - 1];
        const curr = points[i];

        // Use quadratic curve for smoothness when possible
        if (i < points.length - 1) {
          const next = points[i + 1];
          const cpx = curr.x;
          const cpy = curr.y;
          const endx = (curr.x + next.x) / 2;
          const endy = (curr.y + next.y) / 2;

          ctx.beginPath();
          ctx.moveTo((prev.x + curr.x) / 2, (prev.y + curr.y) / 2);
          ctx.quadraticCurveTo(cpx, cpy, endx, endy);
        } else {
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(curr.x, curr.y);
        }

        ctx.strokeStyle = `hsla(${hue}, 50%, 70%, ${alpha})`;
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    />
  );
}
