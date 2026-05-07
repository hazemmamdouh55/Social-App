import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactInfoCards() {
  const cards = [
    {
      icon: <FiMail />,
      title: "Email Us",
      desc: "Send us an email and we’ll respond within 24 hours.",
      info: "support@ninjateacher.com",
      color: "from-[#155DFC] to-[#0092B8]",
      highlight: true,
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      desc: "Speak with our support team during business hours.",
      info: "+971 4 321 1234",
      color: "from-[#9810FA] to-[#E60076]",
      highlight: true,
    },
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      desc: (
        <>
          Dubai Knowledge Park <br />
          Block 12, Office 304
        </>
      ),
      info: "Dubai, UAE",
      color: "from-[#00A63E] to-[#009966]",
      highlight: false,
    },
    {
      icon: <FiClock />,
      title: "Business Hours",
      desc: "Sunday - Thursday: 9:00 AM - 6:00 PM",
      info: "Friday - Saturday: Closed",
      color: "from-[#F54900] to-[#E7000B]",
      highlight: false,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="space-y-5"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
        >
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-xl text-white bg-gradient-to-r ${card.color} mb-4 text-2xl`}
          >
            {card.icon}
          </div>

          <h3 className="font-semibold text-lg mb-1">
            {card.title}
          </h3>

          <p className="text-gray-500 text-sm mb-2">
            {card.desc}
          </p>

          <p
            className={`text-sm ${
              card.highlight ? "text-purple-600" : "text-gray-500"
            }`}
          >
            {card.info}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}