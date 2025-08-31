import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [

    {
      title: "ASESMA 2023 (smr3847)",
      description: "Investigated structural and electronic properties of pentagonal 2D materials using DFT and machine learning, employing Cairo tessellation to model non-standard atomic geometries.",
      image: "https://indico.ictp.it/event/10181/material/4/0.jpg",
      tags: ["Quantum Computing", "ML",  "Physics"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Scientific Data Visualization Platform",
      description: "Interactive web platform for visualizing complex scientific data sets with customizable parameters and export options.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["D3.js", "JavaScript", "Data Science", "Visualization"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Nuclear Hackathon Project",
      description: "Award-winning project from the Nuclear Hackathon focused on radiation monitoring and safety applications.",
      image: "https://scontent.fkgl2-1.fna.fbcdn.net/v/t39.30808-6/482242321_3958753117706064_781450140359272764_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGyVxciWlr5JN9CHFqrugqpBiZI3nxmQBAGJkjefGZAEHUYE9J3vb2JDeLJe7EKKN-w_rYUjMs5801ky7XjczD9&_nc_ohc=JdcdyFgem4QQ7kNvwFHBA84&_nc_oc=AdlJuurvLiWlzBN7pTG-2yRaMOgrdUVjKFM9d9n2xMPBoStmdFqienJcZcay5P2G8WY&_nc_zt=23&_nc_ht=scontent.fkgl2-1.fna&_nc_gid=CbCzfAmWFPnF3gjTuB2mBA&oh=00_AfV75BUo0paAt369Ocgw2jYOxg5UDc9zjFtAMecEPsQcSw&oe=68BA2145",
      tags: [ "C++", "Nuclear Physics"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Molecular Dynamics Simulation",
      description: "Simulation of molecular interactions using numerical methods to study physical properties of materials.",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "NumPy", "Simulation", "Physics"],
      demoUrl: "#",
      codeUrl: "#"
    }
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
              key={index}
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