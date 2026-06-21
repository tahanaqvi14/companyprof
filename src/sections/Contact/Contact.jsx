import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  useEffect(() => {
    gsap.to(".cl-tagline", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".cl-tagline",
        start: "top 88%",
        once: true,
      },
    });

    gsap.utils.toArray(".cl-item-big").forEach((el, i) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      });
    });

    gsap.to(".contact-final-cta", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".contact-final-cta",
        start: "top 92%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="section" id="contact">
      <div
        className="sec-eyebrow"
        style={{ justifyContent: "center" }}
      >
        Let's Work Together
      </div>

      <h2
        className="sec-h"
        style={{ textAlign: "center", margin: "0 auto" }}
      >
        <span className="ww">
          <span>Start</span>
        </span>{" "}
        <span className="ww">
          <span>your project</span>
        </span>
      </h2>

      <p
        className="cl-tagline"
        style={{
          textAlign: "center",
          maxWidth: "480px",
          margin: "1.2rem auto 0",
        }}
      >
        Got a project in mind? We'd love to hear about it. Reach out through
        whichever channel works best for you.
      </p>

      <div className="contact-cta-row">
        <a
          href="https://wa.me/923001234567"
          className="cl-item-big"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="cl-ico-big">💬</span>
          <span className="cl-big-text">
            <span className="cl-big-lbl">WhatsApp</span>
            <span className="cl-big-val">+92 300 123 4567</span>
          </span>
          <span className="cl-big-arrow">↗</span>
        </a>

        <a className="cl-item-big">
          <span className="cl-ico-big">📧</span>
          <span className="cl-big-text">
            <span className="cl-big-lbl">Email</span>
            <span className="cl-big-val">hello@tama.pk</span>
          </span>
          <span className="cl-big-arrow">↗</span>
        </a>

        <a
          href="https://instagram.com/tama.pk"
          className="cl-item-big"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="cl-ico-big">📷</span>
          <span className="cl-big-text">
            <span className="cl-big-lbl">Instagram</span>
            <span className="cl-big-val">@tama.pk</span>
          </span>
          <span className="cl-big-arrow">↗</span>
        </a>

        <div className="cl-item-big" style={{ cursor: "default" }}>
          <span className="cl-ico-big">📍</span>
          <span className="cl-big-text">
            <span className="cl-big-lbl">Location</span>
            <span className="cl-big-val">Karachi, Pakistan</span>
          </span>
        </div>
      </div>
    </section>
  );
}