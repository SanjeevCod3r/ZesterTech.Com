import React, { useEffect } from 'react'
import Mission from '../components/aboutus/Mission';
import Values from '../components/aboutus/Values';
import Benefits from '../components/aboutus/Benefit';
import Milestones from '../components/aboutus/Milestone';
import Ceo from '../components/aboutus/Ceo';
import Team from '../components/aboutus/Team'; 
import FollowUs from "../components/FollowUs";
import SocialMediaLinks from "../components/SocialMediaLinks";
import ContactDetails from "../components/ContactDetails";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Mission />
      <Values />
      <Benefits />
      <Ceo />
      <Team />
      <Milestones />
      <FollowUs />
      <SocialMediaLinks />
      <ContactDetails />
    </div>
  )
}

export default About
