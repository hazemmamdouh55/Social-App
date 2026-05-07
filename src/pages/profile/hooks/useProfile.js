import { useState } from "react";

export default function useProfile() {
  const [currentStep, setCurrentStep] = useState(0);

  const [data, setData] = useState({
    fullName: "",
    email: "",
    experiences: [],
    education: [],
    certifications: [],
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const updateField = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const submitProfile = () => {
    console.log("FINAL DATA:", data);
  };

  return {
    data,
    updateField,
    currentStep,
    nextStep,
    prevStep,
    submitProfile,
  };
}