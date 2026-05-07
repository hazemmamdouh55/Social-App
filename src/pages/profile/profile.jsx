import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import ProfileHeader from "../../component/profile.component/components/ProfileHeader";
import BasicInfoForm from "../../component/profile.component/components/BasicInfoForm";
import EducationForm from "../../component/profile.component/components/EducationForm";
import ExperienceForm from "../../component/profile.component/components/ExperienceForm";
import CertificationForm from "../../component/profile.component/components/CertificationForm";
import ProfileStepper from "../../component/profile.component/components/ProfileSterpper";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "../../component/shared/animations/pageTransition";

export default function Profile() {
  const [step, setStep] = useState(0);
  const userRole = localStorage.getItem("userRole");
  const navigate = useNavigate();

  if (userRole !== "teacher") return <Navigate to="/" replace />;

  const handleSkip = () => {
    navigate("/TeacherProfile");
  };

  const forms = [
    <BasicInfoForm onNext={() => setStep(1)} />,
    <ExperienceForm onNext={() => setStep(2)} onBack={() => setStep(0)} />,
    <EducationForm onNext={() => setStep(3)} onBack={() => setStep(1)} />,
    <CertificationForm onBack={() => setStep(2)} />,
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#FAF5FF,#FFFFFF,#EFF6FF)]">
      <ProfileHeader />
      <div className="mt-10 max-w-2xl mx-auto px-4">
        <div className="flex justify-end mb-2">
          <button
            onClick={handleSkip}
            className="text-sm text-slate-400 hover:text-slate-600 underline underline-offset-2 transition-colors"
          >
            Skip for now →
          </button>
        </div>
        <ProfileStepper currentStep={step} />
        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={pageTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              {forms[step]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}