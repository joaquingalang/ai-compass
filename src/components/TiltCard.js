import React, { useRef, useEffect } from "react";

/**
 * TiltCard
 *
 * Props:
 * - children: ReactNode (content inside the card)
 * - maxTilt: number (degrees) default 15
 * - perspective: number (px) default 1000
 * - scale: number default 1.03
 * - transitionSpeed: number (ms) default 300
 * - glare: boolean default false (adds a subtle moving glare)
 * - className: string extra tailwind classes for the wrapper
 */
export default function TiltCard({
  children,
  maxTilt = 2,
  perspective = 2000,
  scale = 1.03,
  transitionSpeed = 500,
  glare = false,
  className = "",
}) {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef({
    mouseX: 0,
    mouseY: 0,
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    progress: 0, // 0..1 -> used for transitions
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function updateBounds() {
      const rect = el.getBoundingClientRect();
      stateRef.current.width = rect.width;
      stateRef.current.height = rect.height;
      stateRef.current.left = rect.left + window.scrollX;
      stateRef.current.top = rect.top + window.scrollY;
    }

    function handleMove(e) {
      const isTouch = e.type.startsWith("touch");
      const clientX = isTouch ? e.touches[0].clientX : e.clientX;
      const clientY = isTouch ? e.touches[0].clientY : e.clientY;

      stateRef.current.mouseX = clientX - stateRef.current.left;
      stateRef.current.mouseY = clientY - stateRef.current.top;

      // start RAF loop if not running
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animate);
    }

    function handleLeave() {
      // reset values smoothly
      stateRef.current.mouseX = stateRef.current.width / 2;
      stateRef.current.mouseY = stateRef.current.height / 2;
      // trigger RAF one more time for reset
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animateReset);
    }

    function animate() {
      const { mouseX, mouseY, width, height } = stateRef.current;
      // map mouse to -1..1
      const px = (mouseX / width) * 2 - 1;
      const py = (mouseY / height) * 2 - 1;

      const tiltX = py * maxTilt * -1; // invert so moving up tilts toward user
      const tiltY = px * maxTilt;

      const transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;

      el.style.transition = `transform ${transitionSpeed}ms cubic-bezier(.03,.98,.52,.99)`;
      el.style.transform = transform;

      // glare update (if present)
      if (glare) {
        const glareEl = el.querySelector(".tilt-glare");
        if (glareEl) {
          // place glare based on cursor position (0..100%)
          const gx = (mouseX / width) * 100;
          const gy = (mouseY / height) * 100;
          glareEl.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.22), rgba(255,255,255,0.04) 20%, rgba(255,255,255,0) 40%)`;
        }
      }

      // end RAF
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    function animateReset() {
      el.style.transition = `transform ${transitionSpeed}ms cubic-bezier(.2,.9,.3,1)`;
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;

      if (glare) {
        const glareEl = el.querySelector(".tilt-glare");
        if (glareEl) glareEl.style.background = "transparent";
      }

      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    // set initial bounds and center mouse
    updateBounds();
    stateRef.current.mouseX = stateRef.current.width / 2;
    stateRef.current.mouseY = stateRef.current.height / 2;

    // events
    window.addEventListener("resize", updateBounds);
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("touchmove", handleMove, { passive: true });
    el.addEventListener("touchend", handleLeave);

    return () => {
      window.removeEventListener("resize", updateBounds);
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("touchmove", handleMove);
      el.removeEventListener("touchend", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [maxTilt, perspective, scale, transitionSpeed, glare]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        // pointerEvents left as default so children can be interactive
      }}
    >
      {/* inner wrapper to apply transform & background/shadow */}
      <div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          transition: `transform ${transitionSpeed}ms`,
        }}
      >
        {glare && (
          <div
            className="tilt-glare pointer-events-none absolute inset-0 rounded-xl"
            style={{ mixBlendMode: "screen", background: "transparent" }}
          />
        )}

        {/* content slot */}
        <div className="relative rounded-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
