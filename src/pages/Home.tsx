import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Code, GitBranch } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import HoloCard from '../components/ui/HoloCard';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-20 opacity-10"></div>
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-rajdhani font-bold text-white leading-tight mb-4">
                  <span className="text-primary-400 text-glow">Dusabimana Muhire</span> Fabrice
                </h1>
                
                <div className="text-xl sm:text-2xl text-gray-300 mb-6 h-16">
                  <TypeAnimation
                    sequence={[
                      'Physicist',
                      2000,
                      'Scientific Computing Specialist',
                      2000,
                      'Innovator',
                      2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="text-primary-300"
                  />
                </div>
                
                <p className="text-gray-400 text-lg mb-8 max-w-lg">
                  Exploring the universe through physics, code, and innovation. Passionate about using science and technology to solve real-world problems.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/projects" className="holo-button">
                    <span>View Projects</span>
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                  
                  <Link to="/contact" className="border border-gray-600 text-gray-300 px-6 py-2 rounded-md hover:text-white hover:border-gray-500 transition-colors">
                    Contact Me
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-50 blur-md animate-pulse"></div>
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-holographic-border">
                  <img
                    src="/img/1.jpg"
                    alt="Dusabimana Muhire Fabrice"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-grid-pattern bg-grid-20 rounded-full border border-holographic-border opacity-80"></div>
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-20 bg-primary-500/20 rounded-full animate-pulse"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Sections */}
      <section className="py-20 bg-gray-900/50 relative">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-20 opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-rajdhani font-semibold text-primary-300 text-glow mb-4"
            >
              Exploring the Intersection of Science & Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 max-w-3xl mx-auto"
            >
              Discover my work and research in physics, scientific computing, and innovative technology solutions.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/projects">
                <HoloCard animate={false} className="h-full hover:scale-[1.02] transition-transform duration-300">
                  <div className="p-6 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-primary-900/50 flex items-center justify-center mb-4 border border-primary-800">
                      <Code size={24} className="text-primary-300" />
                    </div>
                    <h3 className="text-xl font-rajdhani font-medium text-primary-300 mb-3">Scientific Computing</h3>
                    <p className="text-gray-400 mb-4 flex-grow">Exploring computational methods to solve complex physics problems and simulate natural phenomena.</p>
                    <div className="flex items-center text-primary-400 hover:text-primary-300 transition-colors">
                      <span>View Projects</span>
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </HoloCard>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/education">
                <HoloCard animate={false} className="h-full hover:scale-[1.02] transition-transform duration-300">
                  <div className="p-6 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-secondary-900/50 flex items-center justify-center mb-4 border border-secondary-800">
                      <BookOpen size={24} className="text-secondary-300" />
                    </div>
                    <h3 className="text-xl font-rajdhani font-medium text-secondary-300 mb-3">Physics Research</h3>
                    <p className="text-gray-400 mb-4 flex-grow">Investigating fundamental physics principles and applying them to solve real-world challenges.</p>
                    <div className="flex items-center text-secondary-400 hover:text-secondary-300 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </HoloCard>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/experience">
                <HoloCard animate={false} className="h-full hover:scale-[1.02] transition-transform duration-300">
                  <div className="p-6 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-accent-900/50 flex items-center justify-center mb-4 border border-accent-800">
                      <GitBranch size={24} className="text-accent-300" />
                    </div>
                    <h3 className="text-xl font-rajdhani font-medium text-accent-300 mb-3">Innovation & Leadership</h3>
                    <p className="text-gray-400 mb-4 flex-grow">Leading initiatives and developing innovative solutions at the intersection of science and technology.</p>
                    <div className="flex items-center text-accent-400 hover:text-accent-300 transition-colors">
                      <span>View Experience</span>
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </HoloCard>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;