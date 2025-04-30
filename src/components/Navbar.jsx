import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinistryOpen, setIsMinistryOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMinistryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const ministries = [
    {
      name: "Living Spring",
      path: "/ministries/women",
      image: "/images/ministries/women.jpg",
      description: "Living Spring's Fellowship Ministry",
    },
    {
      name: "Faithline Generation",
      path: "/ministries/campus",
      image: "/images/ministries/campus.jpg",
      description: "Faithline Generation's Campus Ministry",
    },
    {
      name: "River of Life",
      path: "/ministries/men",
      image: "/images/ministries/men.jpg",
      description: "River of Life's Fellowship Ministry",
    },
    {
      name: "Overcomers",
      path: "/ministries/youth",
      image: "/images/ministries/youth.jpg",
      description: "Overcomers' Ministry",
    },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Ministries", path: "/ministries" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Give", path: "/give" },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 mr-3">
                <img
                  src="/images/ministries/logo.jpg"
                  alt="Church Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <Link
                to="/"
                className="text-white font-bold text-2xl font-bona-nova hover:text-gray-200 transition-colors duration-300"
              >
                Victory House Church
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    ref={item.name === "Ministries" ? dropdownRef : null}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Link
                        to={item.path}
                        className="text-gray-300 relative px-3 py-2 rounded-md text-sm font-medium group flex items-center"
                        onClick={() => {
                          if (item.name === "Ministries") {
                            setIsMinistryOpen(!isMinistryOpen);
                          }
                        }}
                        onMouseEnter={() => {
                          if (item.name === "Ministries") {
                            setIsMinistryOpen(true);
                          }
                        }}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {item.name === "Ministries" && (
                          <motion.div
                            animate={{ rotate: isMinistryOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDownIcon className="ml-1 h-4 w-4" />
                          </motion.div>
                        )}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-out"></span>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:pl-6"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {item.name === "Ministries" && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="pl-4 space-y-1 mt-2"
                      >
                        {ministries.map((ministry) => (
                          <Link
                            key={ministry.name}
                            to={ministry.path}
                            className="text-gray-400 hover:text-white block px-3 py-2 text-sm transition-all duration-300 hover:pl-6"
                            onClick={() => setIsOpen(false)}
                          >
                            {ministry.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Ministries Dropdown */}
      <AnimatePresence>
        {isMinistryOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 w-full bg-black/95 backdrop-blur-sm z-40"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ministries.map((ministry) => (
                  <motion.div
                    key={ministry.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={ministry.path}
                      className="group bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 block"
                      onClick={() => setIsMinistryOpen(false)}
                    >
                      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                        <img
                          src={ministry.image}
                          alt={ministry.name}
                          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                      <h3 className="text-white font-medium text-lg group-hover:text-gray-200 transition-colors">
                        {ministry.name}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {ministry.description}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
