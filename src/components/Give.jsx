import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

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

const providerDetails = [
  {
    value: "mtn",
    label: "MTN Mobile Money",
    logo: "/images/ministries/MTN-Momo-e1584721116128.jpeg",
  },
  {
    value: "vodafone",
    label: "Vodafone Cash",
    logo: "/images/ministries/images.png",
  },
  {
    value: "airteltigo",
    label: "AirtelTigo Money",
    logo: "/images/ministries/images (1).png",
  },
];

const Give = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentType, setPaymentType] = useState("one-time");
  const [mobileNumber, setMobileNumber] = useState("");
  const [provider, setProvider] = useState("mtn");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const predefinedAmounts = ["10", "20", "50", "100", "500"];

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setDonationAmount(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Generate receipt data
      const receipt = {
        id: `DON-${Date.now()}`,
        amount: donationAmount,
        date: new Date().toLocaleString(),
        type: paymentType,
        mobileNumber,
        provider,
      };

      setReceiptData(receipt);
      setShowSuccess(true);

      // Hide success message and show receipt after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setShowReceipt(true);
      }, 2000);

      // Reset form
      setDonationAmount("");
      setCustomAmount("");
      setMobileNumber("");
      setPaymentType("one-time");
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-black text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src="/public/images/ministries/betzy-arosemena-ELItsm8MDtM-unsplash.jpg"
            alt="Giving"
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
            Support Our Ministry
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Your generosity helps us make a difference in our community
          </motion.p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Donation Type */}
              <div>
                <label className="text-lg font-semibold mb-4 block">
                  Select Donation Type
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentType("one-time")}
                    className={`flex-1 py-3 px-4 rounded-lg border ${
                      paymentType === "one-time"
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-gray-300 hover:border-blue-600"
                    }`}
                  >
                    One-time Gift
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentType("recurring")}
                    className={`flex-1 py-3 px-4 rounded-lg border ${
                      paymentType === "recurring"
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-gray-300 hover:border-blue-600"
                    }`}
                  >
                    Recurring Gift
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="text-lg font-semibold mb-4 block">
                  Select Amount (GHS)
                </label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 px-4 rounded-lg border ${
                        donationAmount === amount
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 hover:border-blue-600"
                      }`}
                    >
                      GHS {amount}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Mobile Money Details */}
              <div>
                <label className="text-lg font-semibold mb-4 block">
                  Mobile Money Payment
                </label>
                <div className="space-y-4">
                  <div className="relative">
                    <select
                      value={provider}
                      onChange={(e) => setProvider(e.target.value)}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {providerDetails.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                    {provider === "mtn" && (
                      <img
                        src="/images/ministries/MTN-Momo-e1584721116128.jpeg"
                        alt="MTN Mobile Money"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 object-contain"
                      />
                    )}
                    {provider === "vodafone" && (
                      <img
                        src="/images/ministries/images.png"
                        alt="Vodafone Cash"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 object-contain"
                      />
                    )}
                    {provider === "airteltigo" && (
                      <img
                        src="/images/ministries/images (1).png"
                        alt="AirtelTigo Money"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 object-contain"
                      />
                    )}
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!donationAmount || !mobileNumber || isProcessing}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isProcessing
                  ? "Processing..."
                  : `Give GHS ${donationAmount || "0"}`}
              </button>
            </form>
          </div>
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
              Payment Successful!
            </motion.h3>
          </motion.div>
        </div>
      )}

      {/* Receipt Modal */}
      {showReceipt && receiptData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold mb-6">
              Thank You for Your Gift!
            </h3>
            <div className="space-y-4 mb-8">
              <p>
                <span className="font-semibold">Transaction ID:</span>{" "}
                {receiptData.id}
              </p>
              <p>
                <span className="font-semibold">Amount:</span> GHS{" "}
                {receiptData.amount}
              </p>
              <p>
                <span className="font-semibold">Date:</span> {receiptData.date}
              </p>
              <p>
                <span className="font-semibold">Payment Type:</span>{" "}
                {receiptData.type === "one-time"
                  ? "One-time Gift"
                  : "Recurring Gift"}
              </p>
              <p>
                <span className="font-semibold">Mobile Number:</span>{" "}
                {receiptData.mobileNumber}
              </p>
              <p>
                <span className="font-semibold">Provider:</span>{" "}
                {receiptData.provider.toUpperCase()}
              </p>
            </div>
            <button
              onClick={() => setShowReceipt(false)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
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
                    to="/sermons"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    Sermons
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

export default Give;
