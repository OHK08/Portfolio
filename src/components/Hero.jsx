import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import profile from '../assets/images/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-blue-600">Omshree Kenjale</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              MERN Stack Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Motivated student with a strong foundation in classroom knowledge, 
              seeking to leverage skills in real-world applications. Committed to 
              continuous learning and delivering high-quality results.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold">
                <img src = {profile} alt="Omshree Kenjale"/>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <motion.a
                whileHover={{ y: -5 }}
                href="https://github.com/OHK08"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaGithub className="text-gray-800 text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.linkedin.com/in/omshree-kenjale-339546284/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaLinkedin className="text-blue-700 text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="mailto:omshreekenjale.ok@gmail.com"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <HiOutlineMail className="text-gray-800 text-xl" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;