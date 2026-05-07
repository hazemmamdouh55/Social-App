import { useState } from "react";
import JobCard from "./JobCard";
import { School } from "lucide-react";
import Input from "./Input";

function JobsSection() {

  const [jobs, setJobs] = useState([
    { id: 1, title: "English Teacher", school: "Cybress Ranch High School", description: "Teaches English language skills including reading, writing, speaking, and listening, while improving students communication and confidence.", image: "../../../public/JobSection-Image/School-Img1.jpg" },
    { id: 2, title: "Math Teacher", school: "Future School", description: "Responsible for teaching mathematics concepts in a simple and engaging way, helping students build strong problem-solving and analytical thinking skills.", image: "../../../public/JobSection-Image/School-Img2.jpg" },
    { id: 3, title: "Science Teacher", school: "Bright School", description: "Delivers engaging science lessons covering biology, chemistry, and physics concepts to develop students curiosity and scientific thinking.", image: "../../../public/JobSection-Image/School-Img3.jpg" },
    { id: 4, title: "Physics Teacher", school: "Elite School", description: "Explains physical concepts and laws through practical examples and experiments to help students understand how the world works scientifically.", image: "../../../public/JobSection-Image/School-Img4.jpg" },
    { id: 5, title: "Chemistry Teacher", school: "Horizon Language School", description: "Explains chemical concepts and reactions through practical examples and experiments to help students understand how the world works scientifically.", image: "../../../public/JobSection-Image/School-Img5.jpg" },
    { id: 6, title: "Biology Teacher", school: "Royal Academy School", description: "Explains biological concepts and processes through practical examples and experiments to help students understand how living organisms function.", image: "../../../public/JobSection-Image/School-Img6.jpg" },
    { id: 7, title: "Arabic Teacher", school: "Sunshine Kids School", description: "Explains Arabic language skills including reading, writing, speaking, and listening, while improving students communication and confidence.", image: "../../../public/JobSection-Image/School-Img7.jpg" },
    { id: 8, title: "Geography Teacher", school: "Cambridge Learning School", description: "Explains Geography concepts and laws through practical examples and experiments to help students understand how the world works scientifically.", image: "../../../public/JobSection-Image/School-Img8.jpg" },
    { id: 9, title: "History Teacher", school: "Milroy Elementary School", description: "Explains History concepts and laws through practical examples and experiments to help students understand how the world works scientifically.", image: "../../../public/JobSection-Image/School-Img9.jpg" },
    { id: 10, title: "Art and Music Teacher", school: "King High School", description: "Explains Art and Music concepts and laws through practical examples and experiments to help students understand how the world works scientifically.", image: "../../../public/JobSection-Image/School-Img10.jpg" },
  ]);

  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleJobs = showAll ? filteredJobs : filteredJobs.slice(0, 3);

  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  return (
    <section className="w-full mt-10 px-4 sm:px-10 lg:px-20">

      <h2 className="text-2xl font-bold mb-2 flex items-center gap-3 mt-10 py-5">
        <School className="text-purple-600" size={24} />
        Teaching Jobs
      </h2>
      <p className="text-gray-500 mb-8 max-w-xl">
        Browse available teaching jobs or search by subject to find opportunities that match your passion and expertise.
      </p>

      <div className="flex justify-center mb-9">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {visibleJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onDelete={deleteJob}
            isFavorite={favorites.includes(job.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="bg-gradient-to-r from-purple-500 via-blue-500 to-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-md"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

    </section>
  );
}

export default JobsSection;