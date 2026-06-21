import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Tama built our WhatsApp bot in under two weeks. Customer support load dropped by 60% overnight. Genuinely impressive work.",
    initials: "AK",
    name: "Ahmed Khan",
    role: "Owner, FastCourier PK",
  },
  {
    text: "Our website went from invisible to page one on Google in 3 months. The SEO strategy was clear, transparent, and it delivered.",
    initials: "SR",
    name: "Sara Raza",
    role: "Founder, StyleSpace",
  },
  {
    text: "The Instagram bot handles all our DMs. We scaled from 2K to 18K followers in 4 months. ROI was visible from week one.",
    initials: "ZM",
    name: "Zaid Mirza",
    role: "Co-founder, NutriPak",
  },
  {
    text: "Tama redesigned our whole platform in three weeks. Conversion rate jumped 42%. They're the only agency we trust now.",
    initials: "FM",
    name: "Fatima Malik",
    role: "CTO, HealthTrack",
  },
  {
    text: "Incredible speed, incredible quality. Our chatbot now handles 80% of customer queries automatically. Tama delivered beyond expectations.",
    initials: "HA",
    name: "Hassan Ali",
    role: "CEO, QuickShop",
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    // duplicate content for infinite scroll
    track.innerHTML += track.innerHTML;

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
    })
    // gsap animation
    tweenRef.current = gsap.to(track, {
      xPercent: -50,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    const container = containerRef.current;

    const onEnter = () =>
      gsap.to(tweenRef.current, { timeScale: 0.2, duration: 0.5 });

    const onLeave = () =>
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.6 });

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    
    ScrollTrigger.refresh();
    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      tweenRef.current?.kill();
      ctx.revert();
    };
  }, []);

  return (
    <section id="testi">
      <div className="testi-hd">
        <div className="sec-eyebrow">Client Stories</div>
        <h2 className="sec-h" style={{ color: "white" }}>
          <span className="ww"><span>Trusted</span></span>{" "}
          <span className="ww"><span>by teams</span></span>{" "}
          <span className="ww"><span>that grow</span></span>
        </h2>
      </div>

      <div className="testi-outer" ref={containerRef}>
        <div className="testi-track" id="ttrack" ref={trackRef}>
          {testimonials.map((t, i) => (
            <div className="tc" key={i}>
              <p className="tc-q">{t.text}</p>

              <div className="tc-au">
                <div className="tc-av">{t.initials}</div>
                <div>
                  <div className="tc-nm">{t.name}</div>
                  <div className="tc-rl">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}