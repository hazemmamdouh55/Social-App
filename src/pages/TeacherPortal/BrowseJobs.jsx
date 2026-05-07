import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, MapPin, Briefcase, Clock, Star,
  MessageSquare, BookOpen, Filter, TrendingUp,
  User, XCircle, CheckCircle2
} from 'lucide-react';

const BrowseJobs = () => {
  const navigate = useNavigate();

  const [saved, setSaved] = useState(() => {
    const s = localStorage.getItem('savedJobs');
    return s ? JSON.parse(s) : [];
  });

  const [toast, setToast] = useState(null);

  const toggleSave = (job) => {
    const exists = saved.find(j => j.id === job.id);
    let updated;
    if (exists) {
      updated = saved.filter(j => j.id !== job.id);
      setToast({ msg: 'Job removed from saved', type: 'remove' });
    } else {
      updated = [...saved, job];
      setToast({ msg: 'Job saved successfully!', type: 'save' });
    }
    setSaved(updated);
    localStorage.setItem('savedJobs', JSON.stringify(updated));
    setTimeout(() => setToast(null), 3000);
  };

  const jobs = [
    {
      id: 1,
      title: 'Senior Mathematics Teacher',
      school: 'Boston Latin Academy',
      rating: '4.8',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '65,000 - 85,000',
      students: '1200 students',
      posted: '2 days ago',
      match: '98%',
      description: 'We are seeking an experienced Mathematics teacher to join our award-winning academic team. The ideal candidate will have a passion for teaching and inspiring students...',
      tags: ["Bachelor's degree in Mathematics or related field", "5+ years teaching experience", "Strong classroom management skills", "+1 more"]
    },
    {
      id: 2,
      title: 'Mathematics Teacher',
      school: 'Cambridge , MA',
      rating: '4.7',
      location: 'Cambridge, MA',
      type: 'Full-time',
      salary: '60,000 - 75,000',
      students: '800 students',
      posted: '5 days ago',
      match: '95%',
      description: 'Our international school is looking for a qualified Mathematics teacher for our high school department. Experience with international curricula (IGCSE/IB) is preferred...',
      tags: ["Teaching certification required", "Experience with IGCSE/IB curriculum", "International experience", "+1 more"]
    },
    {
      id: 3,
      title: 'Math Tutor & Instructor',
      school: 'MIT Math Learning Center',
      rating: '4.9',
      location: 'Cambridge, MA',
      type: 'Part-time',
      salary: '50,000 - 65,000',
      students: '300 students',
      posted: '1 week ago',
      match: '92%',
      description: 'Join our premier learning center to help university students master advanced calculus and linear algebra concepts in a dynamic environment...',
      tags: ["Master's degree preferred", "Previous tutoring experience", "Advanced Calculus expertise", "+1 more"]
    },
    {
      id: 4,
      title: 'Algebra Teacher',
      school: 'Newton South High School',
      rating: '4.7',
      location: 'Newton, MA',
      type: 'Full-time',
      salary: '60,000 - 78,000',
      students: '1500 students',
      posted: '3 days ago',
      match: '88%',
      description: 'Seeking a dedicated Algebra teacher to develop and implement engaging lesson plans for high school students. Focus on foundational concepts...',
      tags: ["Teaching Certification", "Algebra expertise", "Communication skills", "+1 more"]
    },
    {
      id: 5,
      title: 'Mathematics Department Head',
      school: 'Brookline , MA',
      rating: '4.6',
      location: 'Brookline , MA',
      type: 'Full-time',
      salary: '75,000 - 95,000',
      students: '600 students',
      posted: '3 days ago',
      match: '85%',
      description: 'Join our science department to inspire young minds through hands-on laboratory experiments and interactive science curriculum...',
      tags: ["Master degree", "7+ teaching experience", "Leadership experience", "+1 more"]
    },
    {
      id: 6,
      title: 'Middle School Math Teacher',
      school: 'Quincy Middle School',
      rating: '4.5',
      location: 'Quincy, MA',
      type: 'Full-time',
      salary: '55,000 - 68,000',
      students: '900 students',
      posted: '4 days ago',
      match: '82%',
      description: 'Join our dynamic middle school team and help student build a strong foundation in mathematics.',
      tags: ["Teaching Certification", "Experience With middle school student", "Creative teaching methods", "+1 more"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20 text-left">

      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3.5 rounded-[14px] shadow-xl text-sm font-black transition-all
          ${toast.type === 'save'
            ? 'bg-gradient-to-r from-[#9810FA] to-[#155DFC] text-white'
            : 'bg-slate-800 text-white'}`}>
          {toast.type === 'save' ? (
            <><CheckCircle2 size={16} /> Job saved successfully!</>
          ) : (
            <><XCircle size={16} /> Job removed from saved</>
          )}
        </div>
      )}

      <main className="max-w-[1116px] mx-auto pt-10 px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-[32px] font-black text-slate-900 leading-tight">Browse Teaching Jobs</h1>
            <p className="text-slate-400 font-bold mt-1">Find the perfect teaching position that matches your skills and passion</p>
          </div>
          <button
            onClick={() => navigate('/TeacherPortal')}
            className="border-[1.6px] border-[#9810FA] text-[#9810FA] px-6 py-2.5 rounded-[14px] text-sm font-black flex items-center gap-2 hover:bg-purple-50 transition-all"
          >
            Back to Dashboard
          </button>
        </div>

        {/* Search Box */}
        <div className="bg-white p-6 rounded-[16px] shadow-sm border border-slate-100 mb-10 h-[139.2px] flex flex-col justify-between">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input type="text" placeholder="Search jobs, schools, locations..." className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-bold outline-none" />
            </div>
            <div className="w-48 relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <select className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-bold appearance-none outline-none cursor-pointer">
                <option>Filter by Subject</option>
              </select>
            </div>
            <div className="w-48 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <select className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-bold appearance-none outline-none cursor-pointer">
                <option>Location</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-slate-50">
            <span className="text-slate-400 font-black text-[11px] uppercase tracking-[0.1em]">{jobs.length} Jobs found</span>
            <button className="text-[#6366F1] font-black text-xs hover:opacity-70 transition-all">Clear Filters</button>
          </div>
        </div>

        <div className="space-y-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-[16px] p-[33.6px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] border-[1.6px] border-white relative hover:border-indigo-100 transition-all">

              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-5">
                  <div className="w-16 h-16 bg-indigo-50 rounded-[16px] flex items-center justify-center text-indigo-600 shadow-inner">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[22px] font-black text-slate-900">{job.title}</h3>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[#8B5CF6] font-black text-sm underline decoration-2 underline-offset-4">{job.school}</span>
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star size={14} fill="currentColor" />
                        <span className="text-slate-400 text-xs font-black">{job.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1 text-[#10B981]">
                    <TrendingUp size={22} strokeWidth={3} />
                    <span className="text-2xl font-black">{job.match}</span>
                  </div>
                  <div className="text-[10px] text-slate-300 font-black uppercase tracking-widest">Match Score</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6 text-slate-400 font-bold text-[13px]">
                <span className="flex items-center gap-1.5"><MapPin size={16} className="text-[#8B5CF6]" /> {job.location}</span>
                <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-[#8B5CF6]" /> {job.type}</span>
                <span className="flex items-center gap-1.5"><span className="text-[#8B5CF6] text-lg leading-none font-black">$</span> {job.salary}</span>
                <span className="flex items-center gap-1.5"><User size={16} className="text-[#8B5CF6]" /> {job.students}</span>
                <span className="flex items-center gap-1.5"><Clock size={16} className="text-[#8B5CF6]" /> {job.posted}</span>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">{job.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {job.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full text-[11px] font-black bg-purple-50 text-[#8B5CF6]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate('/JobDetails')}
                  className="flex-1 h-[48px] bg-gradient-to-r from-[#9810FA] to-[#155DFC] text-white rounded-[14px] text-sm font-black shadow-lg shadow-indigo-100 hover:opacity-90 transition-all"
                >
                  View Details & Apply
                </button>
                <button
                  onClick={() => toggleSave(job)}
                  className={`w-12 h-12 rounded-[14px] flex items-center justify-center shadow-md transition-all
                    ${saved.find(j => j.id === job.id)
                      ? 'bg-[#9810FA] text-white'
                      : 'bg-white text-[#9810FA] hover:bg-[#9810FA] hover:text-white'}`}
                >
                  <BookOpen size={20} />
                </button>
                <button className="w-12 h-12 border-[1.6px] border-slate-200 rounded-[14px] flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all">
                  <MessageSquare size={20} />
                </button>
              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BrowseJobs;