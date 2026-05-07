import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

function CTA() {
  return (
    <div className="px-6 mt-16">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-4xl py-16 px-6 text-center text-white 
        bg-gradient-to-r from-purple-500 via-blue-500 to-blue-600"
      >

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-white/20 p-3 rounded-full backdrop-blur">
            <Rocket size={30} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Boost Your Job Match Rate
        </h2>

        {/* Subtitle */}
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Take our personality and skills assessment to get matched with
          schools that fit your teaching style perfectly.
        </p>

        {/* Button (بدون أي ربط) */}
        <div className="flex justify-center">
          <button
            className="flex items-center gap-2 bg-white text-purple-600 
            px-6 py-3 rounded-xl font-semibold shadow-md 
            hover:scale-105 transition"
          >
            🎯 Start Free Assessment
          </button>
        </div>

      </motion.div>
    </div>
  );
}

export default CTA;