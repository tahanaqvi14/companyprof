import { useEffect } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  useEffect(() => {
    const dot = document.getElementById("cd");
    const ring = document.getElementById("cr");

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;

    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;

    // Track mouse position
    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", move);

    // Smooth animation loop (better than repeated gsap.to spam)
    const animate = () => {
      // smooth dot (fast)
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;

      // smooth ring (slower)
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      gsap.set(dot, {
        x: dotX,
        y: dotY,
      });

      gsap.set(ring, {
        x: ringX,
        y: ringY,
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Hover effect (magnetic feel)
    const addHoverEffects = () => {
      const targets = document.querySelectorAll("a, button, .hoverable");

      targets.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(ring, {
            scale: 1.8,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(dot, {
            scale: 0.6,
            duration: 0.2,
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(ring, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(dot, {
            scale: 1,
            duration: 0.2,
          });
        });
      });
    };

    addHoverEffects();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div id="cd" />
      <div id="cr" />
    </>
  );
}