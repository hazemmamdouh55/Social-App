import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function NotificationTabs({
  notifications = [],
  children,
  onMarkAll,
}) {
  const [activeTab, setActiveTab] = useState("all");

  const allCount = notifications.length;
  const unreadCount = notifications.filter((n) => n.unread).length;

  const filtered =
    activeTab === "all"
      ? notifications
      : notifications.filter((n) => n.unread);

  return (
    <div>
    <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-lg border border-gray-100 px-8 py-5 mb-8 flex items-center justify-between"
      >
               
        <div className="flex gap-3">
          
         <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === "all"
                ? "bg-[#9810FA] text-white shadow-md"
                : "bg-[#F3F4F6] text-black"
            }`}
          >
            All ({allCount})
          </motion.button>

           <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("unread")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === "unread"
                ? "bg-[#9810FA] text-white shadow-md"
                : "bg-[#F3F4F6] text-black"
            }`}
          >
            Unread ({unreadCount})
          </motion.button>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMarkAll}
          className="flex items-center gap-2 text-[#9810FA] text-sm font-semibold hover:opacity-80 transition"
        >
          <FiCheckCircle />
          Mark All as Read
        </motion.button>
      </motion.div>
     
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {children(filtered)}
      </motion.div>
    </div>
  );
}