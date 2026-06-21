import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // subtitle animation
      gsap.to(".proj-sub", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "expo",
        scrollTrigger: {
          trigger: ".proj-sub",
          start: "top 88%",
          once: true,
        },
      });

      // cards animation
      gsap.utils.toArray(".proj-card").forEach((card, i) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay: i * 0.08,
          ease: "expo",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
          onComplete: () => {
            gsap.to(
              card.querySelectorAll(".proj-cat span, .proj-name span"),
              {
                y: "0%",
                duration: 0.7,
                stagger: 0.08,
                ease: "expo",
              }
            );
          },
        });
      });

      // magnetic arrow effect
      document.querySelectorAll(".proj-card").forEach((card) => {
        const arrow = card.querySelector(".proj-arrow");

        const onMove = (e) => {
          const b = card.getBoundingClientRect();
          const ax = ((e.clientX - b.left) / b.width - 0.5) * 16;
          const ay = ((e.clientY - b.top) / b.height - 0.5) * 16;

          gsap.to(arrow, {
            x: ax,
            y: ay,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        const onLeave = () => {
          gsap.to(arrow, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="proj-top">
        <div>
          <div className="sec-eyebrow">Selected Work</div>

          <h2 className="sec-h">
            <span className="ww"><span>Recent</span></span>&nbsp;
            <span className="ww"><span>Projects</span></span>
          </h2>
        </div>

        <p className="proj-sub" style={{ opacity: 0, transform: "translateY(20px)" }}>
          A few builds we're proud of — bots, sites, and systems shipped for real businesses.
        </p>
      </div>

      <div className="proj-grid">
        <div
          className="proj-card big"
          style={{ "--proj-c1": "#0a6649", "--proj-c2": "#07090d" }}
        >
          <div className="proj-media">
            <div className="proj-grid-deco" />
          </div>
          <span className="proj-arrow">↗</span>

          <div className="proj-overlay">
            <div className="proj-cat"><span style={{ display: "inline-block", transform: "translateY(100%)" }}>WhatsApp Automation</span></div>
            <div className="proj-name"><span style={{ display: "inline-block", transform: "translateY(100%)" }}>FastCourier Bot</span></div>
            <p className="proj-desc">
              An order-tracking WhatsApp bot that cut customer support tickets by 60% for a logistics company.
            </p>
            <div className="proj-tags">
              <span>Node.js</span>
              <span>WhatsApp API</span>
              <span>Webhooks</span>
            </div>
          </div>
        </div>

        <div className="proj-card" style={{ "--proj-c1": "#1a3a8f", "--proj-c2": "#07090d" }}>
          <div className="proj-media"><div className="proj-grid-deco" /></div>
          <span className="proj-arrow">↗</span>

          <div className="proj-overlay">
            <div className="proj-cat"><span style={{ transform: "translateY(100%)", display: "inline-block" }}>Instagram Growth</span></div>
            <div className="proj-name"><span style={{ transform: "translateY(100%)", display: "inline-block" }}>NutriPak DM Bot</span></div>
            <p className="proj-desc">
              Auto-DM and comment system that grew an account from 2K to 18K followers in 4 months.
            </p>
            <div className="proj-tags">
              <span>Meta API</span>
              <span>Automation</span>
            </div>
          </div>
        </div>

        <div className="proj-card" style={{ "--proj-c1": "#8a4b0a", "--proj-c2": "#07090d" }}>
          <div className="proj-media"><div className="proj-grid-deco" /></div>
          <span className="proj-arrow">↗</span>

          <div className="proj-overlay">
            <div className="proj-cat"><span style={{ transform: "translateY(100%)", display: "inline-block" }}>Web Development</span></div>
            <div className="proj-name"><span style={{ transform: "translateY(100%)", display: "inline-block" }}>StyleSpace E-Store</span></div>
            <p className="proj-desc">
              A fast, SEO-first storefront that pushed an unranked brand to page one on Google in 3 months.
            </p>
            <div className="proj-tags">
              <span>Next.js</span>
              <span>SEO</span>
            </div>
          </div>
        </div>

        <div className="proj-card big" style={{ "--proj-c1": "#0d6b8f", "--proj-c2": "#07090d" }}>
          <div className="proj-media"><div className="proj-grid-deco" /></div>
          <span className="proj-arrow">↗</span>

          <div className="proj-overlay">
            <div className="proj-cat"><span style={{ transform: "translateY(100%)", display: "inline-block" }}>Platform Redesign</span></div>
            <div className="proj-name"><span style={{ transform: "translateY(100%)", display: "inline-block" }}>HealthTrack Dashboard</span></div>
            <p className="proj-desc">
              A complete UI/UX overhaul of a healthcare SaaS platform, lifting conversion rate by 42%.
            </p>
            <div className="proj-tags">
              <span>React</span>
              <span>UI/UX</span>
              <span>API Integration</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Process;