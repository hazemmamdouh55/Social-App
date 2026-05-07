function AddFeedbackButton({ onClick }) {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClick}
        className="bg-gradient-to-r from-purple-500 via-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Add Your School Feedback
      </button>
    </div>
  );
}

export default AddFeedbackButton;