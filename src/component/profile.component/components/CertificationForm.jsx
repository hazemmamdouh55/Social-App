import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { certificationSchema } from "../../../schema/profile.schema/certification.schema";

import { FiArrowLeft, FiPlus, FiCheckCircle, FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

export default function CertificationForm({ onBack, onComplete }) {

  const { control, register, handleSubmit } = useForm({
    resolver: zodResolver(certificationSchema),
    defaultValues: {
      certifications: [""],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "certifications",
  });

  return (
    <div className="flex justify-center font-sans p-6">

      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-md"
      >

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Certifications & Licenses
          </h2>

          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => append("")}
            className="flex items-center gap-1 px-3 py-1.5 text-sm
            bg-gradient-to-r from-[#9810FA] to-[#155DFC]
            text-white rounded-lg"
          >
            <FiPlus size={14} />
            Add More
          </motion.button>
        </div>

        {fields.map((field, index) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-4 flex items-center gap-3"
          >

            <div className="text-purple-500">
              <FiAward size={18} />
            </div>

            <input
              type="text"
              placeholder="e.g., Massachusetts Teaching License (Mathematics 8-12)"
              {...register(`certifications.${index}`)}
              className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700
              placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
          </motion.div>
        ))}

         <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-purple-50 border border-purple-200 rounded-xl p-4 mt-5"
        >

          <p className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <span>🎉</span>
            Almost Done!
          </p>

          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            You're one step away from completing your profile. Schools will be able to see your profile and match with you based on your skills and experience.
          </p>

          <div className="flex items-center gap-2 text-purple-600 text-sm font-medium">
            <FiCheckCircle size={18} />
            Profile will be 100% complete
          </div>

        </motion.div>

        <div className="border-t border-gray-200 my-5"></div>

        <div className="flex justify-between items-center">

          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2
            border border-purple-400 text-purple-600
            rounded-lg hover:bg-purple-50 transition"
          >
            <FiArrowLeft />
            Back
          </motion.button>

          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={handleSubmit(
              (data) => onComplete(data.certifications),
              () => onComplete([])
            )}
            className="flex items-center gap-2 px-6 py-2
            bg-green-600 hover:bg-green-700
            text-white rounded-lg transition"
          >
            <FiCheckCircle size={18} />
            Complete Profile
          </motion.button>

        </div>

      </motion.div>
    </div>
  );
}