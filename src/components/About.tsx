import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cog, Target, Users, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const stats = [
    { icon: Cog, value: '3+', label: 'Years Experience' },
    { icon: Target, value: '15+', label: 'Projects Completed' },
    { icon: Users, value: '2000+', label: 'Learners Trained' },
    { icon: Award, value: '4', label: 'Awards Won' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            About <span className="text-primary-600">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Mechanical Engineering graduate with hands-on experience in CAD modeling, product prototyping, 
              and design documentation, seeking to contribute as a CAD Designer. Skilled in tools like AutoCAD 
              and CATIA, with a strong foundation in mechanical systems, design optimization, and technical documentation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Currently serving as a Training Manager at ChaturaIT Learnings LLP, where I design and deliver 
              comprehensive training programs while pursuing an MBA in Human Resources & Operations to combine 
              technical expertise with business acumen.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Eager to support design initiatives by bringing precision, clarity, and a user-focused mindset 
              to CAD-based workflows, with experience in innovative projects like head gesture-controlled wheelchairs 
              and thermal energy storage systems.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;