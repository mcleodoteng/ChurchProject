import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRightIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/public/images/ministries/kabila-haile-FPIQ3jyCsK8-unsplash.jpg",
    "/public/images/ministries/ayodele-adeniyi-PaanyDCZcwg-unsplash.jpg",
    "/public/images/ministries/betzy-arosemena-ELItsm8MDtM-unsplash.jpg",
    "/public/images/ministries/kemi-taiwo-sLKAq9Vajys-unsplash.jpg",
  ];

  // Slider images for the about section
  const sliderImages = [
    "/public/images/ministries/kabila-haile-FPIQ3jyCsK8-unsplash.jpg",
    "/public/images/ministries/ayodele-adeniyi-PaanyDCZcwg-unsplash.jpg",
    "/public/images/ministries/betzy-arosemena-ELItsm8MDtM-unsplash.jpg",
    "/public/images/ministries/kemi-taiwo-sLKAq9Vajys-unsplash.jpg",
  ];

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000); // Reduced to 6 seconds for better engagement
    return () => clearInterval(timer);
  }, []);

  const [events] = useState([
    {
      id: 1,
      title: "Sunday Service",
      date: "Every Sunday",
      time: "9:00 AM & 11:30 AM",
      image: "/images/ministries/men.jpg",
    },
    {
      id: 2,
      title: "Youth Night",
      date: "Every Friday",
      time: "7:00 PM",
      image: "/images/ministries/women.jpg",
    },
    // Add more events as needed
  ]);

  const [sermons] = useState([
    {
      id: 1,
      title: "Walking in Faith",
      speaker: "Pastor John Doe",
      date: "April 14, 2025",
      image: "/images/ministries/youth.jpg",
    },
    {
      id: 2,
      title: "The Power of Prayer",
      speaker: "Pastor Jane Smith",
      date: "April 7, 2025",
      image: "/images/ministries/campus.jpg",
    },
    // Add more sermons as needed
  ]);

  const containerVariants = {
    offscreen: {
      perspective: 1000,
    },
    onscreen: {
      perspective: 1000,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    offscreen: {
      x: -1000,
      rotate: -45,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        mass: 1.2,
        duration: 1.5,
      },
    },
  };

  const subtextVariants = {
    offscreen: {
      x: -1000,
      rotate: -45,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        mass: 1,
        duration: 1.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen bg-gradient-to-r from-black/70 to-black/50 text-white overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: 1,
              scale: 1.1,
              transition: {
                opacity: { duration: 1, ease: "easeInOut" },
                scale: { duration: 6, ease: "linear" },
              },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            className="absolute inset-0"
          >
            <img
              src={backgroundImages[currentImageIndex]}
              alt="Church worship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors z-20"
        >
          <ChevronRightIcon className="w-6 h-6 transform rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors z-20"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center perspective-1000">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.6 }}
            variants={containerVariants}
            className="transform-style-3d origin-left"
          >
            <motion.h1
              variants={textVariants}
              className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl origin-left"
              style={{
                textShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
            >
              Welcome Home
            </motion.h1>

            <motion.p
              variants={subtextVariants}
              className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-lg origin-left"
            >
              Join us in our journey of faith, community, and purpose.
              Experience God's love in a fresh way.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all flex items-center gap-2 w-fit"
            >
              Plan Your Visit <ChevronRightIcon className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* DareToHope Section */}
      <section className="bg-[#FDF8F6] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  Ten services, Six sites,
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  One church,
                </h2>
                <p className="text-2xl md:text-3xl mb-4">
                  In person and online; we'd love to see you!
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  For all. For London. Always.
                </p>
                <div className="mt-8">
                  <Link
                    to="/locations"
                    className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors"
                  >
                    Find times and locations{" "}
                    <ChevronRightIcon className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 400"
                >
                  {/* Palm leaf decorative elements */}
                  <path
                    d="M200 50 C 300 100, 350 200, 350 300"
                    stroke="#234F1E"
                    strokeWidth="20"
                    fill="none"
                    className="palm-leaf"
                  />
                  <path
                    d="M200 50 C 100 100, 50 200, 50 300"
                    stroke="#3B82F6"
                    strokeWidth="20"
                    fill="none"
                    className="palm-leaf"
                  />
                  <path
                    d="M150 350 C 200 300, 250 300, 300 350"
                    stroke="#F97316"
                    strokeWidth="20"
                    fill="none"
                    className="palm-leaf"
                  />
                  {/* Central arch/window element */}
                  <rect
                    x="150"
                    y="150"
                    width="100"
                    height="150"
                    fill="#FDF8F6"
                    rx="50"
                  />
                  {/* Rising sun element */}
                  <circle cx="200" cy="250" r="25" fill="#F97316" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[16/9] mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">
                  {event.date} | {event.time}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Sermons Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Latest Sermons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon) => (
              <motion.div
                key={sermon.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[16/9] mb-4">
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{sermon.title}</h3>
                <p className="text-gray-600">{sermon.speaker}</p>
                <p className="text-gray-500">{sermon.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Join Us This Sunday</h2>
          <p className="text-xl mb-12">
            Experience worship, community, and life-changing messages
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border border-white/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Morning Service</h3>
              <p className="text-lg">9:00 AM</p>
            </div>
            <div className="p-8 border border-white/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Evening Service</h3>
              <p className="text-lg">11:30 AM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Support Our Ministry</h2>
            <p className="text-xl mb-8">
              Your generous giving helps us continue to impact lives and spread
              God's love throughout our community.
            </p>
            <Link
              to="/give"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Give Now <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

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

export default Home;
