import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">About Me</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Who am I?</h3>
              <p className="text-gray-600 mb-4">
                I'm Omshree Kenjale, a passionate MERN Stack Developer currently pursuing my 
                Bachelor of Technology in Information Technology at Vishwakarma Institute of 
                Information Technology, Pune.
              </p>
              <p className="text-gray-600 mb-4">
                With a strong foundation in both frontend and backend technologies, I enjoy 
                building complete web applications that solve real-world problems. My journey 
                in tech is complemented by my diverse interests in dance, martial arts, and music.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me practicing Bharatanatyam, training for 
                karate, or playing the piano. I believe this combination of technical and 
                creative pursuits gives me a unique perspective in problem-solving.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">My Skills & Tools</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Firebase', 'MySQL', 
                  'HTML/CSS', 'Tailwind CSS', 'Bootstrap', 'C++', 'Python'].map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-700">Certifications</h3>
              <ul className="space-y-2">
                {[
                  'Bootstrap – Unstop certification',
                  'IBM MERN Full Stack Development',
                  'Career Essentials in Project Management by Microsoft and LinkedIn',
                  'C++ – Unstop certification',
                  'The complete Python bootcamp from zero to hero in Python - Udemy certification'
                ].map((cert, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="text-blue-500 mr-2">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;