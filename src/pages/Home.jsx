import React from "react";
import Hero from "../components/Hero";
import Reel from "../components/Reel";
import Services from "../components/Services";
import WhatWeDo from "../components/WhatWeDo";
import WhoWeWorkWith from "../components/WhoWeWorkWith";
import Projects from "../components/Projects";
import Philosophy from "../components/Philosophy";
import FAQ from "../components/FAQ";
import FollowUs from "../components/FollowUs";
import SocialMediaLinks from "../components/SocialMediaLinks";
import ContactDetails from "../components/ContactDetails";
import ContactPopup from "../components/ContactPopup";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <ContactPopup />
      
      <Hero />
      <Reel />
      <Projects />
      <WhoWeWorkWith />
      <Philosophy />
      <WhatWeDo />
      <FAQ />
      <Testimonials />
      <FollowUs />
      <SocialMediaLinks />
      <ContactDetails />
    </>
  );
};

export default Home;
