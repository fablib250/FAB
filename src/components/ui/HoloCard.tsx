import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HoloCardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

const HoloCard: React.FC<HoloCardProps> = ({ 
  children, 
  className = '',
  animate = true,
  delay = 0
}) => {
  const variants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: delay
      }
    }
  };

  return (
    <motion.div
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={`holo-panel ${className}`}
    >
      <div className="scan-effect"></div>
      {children}
    </motion.div>
  );
};

export default HoloCard;