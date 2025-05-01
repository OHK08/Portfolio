import { motion } from 'framer-motion';
import { FaMedal, FaGraduationCap, FaMicroscope, FaUsers, FaTrophy } from 'react-icons/fa';

const Accomplishments = () => {
  const accomplishments = [
    {
      icon: <FaMicroscope className="text-2xl" />,
      title: "Published Research Paper",
      description: "Research paper published in the IJERT journal on the Smart Electricity Tracking System",
      category: "Academic"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "AR/VR Club Member",
      description: "Active member at XRGF, VIIT working on cutting-edge extended reality projects",
      category: "Technical"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Ideas & Social Media Head",
      description: "Led the ideas and social media team at OIR, VIIT organizing technical events",
      category: "Leadership"
    },
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Bharatnatyam Visharad",
      description: "Achieved first class in Bharatnatyam Visharad examination",
      category: "Cultural"
    },
    {
      icon: <FaMedal className="text-2xl" />,
      title: "National Karate Champion",
      description: "Silver medalist in the National Karate Championship (Shito-Ryu style)",
      category: "Sports"
    }
  ];

  const activities = [
    {
      icon: <FaGraduationCap className="text-xl" />,
      title: "Bharatanatyam Dancer",
      duration: "10+ years"
    },
    {
      icon: <FaTrophy className="text-xl" />,
      title: "Black Belt Karate",
      style: "Shito-Ryu"
    },
    {
      icon: <FaMedal className="text-xl" />,
      title: "Amateur Pianist",
      level: "Grade 3"
    }
  ];

  return (
    <section id="accomplishments" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Accomplishments</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Highlights of my achievements across various domains
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {accomplishments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    item.category === "Academic" ? "bg-blue-100 text-blue-600" :
                    item.category === "Technical" ? "bg-purple-100 text-purple-600" :
                    item.category === "Leadership" ? "bg-green-100 text-green-600" :
                    item.category === "Cultural" ? "bg-yellow-100 text-yellow-600" :
                    "bg-red-100 text-red-600"
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                    <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                      item.category === "Academic" ? "bg-blue-50 text-blue-700" :
                      item.category === "Technical" ? "bg-purple-50 text-purple-700" :
                      item.category === "Leadership" ? "bg-green-50 text-green-700" :
                      item.category === "Cultural" ? "bg-yellow-50 text-yellow-700" :
                      "bg-red-50 text-red-700"
                    }`}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Activities & Honors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-center shadow-sm"
              >
                <div className="bg-white p-3 rounded-full inline-flex items-center justify-center mb-3">
                  {activity.icon}
                </div>
                <h4 className="font-medium text-gray-800">{activity.title}</h4>
                {activity.duration && (
                  <p className="text-sm text-gray-500 mt-1">{activity.duration}</p>
                )}
                {activity.style && (
                  <p className="text-sm text-gray-500 mt-1">{activity.style}</p>
                )}
                {activity.level && (
                  <p className="text-sm text-gray-500 mt-1">{activity.level}</p>
                )}
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Accomplishments;