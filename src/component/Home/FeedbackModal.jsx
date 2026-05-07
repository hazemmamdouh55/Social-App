import { useState } from "react";

function FeedbackModal({ onClose, onSubmit, editData }) {
  const [form, setForm] = useState(
    editData || {
      name: "",
      location: "",
      rating: 0,
      text: "",
      teachers: 1,
      image: "",
    }
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setForm({ ...form, image: imageUrl });
    }
  };

  const handleSubmit = () => {
    onSubmit({
      ...form,
      time: "Just now",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">

      <div className="bg-white p-10 rounded-xl w-[420px] shadow-2xl flex flex-col items-center z-[9999]">

        <span className="text-gray-600 uppercase tracking-widest font-bold text-xl mb-4">
          {editData ? "Edit Feedback" : "Add Feedback"}
        </span>

        <input
          type="text"
          placeholder="School Name"
          className="w-full mb-4 h-10 border rounded-md p-3 outline-none focus:border-purple-500"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full mb-4 h-10 border rounded-md p-3 outline-none focus:border-purple-500"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <input
          type="file"
          accept="image/*"
          className="w-full mb-4"
          onChange={handleImageUpload}
        />

        <p className="text-sm font-semibold mb-2">Rating</p>
        <div className="flex gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setForm({ ...form, rating: star })}
              className={`cursor-pointer text-2xl transition ${
                star <= form.rating ? "scale-110" : "opacity-50"
              } hover:scale-125`}
            >
              {star <= form.rating ? "⭐" : "☆"}
            </span>
          ))}
        </div>

        <p className="text-sm font-semibold mb-2">Number of teachers hired</p>

        <input
          type="number"
          className="w-full mb-4 h-10 border rounded-md p-3 outline-none focus:border-purple-500"
          value={form.teachers}
          onChange={(e) => setForm({ ...form, teachers: e.target.value })}
        />

        <textarea
          placeholder="Your feedback"
          className="w-full mb-6 border rounded-md p-3 outline-none focus:border-purple-500"
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
        />

        <div className="flex justify-between w-full">
          <button onClick={onClose} className="text-gray-500 font-semibold">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-md text-white bg-gradient-to-r from-purple-500 via-blue-500 to-blue-600 hover:scale-105 transition"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

export default FeedbackModal;
