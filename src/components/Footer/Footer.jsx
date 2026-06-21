import React from "react";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="f-logo">
        Tama<em>.</em>
      </a>

      <ul className="f-nav">
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#process">Process</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <p className="f-copy">© 2025 Tama. All rights reserved.</p>
    </footer>
  );
};

export default Footer;