import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

// Initialize EmailJS with environment variable
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const CheckmarkAnimation = () => (
  <svg className="w-16 h-16" viewBox="0 0 50 50">
    <motion.circle
      cx="25"
      cy="25"
      r="22"
      fill="none"
      stroke="#4CAF50"
      strokeWidth="3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
    <motion.path
      d="M15 25 L23 33 L35 17"
      fill="none"
      stroke="#4CAF50"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
    />
  </svg>
);

const Events = () => {
  const [showPrayerForm, setShowPrayerForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [prayerFormData, setPrayerFormData] = useState({
    name: "",
    email: "",
    request: "",
    isPrivate: false,
  });

  const upcomingEvents = [
    {
      id: 1,
      title: "Easter Sunday Service",
      date: "April 27, 2025",
      time: "9:00 AM & 11:30 AM",
      description:
        "Join us for a special Easter celebration with worship and fellowship.",
      image: "/public/images/ministries/kemi-taiwo-sLKAq9Vajys-unsplash.jpg",
    },
    {
      id: 2,
      title: "Youth Conference",
      date: "May 3-5, 2025",
      time: "Various Times",
      description:
        "Three days of worship, teaching, and community for young people.",
      image: "/public/images/ministries/kabila-haile-FPIQ3jyCsK8-unsplash.jpg",
    },
    {
      id: 3,
      title: "Community Outreach",
      date: "May 10, 2025",
      time: "10:00 AM",
      description:
        "Serving our local community through various outreach programs.",
      image:
        "/public/images/ministries/ayodele-adeniyi-PaanyDCZcwg-unsplash.jpg",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Sunday Service Highlights",
      videoId: "VIDEO_ID_1", // Replace with actual YouTube video IDs
      description: "Highlights from our recent Sunday services",
    },
    {
      id: 2,
      title: "Worship Moments",
      videoId: "VIDEO_ID_2",
      description: "Beautiful moments of worship and praise",
    },
    {
      id: 3,
      title: "Community Impact",
      videoId: "VIDEO_ID_3",
      description: "See how we're making a difference in our community",
    },
  ];

  const galleryImages = [
    "/public/images/ministries/betzy-arosemena-ELItsm8MDtM-unsplash.jpg",
    "/public/images/ministries/kabila-haile-FPIQ3jyCsK8-unsplash.jpg",
    "/public/images/ministries/ayodele-adeniyi-PaanyDCZcwg-unsplash.jpg",
    "/public/images/ministries/kemi-taiwo-sLKAq9Vajys-unsplash.jpg",
    // Add more images as needed
  ];

  const handlePrayerFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: "mcleod.oteng5@gmail.com",
          from_name: prayerFormData.name,
          from_email: prayerFormData.email,
          message: prayerFormData.request,
          privacy: prayerFormData.isPrivate ? "Private" : "Public",
        }
      );

      if (response.status === 200) {
        setShowPrayerForm(false);
        setShowSuccess(true);

        // Hide success message after 2 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 2000);

        setPrayerFormData({
          name: "",
          email: "",
          request: "",
          isPrivate: false,
        });
      } else {
        console.error("EmailJS response:", response);
        alert("Failed to send prayer request. Please try again.");
      }
    } catch (error) {
      console.error("Error details:", error);
      alert(
        "Failed to send prayer request. Please try again. Error: " +
          error.message
      );
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black">
        <div className="absolute inset-0">
          <img
            src="/public/images/ministries/betzy-arosemena-ELItsm8MDtM-unsplash.jpg"
            alt="Church events"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative text-white z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Upcoming Events
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Join us in worship, fellowship, and community
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-blue-600 mb-2">
                    {event.date} | {event.time}
                  </p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Event Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden rounded-lg group"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Request Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Need Prayer?</h2>
            <p className="text-xl mb-8">
              We believe in the power of prayer. Let us pray with you and for
              you.
            </p>
            <button
              onClick={() => setShowPrayerForm(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Submit Prayer Request
            </button>
          </motion.div>
        </div>
      </section>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-8 flex flex-col items-center"
          >
            <CheckmarkAnimation />
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-2xl font-bold mt-4 text-green-600"
            >
              Prayer Request Submitted!
            </motion.h3>
          </motion.div>
        </div>
      )}

      {/* Prayer Request Modal */}
      {showPrayerForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold mb-6">Prayer Request</h3>
            <form onSubmit={handlePrayerFormSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={prayerFormData.name}
                  onChange={(e) =>
                    setPrayerFormData({
                      ...prayerFormData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={prayerFormData.email}
                  onChange={(e) =>
                    setPrayerFormData({
                      ...prayerFormData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Prayer Request
                </label>
                <textarea
                  value={prayerFormData.request}
                  onChange={(e) =>
                    setPrayerFormData({
                      ...prayerFormData,
                      request: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                  required
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="private"
                  checked={prayerFormData.isPrivate}
                  onChange={(e) =>
                    setPrayerFormData({
                      ...prayerFormData,
                      isPrivate: e.target.checked,
                    })
                  }
                  className="mr-2"
                />
                <label htmlFor="private" className="text-gray-700">
                  Keep this request private
                </label>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowPrayerForm(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
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

export default Events;
