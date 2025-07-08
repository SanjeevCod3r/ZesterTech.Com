import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SEO from "./components/SEO";

const App = () => {
  const getMeta = (path) => {
    const meta = {
      title: "ZesterTech - Digital Solutions & Innovation",
      description: "ZesterTech is a leading digital solutions company providing innovative technology services and products. Empowering businesses through cutting-edge solutions.",
      keywords: "digital solutions, technology services, innovation, web development, software development",
      image: "https://zestertech.com/og-image.jpg",
    };

    switch (path) {
      case "/about":
        return {
          ...meta,
          title: "About ZesterTech - Our Story & Mission",
          description: "Learn about ZesterTech's journey, mission, and vision. Discover how we help businesses transform through digital innovation.",
          keywords: "about us, company story, mission, vision, digital innovation",
        };
      case "/contact":
        return {
          ...meta,
          title: "Contact ZesterTech - Get in Touch",
          description: "Get in touch with ZesterTech. Contact us for digital solutions, technology services, and business inquiries.",
          keywords: "contact us, get in touch, business inquiry, support",
        };
      default:
        return meta;
    }
  };

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <Router>
      <SEO {...getMeta(window.location.pathname)} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
