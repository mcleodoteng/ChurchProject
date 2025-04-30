import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import ArticleModal from "./ArticleModal";
import { motion } from "framer-motion";

const Read = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedAuthor, setSelectedAuthor] = useState("All Authors");
  const [likedArticles, setLikedArticles] = useState({});
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "All Categories",
    "Bible Study",
    "Devotionals",
    "Christian Living",
    "Evangelism",
    "Prophecy",
  ];

  const authors = ["All Authors", "Ray Comfort", "Living Waters"];

  const articles = [
    {
      id: 1,
      title: "The Art of Biblical Evangelism",
      description: "Learn effective ways to share your faith with others.",
      content: `Evangelism is not just about sharing information—it's about sharing the transformative message of Jesus Christ. This article explores practical approaches to Biblical evangelism that remain faithful to Scripture while connecting with modern audiences.

      Key Principles of Biblical Evangelism:
      
      1. Prayer and Preparation
      Before engaging in evangelism, we must prepare our hearts through prayer and study of God's Word. This spiritual preparation equips us with wisdom and discernment.

      2. Love and Compassion
      Following Jesus' example, our evangelism should be motivated by genuine love and compassion for others. This creates authentic connections that make people more receptive to the gospel message.

      3. Clear Communication
      The gospel message should be presented clearly and simply, avoiding religious jargon that might confuse those unfamiliar with Christian terminology.

      4. Biblical Authority
      While we adapt our communication style, the content of our message must remain grounded in Biblical truth. The power of evangelism comes from God's Word, not our own wisdom.

      Practical Steps for Sharing Your Faith:
      
      • Build genuine relationships
      • Listen actively to others' beliefs and questions
      • Share your personal testimony
      • Use Scripture appropriately
      • Be patient and respectful
      • Follow up and provide resources for growth

      Remember, successful evangelism isn't measured by immediate conversions but by faithful obedience to God's command to share His truth with love and grace.`,
      image: "/images/ministries/men.jpg",
      author: "Ray Comfort",
      date: "April 21, 2025",
      category: "Evangelism",
    },
    {
      id: 2,
      title: "Understanding Biblical Prophecy",
      description: "A comprehensive guide to interpreting Biblical prophecy.",
      content: `Biblical prophecy is one of the most fascinating and challenging aspects of Scripture study. This guide aims to provide a balanced approach to understanding and interpreting Biblical prophecy.

      Fundamental Principles:
      
      1. Historical Context
      Understanding the historical context of prophecies is crucial. Many prophecies had both immediate and future applications.

      2. Literary Genre
      Prophetic literature often uses symbolic language and imagery. Recognizing these literary devices is essential for proper interpretation.

      3. Progressive Revelation
      God's prophetic message unfolds progressively throughout Scripture. Later revelations often clarify earlier prophecies.

      Key Areas of Biblical Prophecy:
      
      • Messianic Prophecies
      • End Times Prophecies
      • Kingdom Prophecies
      • Israel and the Nations

      Guidelines for Interpretation:
      
      1. Start with clear passages
      2. Compare Scripture with Scripture
      3. Consider multiple viewpoints
      4. Stay humble in conclusions
      5. Focus on the main message

      Application for Today:
      Biblical prophecy should inspire hope, encourage faithfulness, and motivate holy living. While we study the details, we must not lose sight of these primary purposes.`,
      image: "/images/ministries/faithline.jpg",
      author: "Living Waters",
      date: "April 25, 2025",
      category: "Prophecy",
    },
    {
      id: 3,
      title: "The Art of Biblical Evangelism",
      description: "Learn effective ways to share your faith with others.",
      content: `Evangelism is not just about sharing information—it's about sharing the transformative message of Jesus Christ. This article explores practical approaches to Biblical evangelism that remain faithful to Scripture while connecting with modern audiences.
  
        Key Principles of Biblical Evangelism:
        
        1. Prayer and Preparation
        Before engaging in evangelism, we must prepare our hearts through prayer and study of God's Word. This spiritual preparation equips us with wisdom and discernment.
  
        2. Love and Compassion
        Following Jesus' example, our evangelism should be motivated by genuine love and compassion for others. This creates authentic connections that make people more receptive to the gospel message.
  
        3. Clear Communication
        The gospel message should be presented clearly and simply, avoiding religious jargon that might confuse those unfamiliar with Christian terminology.
  
        4. Biblical Authority
        While we adapt our communication style, the content of our message must remain grounded in Biblical truth. The power of evangelism comes from God's Word, not our own wisdom.
  
        Practical Steps for Sharing Your Faith:
        
        • Build genuine relationships
        • Listen actively to others' beliefs and questions
        • Share your personal testimony
        • Use Scripture appropriately
        • Be patient and respectful
        • Follow up and provide resources for growth
  
        Remember, successful evangelism isn't measured by immediate conversions but by faithful obedience to God's command to share His truth with love and grace.`,
      image: "/images/ministries/men.jpg",
      author: "Ray Comfort",
      date: "April 21, 2025",
      category: "Bible Study",
    },
    {
      id: 4,
      title: "Understanding Biblical Prophecy",
      description: "A comprehensive guide to interpreting Biblical prophecy.",
      content: `Biblical prophecy is one of the most fascinating and challenging aspects of Scripture study. This guide aims to provide a balanced approach to understanding and interpreting Biblical prophecy.
  
        Fundamental Principles:
        
        1. Historical Context
        Understanding the historical context of prophecies is crucial. Many prophecies had both immediate and future applications.
  
        2. Literary Genre
        Prophetic literature often uses symbolic language and imagery. Recognizing these literary devices is essential for proper interpretation.
  
        3. Progressive Revelation
        God's prophetic message unfolds progressively throughout Scripture. Later revelations often clarify earlier prophecies.
  
        Key Areas of Biblical Prophecy:
        
        • Messianic Prophecies
        • End Times Prophecies
        • Kingdom Prophecies
        • Israel and the Nations
  
        Guidelines for Interpretation:
        
        1. Start with clear passages
        2. Compare Scripture with Scripture
        3. Consider multiple viewpoints
        4. Stay humble in conclusions
        5. Focus on the main message
  
        Application for Today:
        Biblical prophecy should inspire hope, encourage faithfulness, and motivate holy living. While we study the details, we must not lose sight of these primary purposes.`,
      image: "/images/ministries/faithline.jpg",
      author: "Living Waters",
      date: "April 25, 2025",
      category: "Devotionals",
    },
  ];

  useEffect(() => {
    // Check for article ID in URL when component mounts
    const searchParams = new URLSearchParams(location.search);
    const articleId = searchParams.get("article");
    if (articleId) {
      const article = articles.find((a) => a.id.toString() === articleId);
      if (article) {
        setSelectedArticle(article);
        setIsModalOpen(true);
      }
    }
  }, [location]);

  const toggleLike = (articleId) => {
    setLikedArticles((prev) => ({
      ...prev,
      [articleId]: !prev[articleId],
    }));
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      article.category === selectedCategory;
    const matchesAuthor =
      selectedAuthor === "All Authors" || article.author === selectedAuthor;
    return matchesSearch && matchesCategory && matchesAuthor;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/ministries/betzy-arosemena-ELItsm8MDtM-unsplash.jpg"
            alt="Articles Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            Recent Articles
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center">
            Discover insightful articles about faith, Christian living, and
            spiritual growth
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
                placeholder="Search all articles..."
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

            {/* Authors Dropdown */}
            <div className="relative">
              <select
                className="appearance-none w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
              >
                {authors.map((author) => (
                  <option key={author} value={author}>
                    {author}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="h-5 w-5 absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => {
                  setSelectedArticle(article);
                  setIsModalOpen(true);
                }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <DocumentTextIcon className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src="/images/ministries/logo.jpg"
                        alt={article.author}
                        className="h-8 w-8 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {article.author}
                        </p>
                        <p className="text-xs text-gray-500">{article.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => toggleLike(article.id)}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                      >
                        {likedArticles[article.id] ? (
                          <HeartSolidIcon className="h-6 w-6 text-red-500" />
                        ) : (
                          <HeartIcon className="h-6 w-6" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedArticle(null);
        }}
      />

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

export default Read;
