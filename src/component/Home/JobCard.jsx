import JobCardButton from "./JobCardButton";
import { Trash2, Heart } from "lucide-react";

function JobCard({ job, onDelete, isFavorite, toggleFavorite }) {
  return (
    <div className="relative w-full group">

      {/* Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-blue-500 to-blue-600 rounded-xl blur-2xl opacity-20 group-hover:opacity-40 transition -z-10" />

      {/* Card */}
      <div className="relative bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 group-hover:scale-105 group-hover:-translate-y-1 flex flex-col h-full">

        {/* Image */}
        <img
          src={job?.image}
          alt={job?.title}
          className="w-full h-52 object-cover"
        />

        {/* Content */}
        <div className="p-5 flex flex-col gap-2 flex-1">
          <h3 className="font-bold text-lg">{job?.title}</h3>
          <p className="text-gray-500">{job?.school}</p>

          <span className="w-fit text-white bg-green-500 px-3 py-1 rounded-full text-sm">
            {job?.match || "95%"}
          </span>

          <p className="text-gray-600 text-sm flex-1">
            {job?.description || "No description available"}
          </p>

          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-3 items-center">
              <button
                onClick={() => onDelete(job.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                <Trash2 size={18} />
              </button>
              <button onClick={() => toggleFavorite(job.id)} className="transition">
                <Heart
                  size={20}
                  className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"}
                />
              </button>
            </div>
            <JobCardButton />
          </div>
        </div>

      </div>
    </div>
  );
}

export default JobCard;