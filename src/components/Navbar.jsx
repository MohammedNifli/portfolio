import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Function to handle smooth scrolling
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isMenuOpen) setIsMenuOpen(false);
    
    // Get the element to scroll to
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Set active section
      setActiveSection(sectionId);
      
      // Scroll to the element with smooth behavior
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: "smooth"
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="py-4 md:py-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          {/* Logo/Brand Name */}
          <div className="text-white font-bold text-xl">
            <a href="#home"></a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            {/* Nav Links */}
            <div className="flex items-center space-x-8 mr-8">
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, "about")}
                className={`text-stone-300 hover:text-white transition duration-500 ${
                  activeSection === "about" ? "text-white border-b border-purple-500" : ""
                }`}
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={(e) => scrollToSection(e, "skills")}
                className={`text-stone-300 hover:text-white transition duration-500 ${
                  activeSection === "skills" ? "text-white border-b border-purple-500" : ""
                }`}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, "projects")}
                className={`text-stone-300 hover:text-white transition duration-500 ${
                  activeSection === "projects" ? "text-white border-b border-purple-500" : ""
                }`}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, "contact")}
                className={`text-stone-300 hover:text-white transition duration-500 ${
                  activeSection === "contact" ? "text-white border-b border-purple-500" : ""
                }`}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-300 hover:text-white focus:outline-none transition duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, "about")}
                className={`text-stone-300 hover:text-white transition duration-500 py-2 ${
                  activeSection === "about" ? "text-white" : ""
                }`}
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={(e) => scrollToSection(e, "skills")}
                className={`text-stone-300 hover:text-white transition duration-500 py-2 ${
                  activeSection === "skills" ? "text-white" : ""
                }`}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, "projects")}
                className={`text-stone-300 hover:text-white transition duration-500 py-2 ${
                  activeSection === "projects" ? "text-white" : ""
                }`}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, "contact")}
                className={`text-stone-300 hover:text-white transition duration-500 py-2 ${
                  activeSection === "contact" ? "text-white" : ""
                }`}
              >
                Contact
              </a>
              
              {/* Social Icons - Mobile */}
              <div className="flex space-x-6 pt-4 border-t border-gray-800 mt-2">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white transition duration-200 py-2">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white transition duration-200 py-2">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white transition duration-200 py-2">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Add this component to your main layout or App component
const ScrollStyleFix = () => {
  return (
    <style jsx global>{`
      html {
        scroll-behavior: smooth;
      }
      
      section[id] {
        scroll-margin-top: 80px;
      }
    `}</style>
  );
};

export default Navbar;
export { ScrollStyleFix };  