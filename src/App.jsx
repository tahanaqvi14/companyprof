// import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
// import MobileMenu from "./components/MobileMenu/MobileMenu";
// import Marquee from "./components/Marquee/Marquee";
// import Footer from "./components/Footer/Footer";

// import Hero from "./sections/Hero/Hero";
// import Services from "./sections/Services/Services";
// import About from "./sections/About/About";
// import Process from "./sections/Process/Process.jsx/index.js";
// import Testimonials from "./sections/Testimonials/Testimonials.jsx/index.js";
// import Contact from "./sections/Contact/Contact.jsx";

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
import HomePage from "./HomePage";
import Cursor from "./components/Cursor/Cursor";

import "./index.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      {!loading && (
        <>
          <Navbar />
          <HomePage />
        </>
      )}

      <Cursor />

    </>
  );
}