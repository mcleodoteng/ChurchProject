import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { OptimizedImage } from "./Home";
import {
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  SpeakerWaveIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartSolidIcon,
  PlayIcon as PlayIconSolid,
} from "@heroicons/react/24/solid";

const Listen = () => {
  const [currentPodcast, setCurrentPodcast] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSeries, setSelectedSeries] = useState("All Series");
  const [likedPodcasts, setLikedPodcasts] = useState({});

  const categories = [
    "All Categories",
    "Sermons",
    "Bible Study",
    "Youth Messages",
    "Special Events",
    "Testimonies",
  ];

  const series = [
    "All Series",
    "Sunday Sermons",
    "Wednesday Bible Study",
    "Youth Series",
    "Special Events",
  ];

  const podcasts = [
    {
      id: 1,
      title: "Walking in Faith",
      speaker: "Pastor John Smith",
      date: "June 8, 2025",
      duration: "45:30",
      description: "Understanding how to strengthen your faith walk daily",
      image: "/images/ministries/img (1).jpg",
      series: "Sunday Sermons",
      category: "Sermons",
    },
    {
      id: 2,
      title: "The Power of Prayer",
      speaker: "Pastor Sarah Johnson",
      date: "June 5, 2025",
      duration: "38:15",
      description:
        "Discovering the transformative power of prayer in your life",
      image: "/images/ministries/img (2).jpg",
      series: "Bible Study",
      category: "Bible Study",
    },
    {
      id: 3,
      title: "Youth and Modern Faith",
      speaker: "Youth Pastor Michael",
      date: "June 1, 2025",
      duration: "42:00",
      description: "Navigating faith in the modern world as a young Christian",
      image: "/images/ministries/img (8).JPG",
      series: "Youth Series",
      category: "Youth Messages",
    },
    {
      id: 4,
      title: "Community Impact",
      speaker: "Pastor John Smith",
      date: "May 28, 2025",
      duration: "36:45",
      description: "Making a difference in your community through faith",
      image: "/images/ministries/img (7).JPG",
      series: "Special Events",
      category: "Special Events",
    },
  ];

  const togglePlay = (podcast) => {
    if (currentPodcast?.id === podcast.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentPodcast(podcast);
      setIsPlaying(true);
    }
  };

  const toggleLike = (podcastId) => {
    setLikedPodcasts((prev) => ({
      ...prev,
      [podcastId]: !prev[podcastId],
    }));
  };

  const filteredPodcasts = podcasts.filter((podcast) => {
    const matchesSearch =
      podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      podcast.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      podcast.category === selectedCategory;
    const matchesSeries =
      selectedSeries === "All Series" || podcast.series === selectedSeries;
    return matchesSearch && matchesCategory && matchesSeries;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImage
            src="/images/ministries/img (6).JPG"
            alt="Listen Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            Listen & Grow
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center">
            Explore our collection of sermons, teachings, and inspirational
            messages
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search all podcasts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories Dropdown */}
            <div className="relative">
              <select
                className="appearance-none w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="h-5 w-5 absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>

            {/* Series Dropdown */}
            <div className="relative">
              <select
                className="appearance-none w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
              >
                {series.map((series) => (
                  <option key={series} value={series}>
                    {series}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="h-5 w-5 absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Podcasts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPodcasts.map((podcast) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[16/9]">
                  <OptimizedImage
                    src={podcast.image}
                    alt={podcast.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => togglePlay(podcast)}
                      className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-colors"
                    >
                      {isPlaying && currentPodcast?.id === podcast.id ? (
                        <PauseIcon className="h-8 w-8 text-white" />
                      ) : (
                        <PlayIconSolid className="h-8 w-8 text-white" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{podcast.title}</h3>
                      <p className="text-gray-600">{podcast.speaker}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <button
                        onClick={() => toggleLike(podcast.id)}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                      >
                        {likedPodcasts[podcast.id] ? (
                          <HeartSolidIcon className="h-6 w-6 text-red-500" />
                        ) : (
                          <HeartIcon className="h-6 w-6" />
                        )}
                      </button>
                      <span className="text-sm text-gray-500">
                        {podcast.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{podcast.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {podcast.date}
                    </span>
                    <span className="text-xs text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {podcast.series}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Audio Player */}
      <AnimatePresence>
        {currentPodcast && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40"
          >
            {" "}
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
              <OptimizedImage
                src={currentPodcast.image}
                alt={currentPodcast.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{currentPodcast.title}</h3>
                <p className="text-sm text-gray-600">
                  {currentPodcast.speaker}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setCurrentPodcast(null);
                    setIsPlaying(false);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-gray-700"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <BackwardIcon className="h-6 w-6 text-gray-700" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                >
                  {isPlaying ? (
                    <PauseIcon className="h-6 w-6 text-white" />
                  ) : (
                    <PlayIconSolid className="h-6 w-6 text-white" />
                  )}
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ForwardIcon className="h-6 w-6 text-gray-700" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <SpeakerWaveIcon className="h-6 w-6 text-gray-700" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default Listen;
