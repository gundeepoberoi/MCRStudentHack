import { useEffect, useRef } from "react";

export default function LightBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  let stars: {
    x: number, y: number, r: number, b: number,
    dx: number, dy: number, db: number,
  }[] = [];

  let frame: number = 0;

  function verify_resize() {
    if(canvasRef.current?.width != window.innerWidth) init();
    return;
  }

  function init() {
    if (canvasRef.current === null) return;

    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    contextRef.current = canvasRef.current.getContext("2d");

    const density = 0.0005;
    generateStars(window.innerWidth * window.innerHeight * density);
  }

  function generateStars(numStars: number) {
    stars = [];
    for (let i=0; i<numStars; i++) {
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      let r = Math.random() * 2;
      let b = Math.random();
      stars.push({
        x: x, y: y, r: r, b: b,
        dx: 0, dy: 0, db: 0,
      });
    }
  }

  function drawStars() {
    if (contextRef.current === null) return;
    if (canvasRef.current === null) return;
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    stars.forEach((star) => {
      if (frame % 30 === 0) {
        star.dx = Math.random() - 0.5;
        star.dy = Math.random() - 0.5;
        star.db = Math.random() - 0.5;
        frame = 0;
      }

      star.x += star.dx;
      star.y += star.dy;
      star.b += star.db;

      if (contextRef.current === null) return;
      contextRef.current.fillStyle = `rgba(255,255,255,${star.b})`;
      contextRef.current.beginPath();
      contextRef.current.arc(
        star.x, star.y, star.r,
        0, Math.PI * 2,
      );
      contextRef.current.fill();
    });
    frame++;
  }

  useEffect(() => {
    init();
    setInterval(drawStars, 50);
    window.addEventListener("resize", verify_resize);
  }, []);

  return (
    <canvas ref={canvasRef} className="overflow-hidden -z-50" />
  );
}
