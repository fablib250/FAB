import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import TimelineItem from '../components/ui/TimelineItem';

const experienceData = [
  {
    title: "Youth Leader",
    organization: "Faith Builders Church",
    period: "2019 - Present",
    description: "Led youth initiatives and organized community service projects. Developed leadership training programs and mentored young adults.",
    logo: "https://via.placeholder.com/150"
  },
  {
    title: "Prototyping Specialist",
    organization: "University of Rwanda, Unipod",
    period: "2024 - 2025",
    description: "Designed and developed prototypes for research projects for students. Provided IT support for the lab's computing infrastructure and equipments.",
    logo: "https://via.placeholder.com/150"
  },
  {
    title: "Workshop",
    organization: "FabLab Rwanda",
    period: "2023 - 2024",
    description: "Training from tech-up Skills program which i applied to and joined the program and i got different skills and helping my mates in conducting workshops on digital fabrication, 3D printing, and electronics. Helped participants troubleshoot technical issues during hands-on sessions.",
    logo: "https://via.placeholder.com/150"
  },
  {
    title: "Class Representative",
    organization: "University of Rwanda",
    period: "2019 - 2022",
    description: "Served as the liaison between students and faculty. Organized study groups and academic support sessions for physics students.",
    logo: "https://via.placeholder.com/150"
  }
];

const Experience: React.FC = () => {
  return (
    <div className="py-16 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-20 opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Experience" 
          subtitle="My professional journey and leadership roles"
        />
        
        <div className="mt-16 relative">
          {experienceData.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              organization={item.organization}
              period={item.period}
              description={item.description}
              logo={item.logo}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
