import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import HoloCard from '../components/ui/HoloCard';

const About: React.FC = () => {
  return (
    <div className="py-16 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-20 opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="Learn more about my background, interests, and vision"
        />
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg blur-md"></div>
              <div className="relative rounded-lg overflow-hidden border border-holographic-border">
                <img 
                  src="https://scontent.fkgl2-1.fna.fbcdn.net/v/t39.30808-6/486769758_3973034432944599_3852189868285122673_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeElT_5bAKugmtp5ekDKwAslta41MLWUSWm1rjUwtZRJadsG_gsgWyLAIPWh-4xSJmV6Y51Os5xBk7e4SAV18onG&_nc_ohc=3mrY9frrynAQ7kNvwFvY2Vu&_nc_oc=AdlLLCCxT-Qt94m8qOfG_Bek8nwMzNnKC9KrknI1oGFamGcvu6bqrSFQXiV2qYpt02g&_nc_zt=23&_nc_ht=scontent.fkgl2-1.fna&_nc_gid=2UefccH0d4VTIZAL-pCXkQ&oh=00_AfU2lHodWfAs6fqt69co-0KCArt3i7f9HDP_ZO_blc95Nw&oe=68B75A78" 
                  alt="Dusabimana Muhire Fabrice in lab" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HoloCard animate={false}>
              <div className="p-6">
                <h3 className="text-2xl font-rajdhani font-medium text-primary-300 mb-4">Academic Journey</h3>
                <p className="text-gray-300 mb-4">
                  I am a physicist with a passion for scientific computing, artificial intelligence, and the Internet of Things. My academic journey began at the University of Rwanda, where I earned my BSc in Physics, developing a strong foundation in theoretical and experimental physics.
                </p>
                
                <p className="text-gray-300 mb-4">
                  Throughout my studies, I've been particularly drawn to computational methods in physics, using programming and mathematical modeling to solve complex problems. This intersection of physics and computing has become my primary area of focus and research.
                </p>
                
                <h3 className="text-2xl font-rajdhani font-medium text-primary-300 mt-6 mb-4">Scientific Computing & AI</h3>
                <p className="text-gray-300 mb-4">
                  My interest in scientific computing has led me to explore various domains including numerical simulations, data analysis, and machine learning applications in physics. I'm particularly fascinated by how computational methods can help us understand complex physical systems and natural phenomena.
                </p>
                
                <p className="text-gray-300 mb-4">
                  In the realm of AI and IoT, I've developed projects that combine physical sensors with computational intelligence to create systems that can monitor, analyze, and respond to their environment. These technologies have immense potential to address pressing challenges in areas like climate monitoring, healthcare, and resource management.
                </p>
                
                <h3 className="text-2xl font-rajdhani font-medium text-primary-300 mt-6 mb-4">Vision & Philosophy</h3>
                <p className="text-gray-300">
                  I firmly believe in the power of science and technology to address real-world problems and improve lives. My vision is to continue exploring the frontiers of physics and computing, developing innovative solutions that bridge theoretical science with practical applications. Whether through research, education, or entrepreneurship, I aim to contribute meaningfully to our understanding of the physical world and our ability to interact with it through technology.
                </p>
              </div>
            </HoloCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;