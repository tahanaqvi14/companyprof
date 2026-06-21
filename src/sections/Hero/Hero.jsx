import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import HeroCanvas from "./HeroCanvas";

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".hero-tag", {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".hero-title", {
                opacity: 0,
                y: 60,
                duration: 1,
                delay: 0.2,
                ease: "power4.out",
            });

            gsap.from(".hero-desc", {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.4,
            });

            gsap.from(".hero-btns a", {
                opacity: 0,
                y: 20,
                stagger: 0.15,
                delay: 0.6,
                duration: 0.8,
                ease: "power2.out",
            });

        }, heroRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);

    return (
        <section id="hero" ref={heroRef}>
            <HeroCanvas />

            <div className="hero-tag">
                <span className="hero-tag-dot"></span>
                Software Services Studio · Karachi
            </div>

            <h1 className="hero-title">
                We Build Digital Tools That <span className="teal">Work.</span>
            </h1>

            <p className="hero-desc">
                From WhatsApp bots to high-performance websites  — Tama delivers smart, scalable solutions for businesses ready to grow.
            </p>

            <div className="hero-btns" id="hbtns">
                <a href="#services" className="hbtn hbtn-dark" data-mag><div className="hb-bg"></div><span>Explore Services →</span></a>
                <a href="#contact" className="hbtn hbtn-outline" data-mag><div className="hb-bg"></div><span>Start a Project</span></a>
            </div>
        </section>
    );
}