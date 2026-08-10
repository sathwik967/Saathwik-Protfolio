import React, { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export default function CursorEffect() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for the cursor position
  const cursorX = useSpring(-100, { stiffness: 500, damping: 28, mass: 0.5 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150); // offset by half width to center (300px / 2 = 150px)
      cursorY.set(e.clientY - 150);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    // Set initially visible when mouse moves
    const handleFirstMove = () => {
      setIsVisible(true);
      window.removeEventListener("mousemove", handleFirstMove);
    };
    window.addEventListener("mousemove", handleFirstMove);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", handleFirstMove);
    };
  }, [isDesktop, cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-50 mix-blend-screen"
      style={{
        x: cursorX,
        y: cursorY,
        background: "radial-gradient(circle, rgba(163,230,53,0.06) 0%, rgba(132,204,22,0.02) 40%, rgba(255,255,255,0) 70%)",
        opacity: isVisible ? 1 : 0,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
