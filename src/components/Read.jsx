import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpenIcon } from "@heroicons/react/24/solid";

const Read = () => {
  const readings = [
    {
      title: "Daily Devotional",
      description: "Start your day with inspiring devotionals",
      thumbnail: "/images/ministries/youth.jpg",
      category: "Devotional",
    },
    {
      title: "Bible Study Notes",
      description: "In-depth study materials and notes",
      thumbnail: "/images/ministries/men.jpg",
      category: "Study",
    },
    {
      title: "Prayer Guide",
      description: "Daily prayer points and guidance",
      thumbnail: "/images/ministries/women.jpg",
      category: "Prayer",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Daily Readings
          </h1>
          <p className="text-xl text-gray-600">
            Explore our library of spiritual resources
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {readings.map((reading, index) => (
            <motion.div
              key={reading.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={reading.thumbnail}
                  alt={reading.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                    >
                      <BookOpenIcon className="w-8 h-8 text-blue-600" />
                    </motion.div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-blue-600 px-3 py-1 rounded-full text-white text-sm">
                  {reading.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{reading.title}</h3>
                <p className="text-gray-600 mb-4">{reading.description}</p>
                <Link
                  to="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Start Reading →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Read;