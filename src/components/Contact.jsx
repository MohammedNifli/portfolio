import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, isSubmitting: true });
  
    const templateParams = {
      name: formState.name,
      email: formState.email,
      message: formState.message,
    };
  
    try {
      await emailjs.send(
        "service_4knenug",
        "template_t6fws0m",
        templateParams,
         "jb9YP7dhHzMwglyNv"
      );
  
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: "Your message has been sent successfully!",
      });
  
      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        message: "",
      });
  
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: "There was an error sending your message. Please try again.",
      });
  
      console.error("EmailJS Error:", error);
    }
  };


  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "mohammednifliap@gmail.com",
      link: "#",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 8943737227",
      link: "#",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Malappuram ,Kerala,India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/mohammed-nifli-b31872292/",
      label: "LinkedIn",
    },
    {
      icon: <Github size={20} />,
      url: "https://github.com/MohammedNifli",
      label: "GitHub",
    },
    {
      icon: <Twitter size={20} />,
      url: "#",
      label: "Twitter",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  console.log(motion)

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 uppercase tracking-wider mb-2 inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-300 max-w-xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info Column */}
          <motion.div
            className="w-full lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg mb-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center mr-3 text-purple-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-sm text-stone-300 hover:text-purple-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-stone-300">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            className="w-full lg:w-2/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Send Me a Message
              </h3>

              {formStatus.isSubmitted && (
                <motion.div
                  className={`p-3 rounded-lg mb-4 flex items-center ${
                    formStatus.isError
                      ? "bg-red-900/50 text-red-200"
                      : "bg-green-900/50 text-green-200"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formStatus.isError ? (
                    <AlertCircle className="mr-2 flex-shrink-0" size={16} />
                  ) : (
                    <CheckCircle className="mr-2 flex-shrink-0" size={16} />
                  )}
                  <span className="text-sm">{formStatus.message}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className="block text-stone-300 text-sm mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="block text-stone-300 text-sm mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-stone-300 text-sm mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm"
                    required
                  ></textarea>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium flex items-center justify-center hover:opacity-90 transition-opacity text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formStatus.isSubmitting}
                  >
                    {formStatus.isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send size={16} className="ml-2" />
                      </span>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
