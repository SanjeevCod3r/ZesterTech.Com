import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/contactus/ContactForm";
import ContactInfo from "../components/contactus/ContactInfo";
import FollowUs from "../components/FollowUs";
import SocialMediaLinks from "../components/SocialMediaLinks";
import ContactDetails from "../components/ContactDetails";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-9">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </motion.div>
      <FollowUs />
      <SocialMediaLinks />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Contact;
