import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Package, Heart } from 'lucide-react';
import CountUp from './Contup';

const milestones = [
  {
    icon: Package,
    title: 'Projects Deployed',
    value: 12,
    description: 'Successful deployments across platforms',
  },
  {
    icon: Users,
    title: 'Active Users',
    value: 12000,
    description: 'Engaged early adopters',
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    value: 95,
    description: '% positive feedback from users',
  },
  {
    icon: Rocket,
    title: 'Team Members',
    value: 20,
    description: 'Passionate startup crew',
  },
];

export default function Milestones() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Startup Journey</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Milestones marking our growth and ambitions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={milestone.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-12 h-12 text-black" />
                </div>
                <h3 className="text-5xl font-bold text-black mb-4">
                  <CountUp from={0} to={milestone.value} duration={2} separator="," />
                  {milestone.title === 'Customer Satisfaction' ? '%' : ''}
                </h3>
                <p className="text-2xl font-semibold mb-3">{milestone.title}</p>
                <p className="text-gray-600 text-lg">{milestone.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
