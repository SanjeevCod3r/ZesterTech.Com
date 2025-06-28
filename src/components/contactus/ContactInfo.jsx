import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactInfoItem from './InfoItem';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 8601329877',
    link: 'tel:+918601329877',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'support@zestertech.com',
    link: 'mailto:support@zestertech.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: 'Bakshi House, 40-41, near Chiranjiv Tower, Nehru Place, New Delhi, Delhi 110019',
    link: 'https://maps.app.goo.gl/DAky2kqA8HQmxxEU8',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Tue-Sun: 9 AM - 8:30 PM',
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-sm"
    >
      <h2 className="text-2xl font-bold mb-8">Our Office</h2>
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <ContactInfoItem key={index} {...info} />
        ))}
      </div>
    </motion.div>
  );
}