import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  Rocket,
  ShieldCheck,
  Globe,
  Sparkles
} from 'lucide-react';

const clientTypes = [
  {
    icon: Building2,
    title: 'Startups',
    description: 'Helping innovative startups build their digital presence and scale quickly with modern solutions.',
    features: [
      'Agile development',
      'Cost-effective solutions',
      'Scalable architecture',
      'Growth-focused strategy'
    ]
  },
  {
    icon: Users,
    title: 'Small Businesses',
    description: 'Empowering small businesses with digital tools to enhance their online presence and customer engagement.',
    features: [
      'Custom websites',
      'E-commerce solutions',
      'Social media integration',
      'Local SEO optimization'
    ]
  },
  {
    icon: Rocket,
    title: 'Enterprises',
    description: 'Providing enterprise-grade solutions for large organizations with complex requirements.',
    features: [
      'Enterprise architecture',
      'Scalable solutions',
      'Security compliance',
      '24/7 support'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Non-Profits',
    description: 'Supporting non-profit organizations with digital solutions that help them achieve their mission.',
    features: [
      'Donation platforms',
      'Volunteer management',
      'Community engagement',
      'Impact tracking'
    ]
  },
  {
    icon: Globe,
    title: 'Global Clients',
    description: 'Serving international clients with localized solutions and global reach.',
    features: [
      'Multi-language support',
      'Regional compliance',
      'Cross-border solutions',
      'Global deployment'
    ]
  },
  {
    icon: Sparkles,
    title: 'Creative Agencies',
    description: 'Partnering with creative agencies to deliver exceptional digital experiences.',
    features: [
      'Technical expertise',
      'Creative integration',
      'Project collaboration',
      'Quality assurance'
    ]
  }
];

// Motion variants
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const iconVariants = {
  initial: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
};

const WhoWeWorkWith = () => {
  return (
    <section className="py-24 bg-black text-white relative">
      <style>
        {`
          .spark-card {
            position: relative;
            overflow: hidden;
          }

          .spark-card::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            background: conic-gradient(
              from 0deg,
              rgba(255,255,255,0.0) 0%,
              rgba(255,255,255,0.5) 10%,
              rgba(255,255,255,0.0) 20%,
              rgba(255,255,255,0.3) 30%,
              rgba(255,255,255,0.0) 40%,
              rgba(255,255,255,0.2) 50%,
              rgba(255,255,255,0.0) 60%,
              rgba(255,255,255,0.1) 70%,
              rgba(255,255,255,0.0) 100%
            );
            z-index: 0;
            border-radius: 1rem;
            animation: rotate-border 2s linear infinite;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }

          .spark-card:hover::before {
            opacity: 1;
          }

          @keyframes rotate-border {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .spark-content {
            position: relative;
            z-index: 1;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Who We Work With</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 rounded"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We partner with diverse clients across various industries to deliver tailored digital solutions.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={cardVariants}
              viewport={{ once: true }}
              className="spark-card bg-black border border-gray-800 rounded-2xl p-6 group transition-all hover:-translate-y-2"
            >
              <div className="spark-content">
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  className="flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-6"
                >
                  <client.icon className="w-8 h-8 text-black" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-4 text-white">{client.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{client.description}</p>

                <div className="text-white">
                  {client.features.map((feature, i) => (
                    <div key={i} className="flex items-center mb-2">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
