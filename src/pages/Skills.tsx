import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AtomIcon,
  Braces,
  Database,
  FlaskRound,
  GraduationCap,
  LayoutGrid,
  MessageSquare,
  Users,
} from 'lucide-react';

const SkillBar = ({
  skill,
  level,
  color = 'blue',
  delay = 0,
}: {
  skill: string;
  level: number;
  color?: string;
  delay?: number;
}) => (
  <motion.div
    className="mb-5"
    initial={{ width: 0 }}
    whileInView={{ width: `${level}%` }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay }}
  >
    <div className="mb-1 text-sm text-white flex justify-between">
      <span>{skill}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full bg-${color}-500`}
        style={{ width: `${level}%` }}
      />
    </div>
  </motion.div>
);

const Tabs = ({ active, onChange }: { active: string; onChange: (tab: string) => void }) => {
  const tabs = ['Technical', 'Scientific', 'Soft Skills'];
  return (
    <div className="flex justify-center gap-4 my-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
            active === tab
              ? 'bg-white text-black shadow-xl'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Technical');

  const skillData: {
    [key: string]: {
      skills: { skill: string; level: number }[];
      icon: React.ReactNode;
      color: string;
    };
  } = {
    Technical: {
      icon: <Braces size={24} />,
      color: 'blue',
      skills: [
        { skill: 'Python', level: 90 },
        { skill: 'Linux', level: 85 },
        { skill: 'LaTeX', level: 80 },
        { skill: 'Machine Learning', level: 75 },
        { skill: 'IoT', level: 70 },
        { skill: 'HTML/CSS', level: 65 },
        { skill: 'CAD', level: 60 },
      ],
    },
    Scientific: {
      icon: <AtomIcon size={24} />,
      color: 'purple',
      skills: [
        { skill: 'Quantum Mechanics', level: 85 },
        { skill: 'Data Analysis', level: 90 },
        { skill: 'Numerical Simulations', level: 80 },
        { skill: 'Statistical Methods', level: 75 },
        { skill: 'Electronics', level: 70 },
      ],
    },
    'Soft Skills': {
      icon: <Users size={24} />,
      color: 'emerald',
      skills: [
        { skill: 'Leadership', level: 85 },
        { skill: 'Communication', level: 90 },
        { skill: 'Problem Solving', level: 95 },
        { skill: 'Teamwork', level: 85 },
        { skill: 'Project Management', level: 80 },
      ],
    },
  };

  const additionalSkills = [
    { name: 'Academic Writing', icon: <GraduationCap size={20} /> },
    { name: 'Data Visualization', icon: <LayoutGrid size={20} /> },
    { name: 'Lab Techniques', icon: <FlaskRound size={20} /> },
    { name: 'DB Management', icon: <Database size={20} /> },
    { name: 'Public Speaking', icon: <MessageSquare size={20} /> },
  ];

  const current = skillData[activeTab];

  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        <p className="text-center text-gray-400 mb-10">
          Technical expertise, scientific knowledge, and personal strengths
        </p>

        <Tabs active={activeTab} onChange={setActiveTab} />

        {/* Main Skills Card */}
        <motion.div
          className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6 gap-3 text-white">
            {current.icon}
            <h3 className="text-xl font-semibold">{activeTab}</h3>
          </div>

          <div>
            {current.skills.map((skill, index) => (
              <SkillBar
                key={index}
                skill={skill.skill}
                level={skill.level}
                color={current.color}
                delay={index * 0.15}
              />
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Additional Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {additionalSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg hover:bg-white/10 transition"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full mb-3 text-white">
                  {skill.icon}
                </div>
                <span className="text-sm text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
