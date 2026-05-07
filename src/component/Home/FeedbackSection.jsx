import { useState } from "react";
import FeedbackCard from "./FeedbackCard";
import AddFeedbackButton from "./AddFeedbackButton";
import FeedbackModal from "./FeedbackModal";

const initialData = [
  {
    name: "Al Noor International School",
    location: "Dubai, UAE",
    rating: 5,
    text: "We hired 3 excellent teachers through this platform.",
    teachers: 3,
    time: "2 weeks ago",
    image: "",
  },
  {
    name: "Future Leaders Academy",
    location: "Abu Dhabi, UAE",
    rating: 5,
    text: "Outstanding platform!",
    teachers: 2,
    time: "3 weeks ago",
    image: "",
  },
  {
    name: "Bright Horizons School",
    location: "Sharjah, UAE",
    rating: 4,
    text: "The quality of candidates is exceptional.",
    teachers: 2,
    time: "3 weeks ago",
    image: "",
  },
];

function FeedbackSection() {
  const [feedbacks, setFeedbacks] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [visibleCount, setVisibleCount] = useState(2);

  const addFeedback = (newFeedback) => {
    if (editData) {
      const updated = feedbacks.map((f) => (f === editData ? newFeedback : f));
      setFeedbacks(updated);
      setEditData(null);
    } else {
      setFeedbacks([newFeedback, ...feedbacks]);
    }
  };

  const deleteFeedback = (index) => {
    setFeedbacks(feedbacks.filter((_, i) => i !== index));
  };

  const handleEdit = (item) => {
    setEditData(item);
    setOpen(true);
  };

  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-2">What Schools Say About Us</h2>
      <p className="text-gray-500 mb-8">
        Hear from schools that hired teachers through our platform
      </p>

      <div className="flex flex-col gap-6">
        {feedbacks.slice(0, visibleCount).map((item, index) => (
          <FeedbackCard
            key={index}
            data={item}
            onDelete={() => deleteFeedback(index)}
            onEdit={() => handleEdit(item)}
          />
        ))}
      </div>

      {feedbacks.length > 2 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() =>
              setVisibleCount(
                visibleCount >= feedbacks.length ? 2 : feedbacks.length
              )
            }
            className="text-purple-500 font-medium"
          >
            {visibleCount >= feedbacks.length ? "Show Less" : "See More"}
          </button>
        </div>
      )}

      <AddFeedbackButton onClick={() => setOpen(true)} />

      {open && (
        <FeedbackModal
          onClose={() => {
            setOpen(false);
            setEditData(null);
          }}
          onSubmit={addFeedback}
          editData={editData}
        />
      )}
    </div>
  );
}

export default FeedbackSection;