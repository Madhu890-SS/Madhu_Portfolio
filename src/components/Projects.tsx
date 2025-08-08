import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Armchair as Wheelchair, Fan, Flame, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Head Gesture-Controlled Wheelchair",
      description: "Designed an innovative wheelchair controlled by head gestures with advanced safety systems, reducing production costs by 30% and improving accessibility for individuals with limited mobility.",
      icon: Wheelchair,
      features: [
        "Head gesture control system",
        "Reclining and standing mechanisms",
        "GPS tracking for real-time monitoring",
        "30% cost reduction in production",
        "40% increase in usability based on user feedback"
      ],
      technologies: ["AutoCAD", "Arduino", "GPS Module", "Sensors"],
      color: "from-primary-500 to-primary-600",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
    },
    {
      title: "Ceiling Fan with Blade Inclination Control",
      description: "Led the design and fabrication of a ceiling fan with adjustable blade inclination and swing control, improving airflow efficiency by 25% and reducing noise levels by 15%.",
      icon: Fan,
      features: [
        "Adjustable blade inclination",
        "Swing control mechanism",
        "25% improved airflow efficiency",
        "15% noise reduction",
        "Enhanced air circulation patterns"
      ],
      technologies: ["CATIA", "Mechanical Design", "Fluid Dynamics"],
      color: "from-accent-500 to-accent-600",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    },
    {
      title: "Sand Battery Thermal Storage System",
      description: "Engineered a low-cost thermal storage system using sand-based insulation, reducing heating costs by 20% in warm climates and demonstrating 15% decrease in building energy consumption.",
      icon: Flame,
      features: [
        "Sand-based thermal insulation",
        "20% reduction in heating costs",
        "35% lower manufacturing expenses",
        "15% decrease in energy consumption",
        "Sustainable energy storage solution"
      ],
      technologies: ["Thermal Analysis", "Material Science", "CAD Design"],
      color: "from-engineering-500 to-engineering-600",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop"
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
    <section id="projects" className="py-20 bg-white">
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
            Featured <span className="text-primary-600">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Innovative engineering solutions focused on accessibility, efficiency, and sustainability
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 bg-gradient-to-r ${project.color} text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    View Details
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;