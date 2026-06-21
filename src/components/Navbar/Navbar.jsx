import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const nav = navRef.current;

    // initial state
    gsap.set(nav, { yPercent: 110, opacity: 1 });

    // intro animation
    gsap.to(nav, {
      yPercent: 0,
      duration: 1,
      ease: "expo.out",
      delay: 0.1,
    });

    setTimeout(() => {
      nav.classList.add("vis");
    }, 50);

    // background on scroll
    const bgTrigger = ScrollTrigger.create({
      start: 60,
      onEnter: () => nav.classList.add("bg"),
      onLeaveBack: () => nav.classList.remove("bg"),
    });

    // hide/show on scroll direction
    let lastDir = 1;

    const hideShowTrigger = ScrollTrigger.create({
      start: 120,
      onUpdate: (self) => {
        if (self.direction !== lastDir) {
          lastDir = self.direction;

          gsap.to(nav, {
            yPercent: self.direction === 1 ? -110 : 0,
            duration: 0.5,
            ease: "expo.out",
          });
        }
      },
    });

    // cleanup
    return () => {
      bgTrigger.kill();
      hideShowTrigger.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <nav id="nav" ref={navRef}>
      <div className="nav-blur"></div>

      <a href="#" className="nav-logo">
        Tama<em>.</em>
      </a>

      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#testi">Clients</a></li>
        <li>
          <a href="#contact" className="nav-cta">Get Started</a>
        </li>
      </ul>
    </nav>
  );
}