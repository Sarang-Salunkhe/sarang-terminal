import { useEffect, useRef } from "react";

const FuturisticBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let time = 0;

    // Wave drawing function
    const drawWave = (color: string, amplitude: number, speed: number, offset: number) => {
      ctx.beginPath();
      ctx.moveTo(0, height / 2);

      for (let x = 0; x < width; x++) {
        const y =
          height / 2 +
          Math.sin(x * 0.003 + time * speed + offset) * amplitude;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = 140;
      ctx.stroke();
    };

    // Minimal Grid
    const drawGrid = () => {
      const isDark = document.documentElement.classList.contains("dark");
      ctx.strokeStyle = isDark
        ? "rgba(0, 255, 255, 0.45)"
        : "rgba(120, 120, 120, 0.20)";


      ctx.lineWidth = isDark ? 1.8 : 1.2;
      ctx.shadowColor = isDark ? "rgba(0, 255, 255, 0.55)" : "transparent";
      ctx.shadowBlur = isDark ? 16 : 0;

      const gap = 80;

      for (let x = 0; x < width; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      time += 0.008;

      const isDark = document.documentElement.classList.contains("dark");

      ctx.fillStyle = isDark
        ? "rgba(5, 8, 25, 0.6)"
        : "rgba(250, 250, 250, 0.6)";
      ctx.fillRect(0, 0, width, height);

      drawGrid();

      if (isDark) {
        drawWave("rgba(0, 255, 255, 0.6)", 160, 0.7, 0);
        drawWave("rgba(255, 0, 212, 0.25)", 130, 0.9, 1.8);
      } else {
        drawWave("rgba(120,120,120,0.22)", 110, 0.6, 0);
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none" />;
};

export default FuturisticBackground;
