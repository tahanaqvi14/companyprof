import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "WhatsApp Automation",
  "Instagram Bots",
  "Web Development",
  "SEO Optimization",
  "UI/UX Design",
  "Chatbot Development",
  "API Integration",
  "Digital Marketing",
  "WhatsApp Automation",
  "Instagram Bots",
  "Web Development",
  "SEO Optimization",
  "UI/UX Design",
  "Chatbot Development",
  "API Integration",
  "Digital Marketing",
];

export default function Marquee() {
  const mqRef = useRef(null);
  const wrapperRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const mq = mqRef.current;

    if (!mq) return;

    // marquee animation
    tweenRef.current = gsap.to(mq, {
      x: "-50%",
      duration: 26,
      ease: "none",
      repeat: -1,
    });

    // scroll trigger speed control
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        gsap.to(tweenRef.current, {
          timeScale: 1 + Math.abs(self.getVelocity()) / 500,
          duration: 0.3,
          overwrite: true,
          onComplete: () => {
            gsap.to(tweenRef.current, {
              timeScale: 1,
              duration: 0.8,
            });
          },
        });
      },
    });

    return () => {
      ScrollTrigger.killAll();
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <div className="mqw" ref={wrapperRef}>
      <div className="mqt" id="mq" ref={mqRef}>
        {items.map((item, index) => (
          <span className="mqi" key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}