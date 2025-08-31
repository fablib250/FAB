import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HoloCard from './HoloCard';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  delay?: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  issuer,
  date,
  image,
  delay = 0
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HoloCard delay={delay} className="h-full cursor-pointer" animate={true}>
        <div 
          className="p-6 h-full flex flex-col"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="relative h-40 mb-4 overflow-hidden rounded-md border border-holographic-border">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 opacity-0 hover:opacity-100 transition-opacity">
              <button className="holo-button text-sm py-1 px-3 flex items-center gap-1">
                <Eye size={16} />
                <span>View</span>
              </button>
            </div>
          </div>
          
          <h3 className="text-lg font-rajdhani font-medium text-primary-300 mb-1">{title}</h3>
          <p className="text-gray-400 text-sm mb-1">{issuer}</p>
          <p className="text-gray-500 text-xs mt-auto">{date}</p>
        </div>
      </HoloCard>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="holo-panel max-w-3xl w-full max-h-[90vh] overflow-auto p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-xl font-rajdhani font-medium text-primary-300">{title}</h3>
                  <p className="text-gray-400">{issuer} • {date}</p>
                </div>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setIsModalOpen(false)}
                >
                  ✕
                </button>
              </div>
              <div className="rounded-md overflow-hidden border border-holographic-border">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificateCard;