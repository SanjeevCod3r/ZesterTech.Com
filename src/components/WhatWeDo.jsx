import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  LayoutGrid,
  Cloud,
  Smartphone,
  Briefcase,
  Rocket
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Crafting responsive, scalable, and secure web applications using modern technologies.',
    features: [
      'Custom web solutions',
      'Frontend & Backend development',
      'Performance optimization',
      'SEO best practices'
    ]
  },
  {
    icon: LayoutGrid,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user experiences that convert visitors into customers.',
    features: [
      'Modern design systems',
      'User research & testing',
      'Responsive layouts',
      'Brand consistency'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Building scalable cloud infrastructure and integrating AWS services for optimal performance.',
    features: [
      'AWS deployment',
      'Serverless architecture',
      'Data management',
      'Auto-scaling'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Developing native and cross-platform mobile applications for iOS and Android.',
    features: [
      'Native performance',
      'Push notifications',
      'Offline capabilities',
      'App store optimization'
    ]
  },
  {
    icon: Briefcase,
    title: 'Business Solutions',
    description: 'Tailored digital solutions to streamline your business processes and boost efficiency.',
    features: [
      'Custom software',
      'Workflow automation',
      'Integration services',
      'Data analytics'
    ]
  },
  {
    icon: Rocket,
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions to grow your online presence and reach your target audience.',
    features: [
      'SEO optimization',
      'Social media marketing',
      'Content strategy',
      'Performance tracking'
    ]
  }
];

// Define animation variants
const cardVariants = {
  initial: {},
  hover: {}
};

const iconVariants = {
  initial: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 rounded"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We specialize in delivering comprehensive digital solutions that drive business growth and innovation.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileHover="hover"
              variants={cardVariants}
              className="bg-black rounded-2xl p-6 hover:bg-gray-900 transition-colors border border-gray-800 group"
            >
              {/* Icon rotates when card is hovered */}
              <motion.div
                variants={iconVariants}
                className="flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-6"
              >
                <service.icon className="w-8 h-8 text-black" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              <div className="text-white">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center mb-2">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
