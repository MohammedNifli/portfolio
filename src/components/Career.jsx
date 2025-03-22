import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Sample data structure - replace with your actual career data
const CAREER_DATA = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "2021 - Present",
    description: "Led development of the company's flagship web application using React and TypeScript. Managed a team of 4 developers and implemented CI/CD pipelines that reduced deployment time by 40%.",
    achievements: [
      "Improved application performance by 35% through code optimization",
      "Implemented new design system reducing development time by 25%",
      "Led migration from Angular to React that improved maintainability"
    ],
    technologies: ["React", "TypeScript", "Redux", "Node.js", "AWS"],
    logo: "/images/tech-innovations-logo.png"
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Solutions Ltd",
    duration: "2018 - 2021",
    description: "Developed responsive web applications for enterprise clients. Collaborated with design and backend teams to deliver robust solutions on tight deadlines.",
    achievements: [
      "Built 5 major client projects with 100% on-time delivery",
      "Reduced bug count by 60% through implementation of testing frameworks",
      "Awarded 'Employee of the Year' for exceptional performance"
    ],
    technologies: ["JavaScript", "React", "CSS3", "HTML5", "Jest"],
    logo: "/images/digital-solutions-logo.png"
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description: "Assisted in building MVPs for early-stage startups. Gained hands-on experience with various web technologies and agile development practices.",
    achievements: [
      "Contributed to 12 successful product launches",
      "Built responsive interfaces for mobile and desktop platforms",
      "Optimized website load times by 50% through improved asset management"
    ],
    technologies: ["JavaScript", "HTML", "CSS", "jQuery", "Bootstrap"],
    logo: "/images/startup-ventures-logo.png"
  }
];

const TimelineItem = ({ item, index, isEven, isInView }) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: false, amount: 0.2 });
  
  const variants = {
    hidden: { 
      opacity: 0, 
      x: isEven ? 50 : -50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const mobileVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative">
      {/* Mobile timeline design (stacked vertically) */}
      <motion.div
        ref={cardRef}
        className="md:hidden w-full pl-8 border-l-2 border-purple-500 mb-12 relative"
        initial="hidden"
        animate={cardInView ? "visible" : "hidden"}
        variants={mobileVariants}
      >
        {/* Mobile timeline dot */}
        <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-purple-500 z-10" />
        
        <div className="bg-gray-800/90 p-6 rounded-xl shadow-lg border border-gray-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]">
          {/* Card content - same as desktop but reorganized for mobile */}
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-2 border-purple-500 mr-3">
                {item.logo ? (
                  <img src={item.logo} alt={item.company} className="w-8 h-8 object-contain" />
                ) : (
                  <span className="text-lg font-bold text-white">{item.company.charAt(0)}</span>
                )}
              </div>
              <span className="text-purple-400 font-medium text-sm">{item.company}</span>
            </div>
            <span className="bg-gray-900 text-stone-300 py-1 px-3 rounded-full text-xs">{item.duration}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3">{item.role}</h3>
          <p className="text-stone-300 text-sm mb-4">{item.description}</p>
          
          {item.achievements && item.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2 text-sm">Key Achievements:</h4>
              <ul className="list-disc list-inside text-stone-300 space-y-1 text-sm">
                {item.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
          
          {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-gray-700/70 rounded-full text-xs text-stone-200 border border-gray-600/30">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Desktop timeline design (alternating sides) */}
      <motion.div
        className={`hidden md:flex w-full ${isEven ? 'justify-start' : 'justify-end'}`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        <div className={`w-5/12 ${isEven ? 'pr-12' : 'pl-12'} relative`}>
          {/* Connector line to center timeline */}
          <div 
            className={`absolute top-5 ${isEven ? 'right-0' : 'left-0'} w-12 h-0.5 bg-gradient-to-r ${isEven ? 'from-purple-500 to-transparent' : 'from-transparent to-purple-500'}`} 
          />
          
          <div className="bg-gray-800/90 p-6 rounded-xl shadow-lg border border-gray-700/50 backdrop-blur-sm h-full hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group">
            {/* Subtle hover effect indicator */}
            <div className={`absolute ${isEven ? '-right-1' : '-left-1'} top-5 w-2 h-12 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            {/* Header with company and duration */}
            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-2 border-purple-500 mr-3 shadow-lg shadow-purple-500/20">
                  {item.logo ? (
                    <img src={item.logo} alt={item.company} className="w-10 h-10 object-contain" />
                  ) : (
                    <span className="text-xl font-bold text-white">{item.company.charAt(0)}</span>
                  )}
                </div>
                <span className="text-purple-400 font-medium">{item.company}</span>
              </div>
              <span className="bg-gray-900 text-stone-300 py-1 px-3 rounded-full text-sm">{item.duration}</span>
            </div>
            
            {/* Role title */}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">{item.role}</h3>
            
            {/* Description */}
            <p className="text-stone-300 mb-5">{item.description}</p>
            
            {/* Key achievements */}
            {item.achievements && item.achievements.length > 0 && (
              <div className="mb-5">
                <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside text-stone-300 space-y-1">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Technologies */}
            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-700/70 rounded-full text-sm text-stone-200 border border-gray-600/30 hover:bg-purple-900/50 hover:border-purple-500/50 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CareerTimeline = () => {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: false, amount: 0.2 });
  
  return (
    <section id="career" className="py-20 relative overflow-hidden">
      {/* Background gradients and effects */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block relative">
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 uppercase tracking-wider mb-2 inline-block">Experience</span>
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
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Career Journey</h2>
          
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
            A timeline of my professional growth and the key milestones that have shaped my career.
          </p>
        </motion.div>
        
        {/* Timeline container */}
        <div className="relative" ref={timelineRef}>
          {/* Center line - visible on medium screens and up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-blue-500 to-purple-600 rounded"></div>
          
          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {CAREER_DATA.map((item, index) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                index={index} 
                isEven={index % 2 === 0}
                isInView={isInView} 
              />
            ))}
          </div>
          
          {/* Timeline dots - visible on medium screens and up */}
          <div className="hidden md:block">
            {CAREER_DATA.map((item, index) => (
              <motion.div
                key={`dot-${item.id}`}
                className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-purple-500 z-10 shadow-lg shadow-purple-500/30"
                style={{ top: `calc(${index * 100}% + ${8 + index * 16}rem)` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? 
                  { scale: 1, opacity: 1, boxShadow: '0 0 0 4px rgba(168, 85, 247, 0.3)' } : 
                  { scale: 0, opacity: 0 }
                }
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
              />
            ))}
          </div>
          
          {/* Final element to show completion */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: CAREER_DATA.length * 0.2 + 0.5, duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
          </motion.div>
        </div>
        
        {/* Button at the bottom */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:translate-y-[-2px] transform"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerTimeline;