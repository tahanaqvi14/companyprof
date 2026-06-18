// Loader.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const fillRef = useRef(null);
  const numRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    // Text reveal animation
    gsap.fromTo(
      textRef.current,
      { y: "105%" },
      {
        y: "0%",
        duration: 0.7,
        ease: "power3.out",
        delay: 0.1,
      }
    );

    // Progress animation
    const progress = { value: 0 };

    gsap.to(progress, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",

      onUpdate: () => {
        const v = Math.round(progress.value);

        if (fillRef.current) {
          fillRef.current.style.transform = `scaleX(${v / 100})`;
        }

        if (numRef.current) {
          numRef.current.textContent = `${v}%`;
        }
      },

      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power3.inOut",
          delay: 0.15,
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
      },
    });
  }, [onComplete]);

  return (
    <div id="loader" ref={loaderRef}>
      <div className="ld-word">
        <span ref={textRef}>Tama.</span>
      </div>

      <div className="ld-bar">
        <div className="ld-fill" ref={fillRef} />
      </div>

      <div className="ld-num" ref={numRef}>
        0%
      </div>
    </div>
  );
}