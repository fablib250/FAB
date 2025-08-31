import React from 'react';
import { motion } from 'framer-motion';
import HoloCard from './HoloCard';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  logo?: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  organization,
  period,
  description,
  logo,
  index
}) => {
  const isEven = index % 2 === 0;
  const delay = index * 0.1;

  return (
    <div className={`flex flex-col md:flex-row items-center md:items-start relative mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-holographic-border md:left-1/2 md:transform md:-translate-x-1/2 -z-10">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-primary-500/30 via-primary-400/20 to-transparent"></div>
      </div>
      
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay }}
        className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-primary-500 border border-primary-300 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-primary-400 opacity-30"></div>
      </motion.div>
      
      {/* Content */}
      <div className={`md:w-5/12 ${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
        <HoloCard delay={delay}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-rajdhani font-medium text-primary-300">{title}</h3>
              {logo && (
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <img src={logo} alt={organization} className="w-6 h-6 object-contain" />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-300 font-medium">{organization}</p>
              <p className="text-gray-400 text-sm">{period}</p>
              <p className="text-gray-300 mt-2">{description}</p>
            </div>
          </div>
        </HoloCard>
      </div>
    </div>
  );
};

export default TimelineItem;