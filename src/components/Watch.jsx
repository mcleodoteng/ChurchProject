import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  PlayIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import VideoModal from "./VideoModal";

const Watch = () => {
  const location = useLocation();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videos = [
    {
      title: "Sunday Service",
      description: "Watch our latest Sunday service",
      thumbnail: "/images/ministries/youth.jpg",
      duration: "1:45:30",
      date: "April 28, 2025",
      speaker: "Pastor John Doe",
      videoId: "example1", // Replace with actual YouTube video IDs
    },
    {
      title: "Bible Study",
      description: "Weekly Bible study sessions",
      thumbnail: "/images/ministries/men.jpg",
      duration: "1:15:00",
      date: "April 25, 2025",
      speaker: "Elder James Smith",
      videoId: "example2",
    },
    {
      title: "Worship Experience",
      description: "Worship and praise moments",
      thumbnail: "/images/ministries/women.jpg",
      duration: "45:20",
      date: "April 23, 2025",
      speaker: "Worship Team",
      videoId: "example3",
    },
    {
      title: "Youth Conference",
      description: "Annual youth conference highlights",
      thumbnail: "/images/ministries/youth.jpg",
      duration: "2:30:00",
      date: "April 20, 2025",
      speaker: "Youth Pastor",
      videoId: "example4",
    },
    {
      title: "Prayer Meeting",
      description: "Weekly corporate prayer session",
      thumbnail: "/images/ministries/faithline.jpg",
      duration: "1:00:00",
      date: "April 18, 2025",
      speaker: "Prayer Team",
      videoId: "example5",
    },
    {
      title: "Special Event",
      description: "Easter celebration service",
      thumbnail: "/images/ministries/betzy-arosemena-ELItsm8MDtM-unsplash.jpg",
      duration: "2:00:00",
      date: "April 15, 2025",
      speaker: "Various Speakers",
      videoId: "example6",
    },
  ];

  useEffect(() => {
    // Check for video ID in URL when component mounts
    const searchParams = new URLSearchParams(location.search);
    const videoId = searchParams.get("video");
    if (videoId) {
      const video = videos.find((v) => v.videoId === videoId);
      if (video) {
        setSelectedVideo(video);
        setIsModalOpen(true);
      }
    }
  }, [location]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/ministries/betzy-arosemena-ELItsm8MDtM-unsplash.jpg"
            alt="Watch Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            Watch Online
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center">
            Stream our services, events, and special moments anytime, anywhere
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
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
                      <motion.button
                        onClick={() => handleVideoClick(video)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                      >
                        <PlayIcon className="w-8 h-8 text-blue-600" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-white text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {video.speaker}
                      </p>
                      <p className="text-xs text-gray-500">{video.date}</p>
                    </div>
                    <button
                      onClick={() => handleVideoClick(video)}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Watch Now →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedVideo(null);
        }}
      />

      {/* Footer Section */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                We are a vibrant community of believers committed to sharing
                God's love and making a difference in our world.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ministries"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    Ministries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/give"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    Give
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5" />
                  123 Church Street
                </li>
                <li className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5" />
                  City, State 12345
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  Phone: (123) 456-7890
                </li>
                <li className="flex items-center gap-2">
                  <EnvelopeIcon className="h-5 w-5" />
                  Email: info@church.com
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-4">Service Times</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  Sunday: 9:00 AM & 11:30 AM
                </li>
                <li className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  Wednesday: 7:00 PM
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Live Chat Button */}
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="flex items-center space-x-2 text-sm border border-white/20 rounded-full px-4 py-2 hover:bg-white/10 transition-colors">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                Live Chat
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          >
            <p>
              &copy; {new Date().getFullYear()} Church Name. All rights
              reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Watch;
