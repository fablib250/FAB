import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "ASESMA 2023 (smr3847)",
      description:
        "Investigated structural and electronic properties of pentagonal 2D materials using DFT and machine learning, employing Cairo tessellation to model non-standard atomic geometries.",
      image: "https://indico.ictp.it/event/10181/material/4/0.jpg",
      tags: ["Quantum Computing", "ML", "Physics"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Scientific Data Visualization Platform",
      description:
        "Interactive web platform for visualizing complex scientific data sets with customizable parameters and export options.",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["D3.js", "JavaScript", "Data Science", "Visualization"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Nuclear Hackathon Project",
      description:
        "Award-winning project from the Nuclear Hackathon focused on radiation monitoring and safety applications.",
      image: "/img/14.png",
      tags: ["C++", "Nuclear Physics"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Molecular Dynamics Simulation",
      description:
        "Simulation of molecular interactions using numerical methods to study physical properties of materials.",
      image: "/img/16.jpg",
      tags: ["Python"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "UNIPOD Prototypes – University of Rwanda",
      description:
        "I was proud to be part of the team behind a student-led prototype that was showcased to the UN Deputy Secretary-General, Mrs. Amina J. Mohammed. The event highlighted the work of young Rwandan innovators who are actively redefining Africa’s technological future. Being present during this moment was both inspiring and empowering, as it underscored the importance of Africans shaping and owning their narratives through innovation.",
      image: "/img/15.jpg",
      tags: ["Innovation", "Prototypes", "Africa", "UNIPOD", "Leadership"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <div className="py-16 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-20 opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Projects" 
          subtitle="Exploring the intersection of physics, computing, and innovation"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
