import React from 'react';
import { motion } from 'framer-motion';
import Photo from '../../public/nif_photo_processed.jpg';

import { FaLinkedin, FaGithub, FaInstagram, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  
  const handleResumeDownload = () => {
    const resumePath = "/Mohammed_Nifli_ap_Resume (3).pdf"; 
    const link = document.createElement("a");
    link.href = resumePath;
    link.setAttribute("download", "Mohammed_Nifli_Resume.pdf"); // Rename file for user
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

 

  return (
    <div className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 lg:space-x-12">
          {/* Photo Section */}
          <motion.div 
            className="w-full md:w-2/5 mb-8 md:mb-0 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-70 blur"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.8, 0.7] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              ></motion.div>
              <motion.img 
                src={Photo} 
                alt="Profile Photo" 
                className="relative h-56 w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-full object-cover border-2 border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div 
            className="w-full md:w-3/5 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Mohammed Nifli
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-stone-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Crafting elegant solutions to complex problems
            </motion.p>
            
            <motion.p 
              className="text-stone-400 mb-6 max-w-md mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I specialize in building modern web applications with React, Node.js, and cloud technologies. Let's create something amazing together.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.button 
                onClick={handleResumeDownload}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaFileDownload /> Download Resume
              </motion.button>
              <motion.a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
              
              {/* Social Media Icons */}
              <motion.div className="flex gap-4 items-center ml-2">
                <motion.a 
                  href="https://www.linkedin.com/in/mohammed-nifli-b31872292/" // Update with your actual LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a 
                  href="https://github.com/MohammedNifli" // Update with your actual GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a 
                  href="https://instagram.com/your-handle" // Update with your actual Instagram URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram size={24} />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;