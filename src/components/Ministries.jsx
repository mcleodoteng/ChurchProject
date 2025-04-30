import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const ministryData = [
  {
    name: "Overcomers",
    description:
      "A vibrant community of believers, focusing on spiritual growth, fellowship, and leadership development.",
    meetingTime: "Saturdays at 4:00 PM",
    leader: "John Smith",
    image: "/public/images/ministries/youth.jpg",
    color: "from-purple-500 to-pink-500",
    icon: "🌟",
  },
  {
    name: "River of Life",
    description:
      "Building strong Christian communities through Bible study, prayer, and community service.",
    meetingTime: "First Saturday of every month at 8:00 AM",
    leader: "David Johnson",
    image: "/public/images/ministries/men.jpg",
    color: "from-blue-500 to-indigo-500",
    icon: "⚔️",
  },
  {
    name: "Living Spring",
    description:
      "Empowering through spiritual growth, mentorship, and community outreach.",
    meetingTime: "Second Saturday of every month at 9:00 AM",
    leader: "Sarah Williams",
    image: "/public/images/ministries/women.jpg",
    color: "from-rose-400 to-pink-500",
    icon: "💝",
  },
  {
    name: "Faithline Generation",
    description:
      "Supporting students in their faith journey through fellowship and Bible study.",
    meetingTime: "Fridays at 6:00 PM",
    leader: "Michael Brown",
    image: "/public/images/ministries/campus.jpg",
    color: "from-emerald-400 to-cyan-500",
    icon: "🎓",
  },
];

const MinistryCard = ({ ministry, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const getMinistryPath = (name) => {
    switch (name) {
      case "Overcomers":
        return "/ministries/youth";
      case "River of Life":
        return "/ministries/men";
      case "Living Spring":
        return "/ministries/women";
      case "Faithline Generation":
        return "/ministries/campus";
      default:
        return "/ministries";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
        <div className="relative h-64">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-80`}
          />
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
            className="relative h-full"
          >
            <img
              src={ministry.image}
              alt={ministry.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
            <span className="text-2xl">{ministry.icon}</span>
          </div>
        </div>
        <div className="p-6 relative">
          <motion.div
            animate={{
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {ministry.name}
            </h2>
            <p className="text-gray-600 mb-4">{ministry.description}</p>
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <p className="text-gray-700 flex items-center">
                <span className="font-semibold min-w-[120px]">
                  Meeting Time:
                </span>
                <span>{ministry.meetingTime}</span>
              </p>
              <p className="text-gray-700 flex items-center">
                <span className="font-semibold min-w-[120px]">Leader:</span>
                <span>{ministry.leader}</span>
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-6 w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r ${ministry.color} hover:shadow-lg transition-all duration-300`}
              onClick={() => navigate(getMinistryPath(ministry.name))}
            >
              Join Ministry
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Ministries = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMinistries = ministryData.filter(
    (ministry) =>
      ministry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ministry.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Ministries
          </h1>
          <p className="text-xl text-gray-600">
            Discover where you can serve and grow in your faith journey
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto mb-12"
        >
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search ministries..."
              className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-300 hover:shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMinistries.map((ministry, index) => (
            <MinistryCard
              key={ministry.name}
              ministry={ministry}
              index={index}
            />
          ))}
        </div>
      </div>
      <br />

      {/* Footer */}
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
                    to="/sermons"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    Sermons
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

export default Ministries;
