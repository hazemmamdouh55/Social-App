import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin, Mail, Briefcase, GraduationCap,
  Award, BarChart3, MessageSquare, ChevronLeft, CheckCircle2, Star
} from 'lucide-react';

const TeacherProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-32 font-sans text-[#1E293B]">

      {/* Navbar */}
      <div className="bg-white border-b border-slate-100 px-8 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-slate-500 text-sm font-medium hover:text-indigo-600 transition-all"
        >
          <ChevronLeft size={16} /> Back to Dashboard
        </button>
        {/* Logo on right */}
        
      </div>

      <main className="max-w-[900px] mx-auto mt-6 px-4">

        {/* Profile Header Card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-[#6366F1] via-[#7C3AED] to-[#9333EA] px-8 pt-6 pb-10">
          </div>

          {/* Content overlapping gradient */}
          <div className="px-8 -mt-6 pb-6">
            <div className="flex gap-6 items-start">
              {/* Avatar */}
              <div className="shrink-0">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl -mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
                    alt="Dr. Sarah Mitchell"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 pt-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-xl font-black text-slate-800">Dr. Sarah Mitchell</h1>
                    <div className="flex items-center gap-1.5 text-[#6366F1] mt-0.5">
                      <Briefcase size={13} />
                      <span className="font-bold text-sm">Mathematics</span>
                    </div>
                  </div>
                  {/* Match Score */}
                  <div className="bg-white rounded-2xl px-5 py-3 text-center shadow border border-slate-100 -mt-10">
                    <div className="text-[#10B981] font-black text-2xl leading-none">98%</div>
                    <div className="text-[#94A3B8] text-[9px] font-bold uppercase mt-1 tracking-widest">Match Score</div>
                  </div>
                </div>

                {/* Location / Email / Experience */}
                <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5"><MapPin size={12} className="text-[#6366F1]" /> Cambridge, MA</div>
                  <div className="flex items-center gap-1.5"><Mail size={12} className="text-[#6366F1]" /> sarah.mitchell@email.com</div>
                  <div className="flex items-center gap-1.5"><Briefcase size={12} className="text-[#6366F1]" /> 12 years experience</div>
                </div>

                {/* Bio */}
                <p className="mt-3 text-slate-500 leading-relaxed text-xs max-w-2xl">
                  Passionate mathematics educator with 12+ years of experience in creating engaging, student-centered learning environments. Specialized in advanced algebra and calculus with a proven track record of improving student performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid - 2 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">

          {/* Left Col */}
          <div className="lg:col-span-8 space-y-5">

            {/* Work Experience */}
            <section className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-[#F5F3FF] rounded-xl text-[#8B5CF6]"><Briefcase size={18} /></div>
                <h2 className="text-base font-black text-slate-800">Work Experience</h2>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Senior Mathematics Teacher", place: "Boston Latin Academy", date: "2018 - Present" },
                  { title: "Mathematics Teacher", place: "Cambridge International School", date: "2015 - 2018" },
                  { title: "Junior Teacher & Tutor", place: "MIT Math Learning Center", date: "2012 - 2015" }
                ].map((job, idx) => (
                  <div key={idx} className="relative pl-5 border-l-[3px] border-[#8B5CF6] py-0.5">
                    <span className="text-[10px] font-bold text-slate-400">🕒 {job.date}</span>
                    <h3 className="text-sm font-black text-slate-800 mt-0.5">{job.title}</h3>
                    <p className="text-[#8B5CF6] font-bold text-xs mt-0.5">{job.place}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-[#EFF6FF] rounded-xl text-[#3B82F6]"><GraduationCap size={18} /></div>
                <h2 className="text-base font-black text-slate-800">Education</h2>
              </div>
              <div className="flex flex-col gap-5">
                {[
                  { degree: "Ph.D. in Mathematics Education", school: "Harvard University", year: "2015" },
                  { degree: "M.Ed. in Curriculum & Instruction", school: "Boston University", year: "2012" },
                  { degree: "B.S. in Mathematics", school: "MIT", year: "2009" }
                ].map((edu, idx, arr) => (
                  <div key={idx} className="relative">
                    <h3 className="font-black text-slate-800 text-sm">{edu.degree}</h3>
                    <p className="text-[#8B5CF6] font-bold text-xs mt-0.5">{edu.school}</p>
                    <div className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-0.5">{edu.year}</div>
                    {idx !== arr.length - 1 && <div className="mt-4 w-full h-[1px] bg-slate-100" />}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Col */}
          <div className="lg:col-span-4 space-y-5">

            {/* Certifications */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-emerald-50 rounded-xl text-[#10B981]"><Award size={18} /></div>
                <h2 className="text-base font-black text-slate-800">Certifications</h2>
              </div>
              <div className="space-y-2.5">
                {[
                  "Massachusetts Teaching License (Mathematics 8-12)",
                  "Advanced Placement Calculus Certified",
                  "Google Certified Educator Level 2",
                  "Differentiated Instruction Specialist"
                ].map((cert, i) => (
                  <div key={i} className="flex gap-2.5 p-3 bg-emerald-50/40 rounded-xl border border-emerald-50 text-xs font-semibold text-slate-700">
                    <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                    {cert}
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Stats */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-rose-50 rounded-xl text-[#E11D48]"><BarChart3 size={18} /></div>
                <h2 className="text-base font-black text-slate-800">Quick Stats</h2>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-[#F5F3FF] rounded-xl flex justify-between items-center border border-[#E9D5FF]">
                  <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Students Taught</span>
                  <span className="text-xl font-black text-[#581C87]">2,400+</span>
                </div>
                <div className="p-4 bg-[#F0F9FF] rounded-xl flex justify-between items-center border border-[#BAE6FD]">
                  <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Success Rate</span>
                  <span className="text-xl font-black text-[#1E40AF]">97%</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Floating Action Bar */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[860px] bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-2xl px-6 py-4 flex justify-between items-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-[100]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-slate-100 shadow-sm">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="" />
          </div>
          <div>
            <div className="font-black text-slate-800 text-sm">Dr. Sarah Mitchell</div>
            <div className="text-[#64748B] text-[10px] font-bold uppercase tracking-tight">98% Match</div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 border border-[#E9D5FF] text-[#7C3AED] rounded-xl font-bold text-xs hover:bg-[#F3E8FF] transition-all flex items-center gap-1.5">
            <Star size={14} /> Shortlist
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-5 py-2.5 border border-[#BAE6FD] text-[#0369A1] rounded-xl font-bold text-xs hover:bg-[#E0F2FE] transition-all flex items-center gap-1.5"
          >
            <MessageSquare size={14} /> Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;