import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinistryOpen, setIsMinistryOpen] = useState(false);

  const ministries = [
    {
      name: "Overcomers",
      path: "/ministries/youth",
      image: "/images/ministries/youth.jpg",
    },
    {
      name: "River of Life",
      path: "/ministries/men",
      image: "/images/ministries/men.jpg",
    },
    {
      name: "Living Spring",
      path: "/ministries/women",
      image: "/images/ministries/women.jpg",
    },
    {
      name: "Faithline Generation",
      path: "/ministries/campus",
      image: "/images/ministries/campus.jpg",
    },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Give", path: "/give" },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-black backdrop-blur-sm">
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
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-gray-300 relative px-3 py-2 rounded-md text-sm font-medium group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-out"></span>
                  </Link>
                ))}
                <button
                  onClick={() => setIsMinistryOpen(!isMinistryOpen)}
                  className="flex items-center text-gray-300 relative px-3 py-2 rounded-md text-sm font-medium group"
                >
                  <span className="relative z-10 flex items-center">
                    Ministries
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-out"></span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:pl-6"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative">
                <Link
                  to="/ministries"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:pl-6"
                  onClick={() => setIsOpen(false)}
                >
                  Ministries
                </Link>
                <div className="pl-4 space-y-1">
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
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Ministries Dropdown */}
      {isMinistryOpen && (
        <div className="fixed top-20 left-0 w-full bg-black/95 backdrop-blur-sm z-40 transform transition-transform duration-200 ease-in-out">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ministries.map((ministry) => (
                <Link
                  key={ministry.name}
                  to={ministry.path}
                  className="group bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                  onClick={() => setIsMinistryOpen(false)}
                >
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={ministry.image}
                      alt={ministry.name}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-white font-medium text-lg group-hover:text-gray-200 transition-colors">
                    {ministry.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
