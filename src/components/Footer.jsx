import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Omshree Kenjale</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              A passionate MERN Stack Developer creating web solutions with clean code and 
              innovative approaches.
            </p>
            
            <div className="flex justify-center gap-6 mb-6">
              <motion.a
                whileHover={{ y: -5 }}
                href="https://github.com/OHK08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub className="text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.linkedin.com/in/omshree-kenjale-339546284/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
            </div>
            
            <div className="border-t border-gray-700 w-full max-w-xs mx-auto mb-6"></div>
            
            <p className="text-gray-400 text-sm flex items-center justify-center">
              Made with <FaHeart className="text-red-500 mx-1" /> by Omshree Kenjale
            </p>
            <p className="text-gray-400 text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;