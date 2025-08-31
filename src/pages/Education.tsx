import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import HoloCard from '../components/ui/HoloCard';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "BSc in Physics",
      institution: "University of Rwanda",
      location: "Kigali, Rwanda",
      period: "2019 - 2023",
      description:
        "Graduated with honors, specializing in material science physics and computational methods. Completed a research project on numerical simulations of quantum systems.",
    },
    {
      degree: "Advanced School in Electronic Structures",
      institution: "ASESMA 2023",
      location: "ICTP-EAIFR",
      period: "2023",
      description:
        "Intensive program focused on electronic structure methods and their applications in computational materials science and physics.",
    },
  ];

  return (
    <div className="py-16 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-20 opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="My academic background and professional development"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <HoloCard animate={false}>
                    <div className="p-6">
                      <h3 className="text-2xl font-rajdhani font-medium text-primary-300 mb-2">
                        {item.degree}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mb-4 gap-y-1 gap-x-4">
                        <div className="flex items-center">
                          <Award size={16} className="mr-1 text-primary-400" />
                          <span>{item.institution}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1 text-primary-400" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1 text-primary-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </HoloCard>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HoloCard animate={false}>
              <div className="p-6">
                <h3 className="text-2xl font-rajdhani font-medium text-primary-300 mb-4">
                  Academic Events
                </h3>

                {/* Embedded YouTube Shorts */}
                <div className="aspect-video rounded-md overflow-hidden border border-holographic-border">
                  <iframe
                    src="https://www.youtube.com/embed/AAN8pYb_QKg"
                    title="Academic Event Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </HoloCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
