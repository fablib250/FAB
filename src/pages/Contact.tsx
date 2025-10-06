import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import HoloCard from '../components/ui/HoloCard';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} className="text-primary-400" />,
      title: "Email",
      info: "muhire.fabrice.2025@bristol.ac.uk",
      link: "mailto:muhire.fabrice.2025@bristol.ac.uk",
    },
    {
      icon: <Phone size={24} className="text-primary-400" />,
      title: "Phone",
      info: "+44 7933 554932",
      link: "tel:+44 7933 554932",
    },
    {
      icon: <MapPin size={24} className="text-primary-400" />,
      title: "Location",
      info: "England, United Kingdom",
      link: "https://maps.google.com/?q=England",
    },
    {
      icon: <Linkedin size={24} className="text-primary-400" />,
      title: "LinkedIn",
      info: "Muhire Fabrice",
      link: "https://linkedin.com/in/muhire-fabrice-04b5991ba",
    },
    {
      icon: <Github size={24} className="text-primary-400" />,
      title: "GitHub",
      info: "fablib250",
      link: "https://github.com/fablib250",
    },
  ];

  // Helper to check if link is external (starts with http or https)
  const isExternal = (link: string) => /^https?:\/\//.test(link);

  return (
    <div className="py-16 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-20 opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contact Me"
          subtitle="Let's connect and discuss potential collaborations"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HoloCard animate={false}>
              <div className="p-6">
                <h3 className="text-2xl font-rajdhani font-medium text-primary-300 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      aria-label={`Contact via ${item.title}`}
                      target={isExternal(item.link) ? "_blank" : undefined}
                      rel={isExternal(item.link) ? "noopener noreferrer" : undefined}
                      className="flex items-start hover:bg-gray-800/30 p-2 rounded-md transition-colors"
                    >
                      <div className="mr-4 mt-1">{item.icon}</div>
                      <div>
                        <h4 className="text-white font-medium">{item.title}</h4>
                        <p className="text-gray-400">{item.info}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="aspect-video rounded-md overflow-hidden border border-holographic-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853742527!2d30.025326866958046!3d-1.9441222569345947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5a86a048fdf%3A0xb6b55ca4065d7b12!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1662576828296!5m2!1sen!2sus"
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Maps"
                    ></iframe>
                  </div>
                </div>
              </div>
            </HoloCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
