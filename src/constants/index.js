

import cartify from "../assets/projects/cartify.png"; 
import medtech from "../assets/projects/med-tech.png";
import scheduler  from "../assets/projects/scheduler.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Med-Tech",
    image: medtech,
    link_live:"https://med-tech-connect.vercel.app",
    source:"https://github.com/MohammedNifli/Med-Tech-backend",
    description:
      "A comprehensive medical appointment booking and consultation platform, enabling users to schedule doctor appointments, access video consultations, and securely communicate with healthcare professionals.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express.js", "SOLID"],
  },
  {
    title: "Scheduler",
    image: scheduler,
    link_live:"#",
    source:"https://github.com/MohammedNifli/Scheduler",
    description:
      "A meeting scheduling platform designed for seamless appointment management, allowing users to create, assign, and track meetings with integrated calendar support.",
    technologies: ["HTML", "CSS", "PostgreSQL", "Next.js", "Prisma"],
  },
  {
    title: "Cartify",
    image: cartify,
    link_live:"#",
    source:"https://github.com/MohammedNifli/Cartify",
    description:
      "An e-commerce platform specializing in men's watches, featuring a user-friendly shopping experience with secure payment integration and real-time order tracking.",
    technologies: ["HTML", "CSS", "ejs", "Bootstrap","Node js","MongoDB"],
  },

];

