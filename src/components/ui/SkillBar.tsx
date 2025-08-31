import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  level: number; // 0 to 100
  color?: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  skill, 
  level, 
  color = 'primary',
  delay = 0
}) => {
  const colorClasses = {
    primary: 'from-primary-500 to-primary-300',
    secondary: 'from-secondary-500 to-secondary-300',
    accent: 'from-accent-500 to-accent-300',
  };
  
  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{skill}</span>
        <span className="text-primary-400">{level}%</span>
      </div>
      <div className="h-2.5 bg-gray-800/50 rounded-full overflow-hidden border border-gray-700">
        <motion.div 
          className={`h-full rounded-full bg-gradient-to-r ${selectedColor}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay }}
        >
          <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillBar;