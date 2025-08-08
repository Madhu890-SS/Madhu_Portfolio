import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Phone, Mail, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-accent-500 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl font-bold text-primary-600">
                  MS
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-engineering-500 rounded-full flex items-center justify-center animate-pulse-glow">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="text-primary-600">Madhu Surya Sai</span><br />
            <span className="text-gray-700">Tatikayala</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Mechanical Engineer specializing in <span className="text-primary-600 font-semibold">CAD Design</span>, 
            <span className="text-accent-600 font-semibold"> Product Development</span>, and 
            <span className="text-engineering-600 font-semibold"> Training Management</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12 text-gray-600"
          >
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-primary-500" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-primary-500" />
              <span>+91 8247888268</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-primary-500" />
              <span>madhusuryasai143@gmail.com</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-lg"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
            
            <motion.a
              href="https://www.linkedin.com/in/madhutatiakayala"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 text-primary-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 border-2 border-primary-600 transition-colors shadow-lg"
            >
              <Linkedin size={20} />
              LinkedIn Profile
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 hidden lg:block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-primary-200 rounded-full"
            ></motion.div>
          </div>
          
          <div className="absolute bottom-20 right-10 hidden lg:block">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 bg-accent-400 rounded-lg rotate-45"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;