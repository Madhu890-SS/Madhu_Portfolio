import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Training Manager",
      company: "ChaturaIT Learnings LLP",
      location: "Hyderabad",
      period: "July 2024 - Present",
      type: "Full-time",
      achievements: [
        "Designed and delivered over 15 instructor-led and e-learning courses on technical and soft skills, training more than 2,000 learners within one year",
        "Conducted training-needs analyses via surveys and mentor interviews to define precise learning objectives and address competency gaps",
        "Developed multimedia course content (videos, quizzes, and simulations) using the Vjudge platform and ChaturaIT Learnings Portal, boosting course completion rates by 15%",
        "Evaluated program effectiveness through post-training surveys and participant feedback, achieving a 92% learner satisfaction score"
      ],
      color: "from-primary-500 to-primary-600"
    },
    {
      title: "Product Design Intern",
      company: "Indian Institute of Technology, Bombay",
      location: "Mumbai",
      period: "January 2024 - July 2024",
      type: "Internship",
      achievements: [
        "Implemented material optimization techniques and efficient sourcing strategies, reducing project expenses by 20%",
        "Designed and prototyped a low-cost thermal energy storage system using sand-based insulation, enhancing energy efficiency for sustainable applications"
      ],
      color: "from-accent-500 to-accent-600"
    },
    {
      title: "Trainee",
      company: "Hindustan Shipyard Limited",
      location: "Visakhapatnam",
      period: "July 2022 - August 2022",
      type: "Internship",
      achievements: [
        "Assisted in ship design evaluations and learned hull fabrication techniques, enhancing understanding of marine engineering concepts"
      ],
      color: "from-engineering-500 to-engineering-600"
    },
    {
      title: "AutoCAD Mechanical Intern",
      company: "WorinWell",
      location: "Remote",
      period: "February 2020 - January 2021",
      type: "Internship",
      achievements: [
        "Completed a hands-on AutoCAD Mechanical internship, designing and optimizing 10+ mechanical components",
        "Created and refined 2D mechanical drawings, improving component accuracy and manufacturability"
      ],
      color: "from-gray-500 to-gray-600"
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
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
            Work <span className="text-primary-600">Experience</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-400 to-engineering-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white shadow-lg z-10`}></div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-white rounded-xl shadow-lg p-6 ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-primary-600 mb-2">{exp.company}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;