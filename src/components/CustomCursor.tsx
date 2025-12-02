import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let pendingX = 0;
    let pendingY = 0;
    let rafId: number | null = null;

    const update = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${pendingX}px`;
        dotRef.current.style.top = `${pendingY}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${pendingX}px`;
        ringRef.current.style.top = `${pendingY}px`;
      }
      if (orbitRef.current) {
        orbitRef.current.style.left = `${pendingX}px`;
        orbitRef.current.style.top = `${pendingY}px`;
      }
      rafId = null;
    };

    const move = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (rafId === null) {
        rafId = requestAnimationFrame(update);
      }
    };

    window.addEventListener("mousemove", move);

    // Use event delegation so dynamically mounted elements are detected (e.g. Hero image)
    const selector = "a, button, img, .cursor-hover-target, .interactive, nav button, nav a, textarea, input[type='text'], input[type='email'], input[type='submit']";

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (target && target.closest(selector)) setHovered(true);
    };

    const onPointerOut = (e: PointerEvent) => {
      const related = (e as any).relatedTarget as Element | null;
      // if we're moving to another element within the selector, keep hovered
      if (related && related.closest && related.closest(selector)) return;
      setHovered(false);
    };

    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${hovered ? "hovered" : ""}`} />
      <div ref={ringRef} className={`cursor-ring ${hovered ? "hovered" : ""}`} />
      <div ref={orbitRef} className={`orbit-container ${hovered ? "hovered" : ""}`}>
        <div className="orbit-rotator">
          <div className="orbit-ball"></div>
          <div className="orbit-ball"></div>
        </div>
      </div>
    </>
  );
}

export default CustomCursor;
