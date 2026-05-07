import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { experienceSchema } from "../../../schema/profile.schema/experience.schema";

import { FiArrowRight, FiArrowLeft, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ExperienceForm({ onNext, onBack }) {

  const { control, register, handleSubmit } = useForm({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      jobs: [{ title: "", school: "", period: "" }],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "jobs",
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
          <h2 className="text-lg font-semibold text-gray-800">
            Work Experience
          </h2>

          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => append({ title: "", school: "", period: "" })}
            className="flex items-center gap-1 px-3 py-1.5 text-sm
            bg-[linear-gradient(90deg,#9810FA,#155DFC)]
            text-white rounded-lg shadow-md hover:opacity-90 transition"
          >
            <FiPlus size={14} />
            Add More
          </motion.button>
        </div>

        
        {fields.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="border border-gray-200 rounded-xl p-4 mb-5"
          >
            <p className="text-sm text-gray-700 mb-4 font-medium">
              Position #{index + 1}
            </p>

            
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Job Title
              </label>
              <input
                type="text"
                placeholder="e.g., Senior Mathematics Teacher"
                {...register(`jobs.${index}.title`)}
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700
                placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#9810FA]"
              />
            </div>

           
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                School Name
              </label>
              <input
                type="text"
                placeholder="e.g., Boston Latin Academy"
                {...register(`jobs.${index}.school`)}
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700
                placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#9810FA]"
              />
            </div>

            
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Period
              </label>
              <input
                type="text"
                placeholder="e.g., 2018 - Present"
                {...register(`jobs.${index}.period`)}
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700
                placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#9810FA]"
              />
            </div>
          </motion.div>
        ))}

      
        <div className="border-t border-gray-200 my-5"></div>

        
        <div className="flex justify-between">

          
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2
            border border-[#9810FA] text-[#9810FA]
            rounded-lg hover:bg-purple-50 transition"
          >
            <FiArrowLeft />
            Back
          </motion.button>

          
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={handleSubmit(
              (data) => onNext(data.jobs),
              () => onNext([])
            )}
            className="flex items-center gap-2 px-5 py-2 
            bg-[linear-gradient(90deg,#9810FA,#155DFC)]
            text-white rounded-lg shadow-md hover:opacity-90 transition"
          >
            Next
            <FiArrowRight />
          </motion.button>

        </div>

      </motion.div>
    </div>
  );
}