import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Headphones,
  LayoutGrid,
  ClipboardCheck
} from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: 'Global-Ready Solutions',
    description: 'We design scalable digital products that thrive across global markets.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Our team is available throughout the project—and beyond.',
  },
  {
    icon: LayoutGrid,
    title: 'All-in-One Team',
    description: 'From branding to deployment, we cover every aspect in-house.',
  },
  {
    icon: ClipboardCheck,
    title: 'Proven Methodology',
    description: 'Agile, collaborative, and goal-driven to maximize business impact.',
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Why Choose ZesterTech?
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Experience the difference with our end-to-end digital expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-black/10 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-6 group">
                  <Icon className="w-8 h-8 text-black dark:text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
