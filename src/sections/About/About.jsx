import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StatCard from "./StatCard";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 80, suffix: "+", label: "Projects Delivered" },
  { target: 50, suffix: "+", label: "Happy Clients" },
  { target: 98, suffix: "%", label: "Satisfaction Rate" },
  { target: 5, suffix: "+", label: "Years of Experience" },
];

export default function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* ================= WORD REVEAL ================= */
      gsap.utils.toArray(".ww span").forEach((el) => {
        gsap.fromTo(
          el,
          { y: "110%" },
          {
            y: "0%",
            duration: 0.85,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      /* ================= TEXT ================= */
      gsap.fromTo(
        ".about-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ================= CTA ================= */
      gsap.fromTo(
        ".about-cta",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: ".about-cta",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ================= STATS (BOX ANIMATION) ================= */
      gsap.fromTo(
        ".num-cell",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".nums-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ================= COUNTER ANIMATION ================= */
      gsap.utils.toArray(".num-big").forEach((el) => {
        const t = +el.dataset.t;
        const s = el.dataset.s || "";

        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,

          onEnter: () => {
            const obj = { v: 0 };

            gsap.to(obj, {
              v: t,
              duration: 2,
              ease: "power2.out",

              onUpdate: () => {
                el.textContent = Math.round(obj.v) + s;
              },
            });
          },
        });
      });

    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="about-grid">

        {/* LEFT SIDE */}
        <div className="about-l">
          <div className="sec-eyebrow">Who We Are</div>

          <h2 className="sec-h">
            <span className="ww"><span>Built</span></span>{" "}
            <span className="ww"><span>different,</span></span>
            <br />
            <span className="ww"><span>on purpose</span></span>
          </h2>

          <p className="about-text">
            Tama is a Karachi-based software studio focused on building fast, clean, and impactful digital products.  We don't do bloated agencies or slow timelines — just sharp execution, honest communication, and results you can measure.
          </p>

          <a href="#contact" className="about-cta">
            Work with us <span>→</span>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="nums-grid">
          {stats.map((item, i) => (
            <StatCard key={i} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}