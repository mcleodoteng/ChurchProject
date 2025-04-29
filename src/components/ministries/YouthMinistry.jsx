import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const YouthMinistry = () => {
  const activities = [
    {
      title: "Weekly Bible Study",
      description: "Deep dive into God's word with interactive discussions",
      icon: "📖",
      time: "Wednesdays at 6:30 PM",
    },
    {
      title: "Youth Worship Night",
      description: "Contemporary worship and prayer sessions",
      icon: "🎸",
      time: "Fridays at 7:00 PM",
    },
    {
      title: "Community Service",
      description: "Making a difference in our local community",
      icon: "🤝",
      time: "Monthly - Last Saturday",
    },
    {
      title: "Sports & Games",
      description: "Fellowship through fun activities and sports",
      icon: "⚽",
      time: "Saturdays at 3:00 PM",
    },
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      age: 17,
      quote:
        "This youth ministry has helped me grow in my faith and find true friendships.",
      image: "/images/ministries/youth.jpg",
    },
    {
      name: "Michael R.",
      age: 19,
      quote:
        "I've learned so much about leadership and serving others through our community projects.",
      image: "/images/ministries/youth.jpg",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-500/90" />
            <img
              src="/images/ministries/youth.jpg"
              alt="Overcomers Ministry"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Overcomers
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Empowering young people to live boldly for Christ
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
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To create a vibrant community where young people can encounter
              God, build lasting friendships, and discover their purpose in
              Christ. Through worship, discipleship, and service, we empower the
              next generation to make a difference in their world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What We Do</h2>
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
                <span className="text-4xl mb-4 block">{activity.icon}</span>
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <p className="text-purple-600 font-medium">{activity.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Youth Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      {testimonial.name}, {testimonial.age}
                    </h3>
                    <p className="italic mt-2">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">
              Join Our Youth Community
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Be part of something bigger. Connect with other young people who
              are passionate about faith and making a difference.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
            >
              Get Connected
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Weekly Schedule
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {[
                {
                  day: "Wednesday",
                  activity: "Bible Study",
                  time: "6:30 PM - 8:00 PM",
                },
                {
                  day: "Friday",
                  activity: "Worship Night",
                  time: "7:00 PM - 9:00 PM",
                },
                {
                  day: "Saturday",
                  activity: "Sports & Games",
                  time: "3:00 PM - 5:00 PM",
                },
                {
                  day: "Sunday",
                  activity: "Youth Service",
                  time: "11:00 AM - 12:30 PM",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">{item.day}</h3>
                      <p className="text-gray-600">{item.activity}</p>
                    </div>
                    <span className="text-purple-600 font-medium">
                      {item.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Have Questions?</h2>
          <p className="text-xl mb-12">
            We'd love to hear from you! Reach out to our youth ministry team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:youth@church.com"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+1234567890"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Call: (123) 456-7890
            </a>
          </div>
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

export default YouthMinistry;
