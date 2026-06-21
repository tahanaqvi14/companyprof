// import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

import Marquee from "./components/Marquee/Marquee";
import Footer from "./components/Footer/Footer";

import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import About from "./sections/About/About";
import Process from "./sections/Process/Process.jsx";
import Testimonials from "./sections/Testimonials/Testimonials";
import Contact from "./sections/Contact/Contact";

// function App() {
//   return (
//     <>
//       <Loader />
//       <Cursor />

//       <Navbar />
//       <MobileMenu />

//       <main>
//         <Hero />
//         <Marquee />
//         <Services />
//         <About />
//         <Process />
//         <Testimonials />
//         <Contact />
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import Loader from "./components/Loader/Loader";
// import HomePage from "./HomePage";
import Cursor from "./components/Cursor/Cursor";

import "./index.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      {!loading && (
        <>
          <Navbar/>
          <Hero />
          <Marquee />
          <Services />
          <About />
          <Process />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}

      <Cursor />

    </>
  );
}