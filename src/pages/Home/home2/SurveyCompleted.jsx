import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

function SurveyCompleted() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 p-6">

      <CheckCircle size={80} className="text-green-500 mb-4" />

      <h2 className="text-2xl font-bold mb-2">
        Survey Completed Successfully!
      </h2>

      <p className="text-gray-600 max-w-md mb-6">
        Thank you for completing the Teacher Personality Survey. Your responses
        will help us match you with suitable schools.
      </p>

      <button
        onClick={() => navigate("/profile")}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full"
      >
        Go to Profile
      </button>

    </div>
  );
}

export default SurveyCompleted;