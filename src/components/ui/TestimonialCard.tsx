import React from 'react';
import { Quote } from 'lucide-react';
import HoloCard from './HoloCard';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  image,
  delay = 0
}) => {
  return (
    <HoloCard delay={delay} className="h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="text-primary-400 mb-4">
          <Quote size={24} />
        </div>
        
        <p className="text-gray-300 italic mb-6 flex-grow">"{quote}"</p>
        
        <div className="flex items-center mt-auto">
          {image ? (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-holographic-border">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary-900/50 flex items-center justify-center mr-4 border border-holographic-border">
              <span className="text-primary-300 font-medium text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
          
          <div>
            <p className="font-medium text-white">{name}</p>
            <p className="text-gray-400 text-sm">{title}</p>
          </div>
        </div>
      </div>
    </HoloCard>
  );
};

export default TestimonialCard;