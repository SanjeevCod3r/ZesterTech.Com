import React from "react";
import Hero from "../components/Hero";
import Reel from "../components/Reel";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Philosophy from "../components/Philosophy";
import FollowUs from "../components/FollowUs";
import SocialMediaLinks from "../components/SocialMediaLinks";
import ContactDetails from "../components/ContactDetails";

const Home = () => {
  return (
    <>
      <Hero />
      <Reel />
      <Services />
      <Projects />
      <Philosophy />
      <FollowUs />
      <SocialMediaLinks />
      <ContactDetails />
    </>
  );
};

export default Home;
