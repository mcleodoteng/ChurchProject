import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/24/solid";

const Watch = () => {
  const videos = [
    {
      title: "Sunday Service",
      description: "Watch our latest Sunday service",
      thumbnail: "/images/ministries/youth.jpg",
      duration: "1:45:30",
    },
    {
      title: "Bible Study",
      description: "Weekly Bible study sessions",
      thumbnail: "/images/ministries/men.jpg",
      duration: "1:15:00",
    },
    {
      title: "Worship Experience",
      description: "Worship and praise moments",
      thumbnail: "/images/ministries/women.jpg",
      duration: "45:20",
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
            Watch Online
          </h1>
          <p className="text-xl text-gray-600">
            Stream our services and special events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                    >
                      <PlayIcon className="w-8 h-8 text-blue-600" />
                    </motion.div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-white text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <Link
                  to="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Watch Now →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;