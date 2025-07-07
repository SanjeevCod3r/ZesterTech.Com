import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We provide a wide range of digital solutions including web development, mobile app development, UI/UX design, and cloud services integration.',
    icon: '💻'
  },
  {
    question: 'How do you ensure project success?',
    answer: 'Our proven methodology includes clear communication, regular milestones, and agile development practices to ensure successful project delivery.',
    icon: '🎯'
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with modern technologies including React, Node.js, AWS, and various cloud platforms to deliver scalable solutions.',
    icon: '🔧'
  },
  {
    question: 'Can you handle enterprise-level projects?',
    answer: 'Absolutely! We have experience working with enterprise clients and can scale our solutions to meet your business needs.',
    icon: '🏢'
  },
  {
    question: 'What is your development process?',
    answer: 'Our process includes discovery, design, development, testing, and deployment phases. We maintain transparency throughout the project.',
    icon: '🔄'
  },
  {
    question: 'How do you ensure security?',
    answer: 'We implement industry-standard security practices, regular audits, and follow AWS security best practices to protect your data.',
    icon: '🔒'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6 rounded"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? We've got answers. Explore our FAQ section to learn more about our services and processes.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-2xl overflow-hidden transition-colors"
            >
              {/* Button */}
              <button
                className="w-full flex items-center justify-between text-left p-5 bg-black text-white hover:bg-gray-900"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{faq.icon}</span>
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-white transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expandable answer section */}
              <motion.div
                initial={false}
                animate={{
                  height:
                    activeIndex === index
                      ? contentRefs.current[index]?.scrollHeight ?? 'auto'
                      : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-black text-white"
              >
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="px-5 pb-5"
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
