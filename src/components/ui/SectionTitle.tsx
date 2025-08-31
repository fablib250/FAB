import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-rajdhani font-semibold text-primary-300 text-glow mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="relative h-0.5 w-24 bg-primary-500 mx-auto mt-4 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-primary-300 animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default SectionTitle;