import { FiClock, FiCheck, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function NotificationCard({
  title,
  desc,
  time,
  icon,
  unread,
  onRead,
  onDelete,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.35 }}
      className={`relative bg-white px-6 py-5 rounded-3xl border shadow-md flex items-center justify-between gap-4 
      hover:shadow-lg transition-all duration-300
      ${unread ? "border-[#E9D5FF]" : "border-gray-100"}`}
    >
      {unread && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-5 right-5 w-2.5 h-2.5 bg-[#9810FA] rounded-full"
        ></motion.span>
      )}

        <div className="flex gap-4 items-start">
        
        <motion.div
          whileHover={{ rotate: 8, scale: 1.1 }}
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-xl"
        >
          {icon}
        </motion.div>

        <div>
          
          <h3 className="font-semibold text-base text-[#1E2939]">
            {title}
          </h3>

          
          <p className="text-[#364153] text-sm mt-1 max-w-md">
            {desc}
          </p>

          
          <div className="flex items-center gap-1 text-xs text-[#6A7282] mt-3">
            <FiClock />
            {time}
          </div>
        </div>
      </div>

       <div className="flex items-center gap-3">
        
         <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#9810FA] text-white text-sm px-4 py-1.5 rounded-lg shadow"
        >
          View
        </motion.button>

         {unread && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={onRead}
            className="w-8 h-8 flex items-center justify-center rounded-md bg-[#ECFDF5] text-[#009966] hover:opacity-80"
          >
            <FiCheck />
          </motion.button>
        )}
    
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={onDelete}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-[#FEF2F2] text-[#E7000B] hover:opacity-80"
        >
          <FiX />
        </motion.button>
      </div>
    </motion.div>
  );
}