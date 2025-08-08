import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/madhutatiakayala',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:madhusuryasai143@gmail.com',
    },
    {
      name: 'Phone',
      icon: Phone,
      url: 'tel:+918247888268',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary-400 mb-4"
            >
              MSTS
            </motion.h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mechanical Engineer specializing in CAD Design, Product Development, and Training Management. 
              Passionate about creating innovative solutions that bridge engineering excellence with practical applications.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={16} />
              <span className="text-sm">Hyderabad, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Education', href: '#education' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <motion.button
                  key={link.name}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} className="text-primary-400" />
                <span>+91 8247888268</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} className="text-primary-400" />
                <span>madhusuryasai143@gmail.com</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} Madhu Surya Sai Tatikayala. Made with <Heart size={16} className="text-red-500" /> and passion.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <motion.span
                whileHover={{ color: '#3b82f6' }}
                className="cursor-pointer hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </motion.span>
              <motion.span
                whileHover={{ color: '#3b82f6' }}
                className="cursor-pointer hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;