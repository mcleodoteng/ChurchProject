import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const FaithlineGeneration = () => {
  const activities = [
    {
      title: "Life Groups",
      description: "Small groups meeting weekly for fellowship and Bible study",
      schedule: "Various Times",
      icon: "👥",
      color: "from-emerald-400 to-teal-500",
    },
    {
      title: "Worship Nights",
      description: "Contemporary worship and prayer gatherings",
      schedule: "Every Friday at 7:00 PM",
      icon: "🎸",
      color: "from-teal-400 to-cyan-500",
    },
    {
      title: "Study Sessions",
      description: "Combined study and prayer meetings during exam periods",
      schedule: "Exam Seasons",
      icon: "📚",
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Social Events",
      description: "Fun activities and community building",
      schedule: "Monthly",
      icon: "🎉",
      color: "from-blue-400 to-indigo-500",
    },
  ];

  const features = [
    {
      title: "Faith & Academics",
      description: "Integrating Christian faith with academic excellence",
      icon: "🎓",
    },
    {
      title: "Community",
      description: "Building lasting friendships and support networks",
      icon: "🤝",
    },
    {
      title: "Leadership",
      description: "Developing the next generation of Christian leaders",
      icon: "⭐",
    },
  ];

  const testimonials = [
    {
      name: "David K.",
      major: "Computer Science",
      year: "Junior",
      quote:
        "Faithline Generation helped me stay grounded in my faith while pursuing my degree.",
    },
    {
      name: "Jennifer L.",
      major: "Business",
      year: "Senior",
      quote:
        "I found my spiritual family here. The support during exam seasons is incredible!",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-blue-600/90" />
            <img
              src="/images/ministries/campus.jpg"
              alt="Faithline Generation"
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
              Faithline Generation
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100">
              Where faith and education meet to transform lives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To support and empower students in their spiritual journey while
              navigating academic life. We create a space where faith can
              flourish alongside education, fostering a community of believers
              who excel in both their studies and their walk with God.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${activity.color} flex items-center justify-center mb-4`}
                >
                  <span className="text-2xl text-white">{activity.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <p className="text-emerald-600 font-medium">
                  {activity.schedule}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <span className="text-5xl mb-4 block">{feature.icon}</span>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-emerald-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Student Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg"
              >
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-emerald-600">
                    {testimonial.major} • {testimonial.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Weekly Schedule
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            {[
              { day: "Monday", activity: "Prayer Meeting", time: "12:00 PM" },
              { day: "Wednesday", activity: "Life Groups", time: "7:00 PM" },
              { day: "Friday", activity: "Worship Night", time: "7:00 PM" },
              { day: "Sunday", activity: "Student Service", time: "11:00 AM" },
            ].map((item, index) => (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{item.day}</h3>
                    <p className="text-gray-600">{item.activity}</p>
                  </div>
                  <span className="text-emerald-600 font-medium">
                    {item.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Connected */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get Connected</h2>
          <p className="text-xl mb-12">
            Join our vibrant community of students pursuing God together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:faithline@church.com"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors w-full sm:w-auto"
            >
              Email Us
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Follow on Instagram
            </a>
          </div>
          <p className="mt-8 text-emerald-100">
            Or text "FAITHLINE" to (123) 456-7890
          </p>
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

export default FaithlineGeneration;
