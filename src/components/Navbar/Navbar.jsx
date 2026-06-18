import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav id="nav">
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
            <a href="#contact" className="nav-cta">
              Get Started
            </a>
          </li>
        </ul>

        <button
          className="hbg"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <b></b><b></b><b></b>
        </button>
      </nav>

      <MobileMenu open={open} />
    </>
  );
}