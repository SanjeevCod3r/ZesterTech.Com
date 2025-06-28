import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Star, Users } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace creativity and modern tech to deliver unique solutions.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Committed to top-tier design, development, and client satisfaction.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We build long-term partnerships through transparency, trust, and teamwork.',
  },
];

export default function Values() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Our Values</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 rounded"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            These core values guide everything we do at ZesterTech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-black p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-center">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}