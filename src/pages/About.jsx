import React, { useEffect } from 'react'
import Mission from '../components/aboutus/Mission';
import Values from '../components/aboutus/Values';
import Benefits from '../components/aboutus/Benefit';
import Milestones from '../components/aboutus/Milestone';
import Team from '../components/aboutus/Team'; 
import FollowUs from "../components/FollowUs";
import SocialMediaLinks from "../components/SocialMediaLinks";
import ContactDetails from "../components/ContactDetails";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Mission />
      <Values />
      <Benefits />
      <Team />
      <Milestones />
      <FollowUs />
      <SocialMediaLinks />
      <ContactDetails />
      <Footer />
    </div>
  )
}

export default About
