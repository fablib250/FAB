import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import CertificateCard from '../components/ui/CertificateCard';

const Certifications: React.FC = () => {
  const certificates = [
    {
      title: "Python for Scientific Computing",
      issuer: "Cisco",
      date: "October 2022",
      image: "/img/7.jpg"
    },
    {
      title: "Networking Fundamentals",
      issuer: "Cisco",
      date: "July 2021",
      image: "/img/9.jpg"
    },
    {
      title: "AI Ethics",
      issuer: "World Health Organization",
      date: "January 2023",
      image: "/img/8.jpg"
    },
    {
      title: "ASESMA 2023",
      issuer: "ICTP EAIFR",
      date: "2023",
      image: "/img/5.jpg"
    },
    {
      title: "DevOps Advanced",
      issuer: "Digital Training Program",
      date: "March 2021",
      image: "/img/6.jpg"
    },
    {
      title: "Solidworks Associates",
      issuer: "Dassault Systems",
      date: "February 2024",
      image: "/img/11.PNG"
    },
    {
      title: "Electronics and physical computing",
      issuer: "Arduino",
      date: "October 2024",
      image: "/img/4.jpg"
    },
    {
      title: "Quantum Computing Basics",
      issuer: "IBM Quantum",
      date: "February 2023",
      image: "/img/9.jpg"
    }
  ];

  return (
    <div className="py-16 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-20 opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional certifications and achievements"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={cert.title}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              image={cert.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
