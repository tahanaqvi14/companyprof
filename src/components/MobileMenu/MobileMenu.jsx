export default function MobileMenu({ open }) {
  return (
    <div id="mmenu" className={open ? "open" : ""}>
      <a href="#services" className="mml">Services</a>
      <a href="#about" className="mml">About</a>
      <a href="#process" className="mml">Process</a>
      <a href="#testi" className="mml">Clients</a>
      <a href="#contact" className="mml">Contact</a>
    </div>
  );
}