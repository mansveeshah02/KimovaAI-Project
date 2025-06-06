'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PricingCard: React.FC = () => {
  return (
    <motion.div
      className="bg-white shadow-xl rounded-2xl p-8 max-w-xl mx-auto text-center border border-gray-100"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Tailored Pricing for Your Needs
      </h2>
      <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
        TurboAudit pricing is customized based on your specific use case, company size, and complexity.
        Contact us for a personalized quote whether you are implementing, auditing, or both.
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
        Contact Us for Pricing
      </button>
    </motion.div>
  );
};

export default PricingCard;