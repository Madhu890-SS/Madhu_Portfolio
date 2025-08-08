import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Business Administration",
      field: "Human Resources & Operations",
      institution: "Lovely Professional University",
      location: "Delhi",
      period: "2025 - Present",
      status: "In Progress",
      description: "Currently enrolled, focusing on strategic HR management and operational excellence through real-world projects.",
      color: "from-primary-500 to-primary-600",
      icon: TrendingUp
    },
    {
      degree: "Bachelor of Technology",
      field: "Mechanical Engineering",
      institution: "Bonam Venkata Chalamayya Engineering College",
      location: "Odalarevu",
      period: "2021 - 2024",
      status: "Completed",
      gpa: "8.25",
      description: "Graduated with a commendable GPA, demonstrating a strong foundation in core mechanical engineering principles.",
      color: "from-accent-500 to-accent-600",
      icon: GraduationCap
    }
  ];

  const awards = [
    {
      title: "1st Prize in PPT Competition",
      event: "Engineering Day",
      institution: "BVC Engineering College, Odalaravu",
      date: "14/02/2022"
    },
    {
      title: "2nd Prize in PPT Competition", 
      event: "Engineering Day",
      institution: "GIET Engineering College, Rajahmundry",
      date: "14/02/2022"
    },
    {
      title: "3rd Prize in Project Expo",
      event: "Innovation Fair",
      institution: "DESIGN INNOVATION CENTER, JNTUK University, Kakinada",
      date: "15/09/2022"
    },
    {
      title: "2nd Place in Technical Fest PPT Competition",
      event: "Technical Fest",
      institution: "Pragati Engineering College, Kakinada",
      date: "28/12/2022"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-20 bg-white">
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
            Education & <span className="text-primary-600">Awards</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        {/* Education Section */}
        <div className="mb-16">
          <motion.h3
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Academic Background
          </motion.h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0`}>
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h4>
                        <p className="text-lg text-primary-600 font-semibold mb-2">{edu.field}</p>
                        <p className="text-gray-700 font-medium mb-2">{edu.institution}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'In Progress' 
                            ? 'bg-engineering-100 text-engineering-700'
                            : 'bg-accent-100 text-accent-700'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-3">{edu.description}</p>
                    
                    {edu.gpa && (
                      <div className="flex items-center gap-2 text-accent-600 font-semibold">
                        <Award size={16} />
                        <span>GPA: {edu.gpa}/10.0</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Awards & Recognition
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-engineering-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-engineering-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">{award.title}</h4>
                    <p className="text-primary-600 font-medium mb-1">{award.event}</p>
                    <p className="text-gray-600 text-sm mb-2">{award.institution}</p>
                    <p className="text-gray-500 text-sm">{award.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;