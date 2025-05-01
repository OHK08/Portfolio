import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaBook } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Vishwakarma Institute of Information Technology, Pune",
      year: "Expected May 2027",
      description: "Bachelor's degree in Information Technology with CGPA of 9.29",
      icon: <FaGraduationCap className="text-blue-500 text-xl" />
    },
    {
      degree: "Higher Secondary Education",
      institution: "Ryan International School",
      year: "2021-2023", 
      description: "Completed with 93.4% in Science stream (PCM)",
      icon: <FaBook className="text-blue-500 text-xl" />
    }
  ];

  const certifications = [
    {
      title: "IBM MERN Full Stack Development",
      issuer: "IBM",
      year: "2025",
      icon: <FaCertificate className="text-green-500 text-xl" />
    },
    {
      title: "Career Essentials in Project Management",
      issuer: "Microsoft & LinkedIn",
      year: "2025",
      icon: <FaCertificate className="text-green-500 text-xl" />
    },
    {
      title: "The Complete Python Bootcamp",
      issuer: "Udemy",
      year: "2025",
      icon: <FaCertificate className="text-green-500 text-xl" />
    }
  ];

  return (
    <section id="education" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Education & Certifications</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-700 flex items-center">
                <FaGraduationCap className="mr-2 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6 relative">
                {/* Timeline decoration */}
                <div className="absolute left-6 top-0 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
                
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-lg shadow-sm relative pl-10 ml-6 border-l-4 border-blue-500"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 top-6"></div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        {edu.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">{edu.degree}</h4>
                        <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                        <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
                        <p className="text-gray-600">{edu.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-700 flex items-center">
                <FaCertificate className="mr-2 text-green-600" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-green-500"
                  >
                    <div className="flex items-start">
                      <div className="mr-4">
                        {cert.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">{cert.title}</h4>
                        <p className="text-green-600 font-medium mb-1">{cert.issuer}</p>
                        <p className="text-gray-500 text-sm">{cert.year}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Skills Section */}
                {/* <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white p-5 rounded-lg shadow-sm mt-8 border-t-4 border-purple-500"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Academic Focus</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Full-Stack Development', 'Data Structures', 'Algorithms', 
                      'Database Systems', 'Web Technologies', 'Cloud Computing'].map((skill, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;