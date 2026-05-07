import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: 1,
    text: "How do you deal with a disruptive student?",
    options: [
      "I punish them immediately",
      "I calm them down and explain classroom rules",
      "I talk to them individually and try to understand them",
      "I ignore the situation",
    ],
  },
  {
    id: 2,
    text: "How do you help a low-achieving student understand the lesson?",
    options: [
      "I explain in the same way",
      "I sometimes use simplified examples",
      "I adapt my teaching method based on the student’s level",
    ],
  },
  {
    id: 3,
    text: "How do you engage uninterested students?",
    options: [
      "I force them to participate",
      "I use encouragement and rewards",
      "I design engaging activities to motivate everyone",
    ],
  },
  {
    id: 4,
    text: "How do you deal with a parent who disagrees with their child's grades?",
    options: [
      "I explain the grading system calmly",
      "I ask to discuss it later outside the classroom",
      "I strictly follow school policy",
    ],
  },
  {
    id: 5,
    text: "Do you use technology in your teaching?",
    options: [
      "I do not use it",
      "I use it rarely",
      "I use it sometimes",
      "I use it effectively",
      "I always use it skillfully",
    ],
  },
  {
    id: 6,
    text: "You notice a student’s performance is declining and they have become withdrawn. What do you do?",
    options: [
      "I talk to them to understand the reason and support them",
      "I contact the parents directly",
      "I adjust my teaching approach to meet their needs",
    ],
  },
  {
    id: 7,
    text: "You had a disagreement with a colleague or management. What do you do?",
    options: [
      "I look for a middle ground",
      "I express my opinion calmly",
      "I follow policy to avoid conflict",
    ],
  },
  {
    id: 8,
    text: "How do you make sure students understand your explanation?",
    options: [
      "I continue explaining as usual",
      "I ask simple questions during the lesson",
      "I adjust based on students’ responses",
    ],
  },
  {
    id: 9,
    text: "How do you handle classroom time?",
    options: [
      "I follow the lesson without strict timing",
      "I try to manage time sometimes",
      "I carefully plan and manage time",
    ],
  },
  {
    id: 10,
    text: "How do you deal with students who interrupt the class frequently?",
    options: [
      "Ignore them",
      "Warn them",
      "Address the behavior calmly and consistently",
    ],
  },
  {
    id: 11,
    text: "How do you evaluate student engagement in your classroom?",
    options: ["Very low", "Low", "Moderate", "High", "Very high"],
  },
  {
    id: 12,
    text: "Do you think class size affects your teaching quality?",
    options: ["Not at all", "Slightly", "Moderately", "Very much", "Extremely"],
  },
  {
    id: 13,
    text: "Write a new skill you have learned recently.",
    options: [
      "Not applicable",
      "Basic skill",
      "Intermediate skill",
      "Advanced skill",
    ],
  },
  {
    id: 14,
    text: "Do you feel that your salary matches your effort?",
    options: [
      "Strongly agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strongly disagree",
    ],
  },
  {
    id: 15,
    text: "How do you deal with a high-achieving student who finishes early?",
    options: [
      "Ask them to stay quiet",
      "Give extra challenges",
      "Let them help others",
      "Nothing specific",
    ],
  },
  {
    id: 16,
    text: "If a student used AI to complete an assignment, what do you do?",
    options: [
      "Give zero",
      "Redo in class",
      "Discuss to check understanding",
      "Encourage proper use with citation",
    ],
  },
  {
    id: 17,
    text: "How do you integrate AI tools in your work?",
    options: [
      "Do not use them",
      "Use for preparation only",
      "Use in classroom activities",
      "Train students on prompts",
    ],
  },
  {
    id: 18,
    text: "When using a new AI educational app, what matters most?",
    options: [
      "Ease of use",
      "Free or paid",
      "Data privacy",
      "Reduce grading effort",
    ],
  },
  {
    id: 19,
    text: "How do you deal with student differences in abilities?",
    options: [
      "Teach all students the same way",
      "Adjust sometimes",
      "Fully differentiate instruction",
    ],
  },
  {
    id: 20,
    text: "How do you motivate students during lessons?",
    options: [
      "Minimal effort",
      "Sometimes encourage",
      "Actively motivate and engage",
    ],
  },
  {
    id: 21,
    text: "How do you handle stress at work?",
    options: [
      "I get stressed easily",
      "I manage sometimes",
      "I handle stress effectively",
    ],
  },
  {
    id: 22,
    text: "How do you improve your teaching skills?",
    options: [
      "I rarely update my skills",
      "I sometimes learn new things",
      "I continuously develop myself",
    ],
  },
];

function TeacherSurvey() {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleChange = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("لازم تجاوب على كل الأسئلة 😅");
      return;
    }

    navigate("/Survey-Complete");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500/40 via-blue-300/40 to-blue-500/40 p-6">
      <div className="text-white text-center py-4 rounded-lg mb-6">
        <h1
          className="text-3xl font-bold"
          style={{ WebkitTextStroke: "1px black" }}
        >
          Teacher Personality Survey
        </h1>
      </div>

      {questions.map((q) => (
        <div key={q.id} className="bg-white p-6 rounded-xl shadow mb-4">
          <p className="mb-4 font-medium">
            {q.id}. {q.text}
          </p>

          <div className="flex flex-col gap-2 text-gray-700">
            {q.options.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  onChange={() => handleChange(q.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-purple-500 via-blue-300 to-blue-500 text-white px-8 py-3 rounded-lg"
        >
          Submit Survey
        </button>
      </div>
    </div>
  );
}

export default TeacherSurvey;
