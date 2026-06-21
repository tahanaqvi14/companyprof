import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { number: "01", name: "WhatsApp Bot", tags: ["Automation", "Customer Support"] },
  { number: "02", name: "Instagram Bot", tags: ["Social Media", "Growth"] },
  { number: "03", name: "Web Development", tags: ["Frontend", "Backend"] },
  { number: "04", name: "SEO Optimization", tags: ["Rankings", "Traffic"] },
  { number: "05", name: "UI/UX Design", tags: ["Design", "Prototyping"] },
  { number: "06", name: "API Integration", tags: ["Backend", "Automation"] },
];

export default function Services() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* WORD REVEAL */
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

      /* SERVICES */
      gsap.utils.toArray(".srv-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            delay: i * 0.05,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      /* SUB TEXT */
      gsap.fromTo(
        ".srv-sub",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".srv-sub",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

    }, sectionRef);

    // 🔥 IMPORTANT FIX
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="services" ref={sectionRef}>
      <div className="srv-top">
        <div>
          <div className="sec-eyebrow">What We Do</div>

          <h2 className="sec-h">
            <span className="ww"><span>Our</span></span>{" "}
            <span className="ww"><span>Services</span></span>
          </h2>
        </div>

        <p className="srv-sub reveal-up">
          Everything your business needs to win online — under one roof.
        </p>
      </div>

      <div className="srv-list">
        {services.map((item) => (
          <ServiceCard key={item.number} {...item} />
        ))}
      </div>
    </section>
  );
}