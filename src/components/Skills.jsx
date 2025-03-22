import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
 
  const skillSets = [
    
    ['MongoDB', 'Express', 'Node.js', 'Next.js', 'REST API'],
   
    ['React', 'Redux', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    
    ['Tailwind', 'Bootstrap', 'Material UI', 'Styled Components', 'Shadcn' ,'ChakraUI'],
  
    ['Git', 'GitHub Actions', 'Docker', 'CI/CD', 'WebSocket'],

    ['AWS', 'Firebase', 'Vercel', 'Postman']
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100
      }
    },
    hover: { 
      scale: 1.05, 
      backgroundColor: "rgba(79, 70, 229, 0.2)",
      boxShadow: "0 0 15px rgba(79, 70, 229, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    }
  };

  return (
    <section id="skills" className="py-16 lg:py-24 ">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            As a MERN stack developer, I specialize in building modern web applications
            with the following technologies:
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {skillSets.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              className="flex flex-wrap justify-center "
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {row.map((skill, index) => (
                <motion.div
                  key={`${rowIndex}-${index}`}
                  className="m-2 md:px-6 md:py-3 py-2 px-3 bg-gray-800/80 rounded-full text-white md:text-base text-sm font-medium cursor-pointer backdrop-blur-sm border border-gray-700"
                  variants={skillVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;