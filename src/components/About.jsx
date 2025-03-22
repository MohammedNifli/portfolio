import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background gradients - similar to your CareerTimeline */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block relative">
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 uppercase tracking-wider mb-2 inline-block">Get to know me</span>
            <motion.span 
              className="absolute -right-6 -top-2 text-2xl"
              animate={{ 
                rotate: [0, 14, 0, 14, 0],
                scale: [1, 1.2, 1, 1.2, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 5
              }}
            >
              ✨
            </motion.span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          
          <div className="relative">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <motion.div 
              className="absolute left-1/2 top-0 w-6 h-1 bg-white rounded-full" 
              animate={{ 
                x: [-48, 48],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </div>
          
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            I'm a passionate full stack developer with a focus on creating
            elegant, efficient, and user-friendly applications.
          </p>
        </motion.div>

        {/* Content container with max width */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className=" p-8 rounded-xl shadow-lg border border-gray-700/50 backdrop-blur-sm space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white">Journey</h3>
            
            <motion.p
              className="text-stone-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I began my programming journey at the end of 2023, driven by
              curiosity and a strong interest in web development. What started
              as an exploration quickly evolved into a passion for building
              innovative digital solutions. With a background in Business
              Administration (BBA), I bring a unique perspective that blends
              technical expertise with a strategic understanding of business
              needs.
            </motion.p>
            
            <motion.p
              className="text-stone-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Throughout my journey, I have developed and contributed to
              projects that showcase my ability to create scalable and efficient
              web applications. Notably, I built a fully functional e-commerce
              platform with real-time order management and secure payment
              integration, ensuring a seamless shopping experience.
              Additionally, I developed a Med-Tech medical appointment booking
              application, designed to streamline doctor-patient interactions
              through appointment scheduling, real-time consultations, and
              secure communication.
            </motion.p>
            
            <motion.p
              className="text-stone-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              As a MERN stack developer, I am committed to writing clean,
              maintainable code and following industry best practices to build
              high-performance applications. My focus is on delivering scalable,
              user-centric solutions that enhance efficiency and provide
              intuitive digital experiences. With a continuous learning mindset,
              I stay updated with emerging technologies to craft elegant
              solutions to complex problems.
            </motion.p>

            <motion.div
              className="pt-6 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:translate-y-[-2px] transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;