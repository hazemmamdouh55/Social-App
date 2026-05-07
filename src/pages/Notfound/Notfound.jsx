import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center text-white relative overflow-hidden">

      {/* Animated background blobs */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-[120px] opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-500 rounded-full blur-[120px] opacity-20 bottom-10 right-10 animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10 px-6"
      >
        {/* Big 404 */}
        <motion.h1
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
        >
          404
        </motion.h1>

        {/* Text */}
        <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-lg"
          >
            Go Back Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}