import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const BlobBorder = ({ children, index }) => {
  // Create different variations based on index
  const variations = [
    {
      duration: 8,
      scale: [1, 1.05, 0.95, 1.02, 1],
      borderRadius: [
        "60% 40% 50% 50% / 60% 50% 50% 40%",
        "50% 60% 40% 50% / 40% 60% 50% 60%",
        "40% 50% 60% 50% / 50% 40% 60% 50%",
        "50% 40% 50% 60% / 60% 50% 40% 50%",
        "60% 40% 50% 50% / 60% 50% 50% 40%",
      ],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      duration: 10,
      scale: [1, 1.08, 0.92, 1.04, 1],
      borderRadius: [
        "70% 30% 50% 50% / 50% 60% 40% 50%",
        "50% 50% 30% 70% / 60% 40% 60% 40%",
        "40% 60% 70% 30% / 40% 50% 50% 60%",
        "60% 40% 40% 60% / 50% 30% 70% 50%",
        "70% 30% 50% 50% / 50% 60% 40% 50%",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      duration: 12,
      scale: [1, 0.95, 1.08, 0.98, 1],
      borderRadius: [
        "50% 50% 40% 60% / 60% 30% 70% 40%",
        "30% 70% 70% 30% / 50% 60% 40% 50%",
        "60% 40% 30% 70% / 40% 50% 50% 60%",
        "50% 50% 60% 40% / 30% 60% 40% 70%",
        "50% 50% 40% 60% / 60% 30% 70% 40%",
      ],
      gradient: "from-pink-500 to-red-500",
    },
    {
      duration: 9,
      scale: [1, 1.06, 0.94, 1.03, 1],
      borderRadius: [
        "40% 60% 60% 40% / 70% 30% 50% 50%",
        "60% 40% 30% 70% / 50% 50% 60% 40%",
        "50% 50% 70% 30% / 40% 60% 30% 70%",
        "30% 70% 50% 50% / 60% 40% 50% 50%",
        "40% 60% 60% 40% / 70% 30% 50% 50%",
      ],
      gradient: "from-blue-500 to-teal-500",
    },
  ];

  const variation = variations[index % variations.length];

  const blobVariants = {
    initial: { scale: 1 },
    animate: {
      scale: variation.scale,
      borderRadius: variation.borderRadius,
      transition: {
        duration: variation.duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={blobVariants}
      initial="initial"
      animate="animate"
      className="relative w-48 h-48 mx-auto mb-6"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${variation.gradient} rounded-[inherit]`}
      />
      <div className="absolute inset-[3px] bg-white rounded-[inherit] overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};

const About = () => {
  const teamMembers = [
    {
      name: "Pastor John Smith",
      role: "Senior Pastor",
      image: "/images/ministries/men.jpg",
      bio: "Leading our church with wisdom and compassion for over 15 years.",
    },
    {
      name: "Sarah Williams",
      role: "Worship Leader",
      image: "/images/ministries/women.jpg",
      bio: "Bringing hearts closer to God through music and praise.",
    },
    {
      name: "Michael Brown",
      role: "Youth Pastor",
      image: "/images/ministries/youth.jpg",
      bio: "Guiding and inspiring the next generation of believers.",
    },
    {
      name: "Rachel Thompson",
      role: "Children's Ministry Director",
      image: "/images/ministries/campus.jpg",
      bio: "Nurturing young hearts in faith and fellowship.",
    },
  ];

  const sliderImages = [
    "/images/ministries/kabila-haile-FPIQ3jyCsK8-unsplash.jpg",
    "/images/ministries/ayodele-adeniyi-PaanyDCZcwg-unsplash.jpg",
    "/images/ministries/betzy-arosemena-ELItsm8MDtM-unsplash.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src="/images/ministries/betzy-arosemena-ELItsm8MDtM-unsplash.jpg"
            alt="Church gathering"
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Building a community of faith, hope, and love since 1990
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To transform lives through Christ's love, build a strong
                community of believers, and make a positive impact in our world
                through service and compassion.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be a beacon of hope, reaching people with the life-changing
                message of Jesus Christ and equipping them to make a difference
                in their communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DareToHope Section */}
      <section className="bg-[#FDF8F6] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Ten services, Six sites, One church,
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-4"
            >
              In person and online; we'd love to see you!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600"
            >
              For all. For London. Always.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-5xl font-bold mb-8">DareToHope</h2>
              <h3 className="text-2xl font-semibold mb-4">Easter at HTB</h3>
              <p className="text-gray-600 mb-8">
                We put our hope in someone or something every day, reaching for
                stability in times of uncertainty. But it's our hope in the
                right things?
              </p>
              <p className="text-gray-600">
                Easter is when we remember that Jesus died and rose again to
                life, for us. Because of this, we have hope that it does not
                disappoint.
              </p>
              <Link
                to="/locations"
                className="inline-block mt-6 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Find out more here
              </Link>
            </motion.div>

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
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background */}
                  <rect width="400" height="400" fill="#FDF8F6" />

                  {/* Decorative background shapes */}
                  <path
                    d="M0 250 Q 200 200 400 250 L 400 400 L 0 400 Z"
                    fill="#E76F51"
                    opacity="0.2"
                  />
                  <path
                    d="M0 300 Q 200 250 400 300 L 400 400 L 0 400 Z"
                    fill="#6B7FD7"
                    opacity="0.2"
                  />

                  {/* Arch */}
                  <path
                    d="M150 100 Q 200 50 250 100 L 250 250 L 150 250 Z"
                    fill="#FFFFFF"
                    stroke="#2D3436"
                    strokeWidth="2"
                  />

                  {/* Cloud */}
                  <path
                    d="M180 180 Q 200 170 220 180"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                  />

                  {/* Sun */}
                  <circle cx="200" cy="160" r="15" fill="#E76F51" />
                  <g className="sun-rays">
                    {[...Array(8)].map((_, i) => (
                      <line
                        key={i}
                        x1="200"
                        y1="140"
                        x2="200"
                        y2="130"
                        stroke="#E76F51"
                        strokeWidth="2"
                        transform={`rotate(${i * 45} 200 160)`}
                      />
                    ))}
                  </g>

                  {/* Palm Leaves */}
                  <g className="palm-leaves">
                    {/* Left leaves */}
                    <path
                      d="M120 50 C 150 100, 130 150, 100 180"
                      fill="none"
                      stroke="#234F1E"
                      strokeWidth="8"
                      className="palm-leaf"
                    />
                    <path
                      d="M130 70 C 160 120, 140 170, 110 200"
                      fill="none"
                      stroke="#234F1E"
                      strokeWidth="8"
                      className="palm-leaf"
                    />

                    {/* Right leaves */}
                    <path
                      d="M280 50 C 250 100, 270 150, 300 180"
                      fill="none"
                      stroke="#234F1E"
                      strokeWidth="8"
                      className="palm-leaf"
                    />
                    <path
                      d="M270 70 C 240 120, 260 170, 290 200"
                      fill="none"
                      stroke="#234F1E"
                      strokeWidth="8"
                      className="palm-leaf"
                    />
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Faith</h3>
              <p className="text-gray-600">
                Unwavering trust in God's promises and guidance in all we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                Foster genuine relationships and support one another in love.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Service</h3>
              <p className="text-gray-600">
                Demonstrate God's love through action and compassionate service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Leadership Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <BlobBorder index={index}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </BlobBorder>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sliderImages.map((image, index) => (
            <div key={index} className="min-w-full h-full">
              <img
                src={image}
                alt={`Church life ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl mb-8">
              We'd love to have you join us this Sunday and become part of our
              church family.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Plan Your Visit
            </button>
          </motion.div>
        </div>
      </section>

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

export default About;
