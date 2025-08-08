import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Settings, Users, Target, TrendingUp, Wrench, Code, PieChart, Globe } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    { name: "AutoCAD", level: 95, icon: Wrench },
    { name: "CATIA", level: 90, icon: Settings },
    { name: "MS Office", level: 88, icon: Code },
    { name: "CAD Modeling", level: 92, icon: Wrench },
    { name: "Product Design", level: 85, icon: Target },
    { name: "Technical Documentation", level: 90, icon: PieChart }
  ];

  const professionalSkills = [
    { name: "Project Management", level: 90, icon: Target },
    { name: "Soft Skills", level: 95, icon: Users },
    { name: "Interpersonal Skills", level: 92, icon: Globe },
    { name: "Analytical Skills", level: 88, icon: TrendingUp },
    { name: "Strategic Planning", level: 85, icon: PieChart },
    { name: "Critical Thinking", level: 90, icon: Users },
    { name: "Time Management", level: 92, icon: Target },
    { name: "Research Skills", level: 88, icon: TrendingUp }
  ];

  const certifications = [
    {
      title: "Advanced Certification on Emerging Technologies in Robotics",
      issuer: "APSSDC",
      year: "2023"
    },
    {
      title: "AutoCAD Certification",
      issuer: "APSSDC", 
      year: "2022"
    },
    {
      title: "Certified System Administration",
      issuer: "ServiceNow",
      year: "2023"
    },
    {
      title: "Certified Application Developer",
      issuer: "ServiceNow",
      year: "2023"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const SkillBar = ({ skill, index }: { skill: any, index: number }) => (
    <motion.div
      variants={itemVariants}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
            <skill.icon className="w-4 h-4 text-primary-600" />
          </div>
          <span className="font-medium text-gray-900">{skill.name}</span>
        </div>
        <span className="text-sm font-medium text-primary-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Skills & <span className="text-primary-600">Expertise</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Wrench className="w-4 h-4 text-white" />
              </div>
              Technical Skills
            </motion.h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              Professional Skills
            </motion.h3>
            {professionalSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-engineering-600 rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            Certifications
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-sm text-primary-600 font-medium">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;