import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInfoCircle } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
      >
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map(tech => (
              <span 
                key={tech}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaGithub className="mr-2" /> View Code
            </a>
            <button 
              onClick={() => setIsOpen(true)}
              className="flex items-center text-gray-700 hover:text-black"
            >
              <FaInfoCircle className="mr-2" /> More Info
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {project.challenges && (
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">Challenges Faced:</h4>
                  <p>{project.challenges}</p>
                </div>
              )}
              
              {project.role && (
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">My Role:</h4>
                  <p>{project.role}</p>
                </div>
              )}
              
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">Screenshots:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <img 
                        key={index}
                        src={screenshot} 
                        alt={`Screenshot ${index + 1}`}
                        className="rounded-lg shadow-md border border-gray-200"
                      />
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex justify-end">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;