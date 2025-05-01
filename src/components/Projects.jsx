import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import farmfresh1 from '../assets/images/farmfresh1.png';
import farmfresh2 from '../assets/images/farmfresh2.png';
import homebuddyy1 from '../assets/images/homebuddyy1.png';
import homebuddyy2 from '../assets/images/homebuddyy2.png';
import nxtstep1 from '../assets/images/nxtstep1.png';
import nxtstep2 from '../assets/images/nxtstep2.png';
import nxtstep3 from '../assets/images/nxtstep3.jpg';
import nxtstep4 from '../assets/images/nxtstep4.jpg';
import nxtstep5 from '../assets/images/nxtstep5.jpg';

const Projects = () => {
  const projects = [
    {
      title: "NxtStep - AI-powered Career Platform",
      description: "AI-powered career platform with video-based interview simulator and job matching.",
      techStack: ["React", "Node.js", "MongoDB", "TensorFlow", "Firebase"],
      githubLink: "https://github.com/OHK08/NxtStep",
      features: [
        "Video-based AI interview simulator analyzing tone, confidence, and body language",
        "Integrated job matching algorithm",
        "AI skill assessments and course recommendations",
        "Dual interfaces for job seekers and recruiters",
        "Real-time recruitment automation with NLP and ML"
      ],
      challenges: "Implementing the AI analysis for video interviews required extensive research into computer vision and natural language processing techniques. Integrating multiple APIs while maintaining performance was challenging.",
      role: "Full-stack developer - Designed and implemented both frontend and backend systems, integrated AI services.",
      screenshots: [nxtstep1, nxtstep2, nxtstep5, nxtstep4, nxtstep3],
    },
    {
      title: "Farm Fresh - Vegetable Inventory Management",
      description: "MERN stack-based vegetable inventory management system with vendor and customer interfaces.",
      techStack: ["React", "Express", "MongoDB", "Firebase Storage", "REST API"],
      githubLink: "https://github.com/OHK08/vegetable-inventory-management",
      features: [
        "Vendor interface for stock management",
        "Image upload via Firebase Storage",
        "Customer viewing interface",
        "Real-time inventory tracking",
        "RESTful API for all operations"
      ],
      challenges: "Handling real-time updates across multiple clients while maintaining data consistency required careful state management and API design.",
      screenshots: [farmfresh1, farmfresh2],
    },
    {
      title: "Home Buddyy - Blockchain Real Estate Platform (Ongoing)",
      description: "Secure home buying/selling platform using blockchain for transparent transactions.",
      techStack: ["React", "Vite", "TypeScript", "Blockchain", "Ant Design"],
      githubLink: "https://github.com/OHK08/Home_Buddyy",
      features: [
        "Smart contracts for transparent transactions",
        "Property listing and browsing",
        "Secure payment system",
        "User verification system",
        "Data integrity through blockchain"
      ],
      role: "Frontend developer - Implemented the UI components and blockchain integration.",
      screenshots: [homebuddyy2, homebuddyy1],
    }
  ];

  return (
    <section id="projects" className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Projects</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Here are some of my featured projects. Click on "More Info" to see details about each one.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;