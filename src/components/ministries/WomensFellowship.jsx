import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const WomensFellowship = () => {
  const coreValues = [
    {
      title: "Faith & Prayer",
      description:
        "Deepening our relationship with God through prayer and devotion",
      icon: "🙏",
      color: "from-rose-400 to-pink-500",
    },
    {
      title: "Sisterhood",
      description: "Supporting and encouraging one another in love",
      icon: "💝",
      color: "from-fuchsia-500 to-purple-500",
    },
    {
      title: "Growth",
      description: "Nurturing spiritual and personal development",
      icon: "🌱",
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "Outreach",
      description: "Sharing God's love through service and ministry",
      icon: "🤗",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const programs = [
    {
      title: "Bible Study",
      description: "Weekly in-depth study of God's Word",
      schedule: "Every Wednesday",
      time: "10:00 AM & 7:00 PM",
      image: "/images/ministries/women.jpg",
    },
    {
      title: "Prayer Circle",
      description: "Monthly gathering for prayer and intercession",
      schedule: "First Friday",
      time: "6:30 PM",
      image: "/images/ministries/women.jpg",
    },
    {
      title: "Mentorship Program",
      description: "One-on-one discipleship and spiritual guidance",
      schedule: "Flexible Schedule",
      time: "By Appointment",
      image: "/images/ministries/women.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Rebecca M.",
      quote:
        "This ministry has helped me grow spiritually and find true sisterhood.",
      role: "Member for 3 years",
    },
    {
      name: "Sarah L.",
      quote: "The support and encouragement I've received here is incredible.",
      role: "Member for 5 years",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/90 to-purple-600/90" />
            <img
              src="/images/ministries/women.jpg"
              alt="Living Spring"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Living Spring
            </h1>
            <p className="text-xl md:text-2xl text-rose-100">
              Empowering women to discover their purpose and walk in God's grace
            </p>
          </motion.div>
        </div>
      </section>

      {/* Purpose Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Our Purpose
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To create a nurturing community where women can grow in their
              faith, develop meaningful relationships, and discover their unique
              calling in Christ. Together, we encourage, equip, and empower one
              another to live out God's purpose for our lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-4`}
                  >
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="text-sm text-gray-500">
                    <p>{program.schedule}</p>
                    <p>{program.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-rose-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-rose-200">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
            <p className="text-xl text-gray-600 mb-12">
              Experience the joy of sisterhood and spiritual growth. We'd love
              to welcome you into our community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
              >
                Join Next Meeting
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gradient-to-br from-rose-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-12">
            Have questions or want to learn more about our women's ministry?
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:women@church.com"
              className="bg-white text-rose-500 px-8 py-4 rounded-lg font-semibold hover:bg-rose-50 transition-colors w-full sm:w-auto"
            >
              Email Us
            </a>
            <a
              href="tel:+1234567890"
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Call: (123) 456-7890
            </a>
          </div>
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

export default WomensFellowship;
