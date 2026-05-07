import {
  FiUser,
  FiBriefcase,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";
import { PiGraduationCapLight } from "react-icons/pi";
import { motion } from "framer-motion";

export default function ProfileStepper({ currentStep }) {
  const steps = [
    { label: "Basic Info", icon: <FiUser /> },
    { label: "Experience", icon: <FiBriefcase /> },
    { label: "Education", icon: <PiGraduationCapLight /> },
    { label: "Certifications", icon: <FiAward /> },
  ];

  return (
    <div className="flex justify-center items-center mb-10 flex-wrap gap-y-6">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={index} className="flex items-center">

            {/* Step */}
            <div className="flex flex-col items-center relative">

              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`w-12 h-12 flex items-center justify-center rounded-xl text-xl transition
                ${isCompleted ? "bg-[linear-gradient(90deg,#00C950,#009966)] text-white" : ""}
                ${isActive ? "bg-[linear-gradient(90deg,#9810FA,#155DFC)] text-white shadow-lg" : ""}
                ${!isCompleted && !isActive ? "bg-gray-200 text-gray-500" : ""}
                `}
              >
                {isCompleted ? (
                  <FiCheckCircle size={20} />
                ) : (
                  step.icon
                )}
              </motion.div>

              {/* Label */}
              <span
                className={`mt-2 text-sm transition
                ${isCompleted ? "text-[#009966] font-medium" : ""}
                ${isActive ? "text-[#9810FA] font-semibold" : ""}
                ${!isCompleted && !isActive ? "text-gray-400" : ""}
                `}
              >
                {step.label}
              </span>
            </div>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div className="mx-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  className={`h-[4px] rounded
                  ${index < currentStep ? "bg-[linear-gradient(90deg,#00C950,#009966)]" : "bg-gray-300"}
                  `}
                />
              </div>
            )}

          </div>
        );
      })}
    </div>
  );
}