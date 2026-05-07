import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { 
  Briefcase, Bell, Power, MapPin, Clock, Star, SendHorizontal, 
  Heart, MessageSquare, School, BookOpen, Target, Award,
  Users, CalendarDays, GraduationCap, DollarSign, TrendingUp, CheckCircle2, Zap, ClipboardList
} from 'lucide-react';

const TeacherJobDetails = () => {
  const navigate = useNavigate(); 
  const primaryGradient = "linear-gradient(90deg, #9810FA 0%, #155DFC 100%)";
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 pb-20 text-left">
      
      {/* 1. Navbar */}
      <nav className="bg-white px-6 py-3 flex items-center justify-between border-b border-slate-100 sticky top-0 z-50">
        <button onClick={() => navigate('/dashboard')} className="flex items-center gap-2 text-purple-700 font-bold text-xl">
          <div 
            style={{ background: primaryGradient }}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110"
          >
            <Briefcase size={22} strokeWidth={3} />
          </div>
           <span className="text-2xl font-black text-slate-900 tracking-tight">NinjaTeacher</span>
        </button>
        <div className="flex items-center gap-4 text-slate-500">
          <Bell size={20} className="cursor-pointer hover:text-purple-600 transition-colors" />
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-700">T</div>
            <span className="text-sm font-semibold text-slate-700">Teacher</span>
          </div>
          <Power size={20} className="cursor-pointer hover:text-red-500 transition-colors" />
        </div>
      </nav>

      
      <main className="max-w-[1400px] mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
        
        <div className="space-y-8">
          <button onClick={() => navigate(-1)} className="text-purple-600 font-bold text-sm flex items-center gap-1.5 mb-2 hover:underline">
            &larr; Back to Jobs
          </button>
          
          {/* 1. Header Card */}
           <div className="bg-white p-10 rounded-[40px] border border-white shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            <div className="flex justify-between items-start">
              <div className="flex gap-8">
                <div className="w-24 h-24 bg-[#F5F3FF] rounded-[28px] flex items-center justify-center text-[#5D5FEF]">
                  <School size={48} />
                </div>
                <div className="space-y-3">
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none">Senior Mathematics Teacher</h1>
                  <p className="text-[#9810FA] font-black text-xl">Boston Latin Academy <span className="text-[#F0B100] ml-1 italic">★ 4.8</span></p>
                  <div className="flex flex-wrap gap-8 pt-2 font-bold text-slate-500 text-sm">
                    <span className="flex items-center gap-2.5"><MapPin size={18} className="text-[#9810FA]" /> Boston, MA</span>
                    <span className="flex items-center gap-2.5"><Briefcase size={18} className="text-[#9810FA]" /> Full-time</span>
                    <span className="flex items-center gap-2.5"><DollarSign size={18} className="text-[#9810FA]" /> $65,000 - $85,000</span>
                    <span className="flex items-center gap-2.5"><Clock size={18} className="text-[#9810FA]" /> Posted 2 days ago</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex flex-col items-end">
                <div className="flex items-center gap-2 text-[#00C07F] font-black text-4xl">
                  <TrendingUp size={32} fill="#009966" /> 98%
                </div>
                <p className="text-[11px] uppercase tracking-[0.2em] font-black text-slate-400 mt-2">Perfect Match!</p>
              </div>
            </div>
            
            <div className="flex gap-5 mt-10 pt-10 border-t border-slate-50">
              <button 
                onClick={() => navigate('/apply')}
                style={{ background: primaryGradient}}
                className="flex-1 text-white rounded-2xl h-16 font-black text-xl shadow-lg shadow-indigo-100 flex items-center justify-center gap-3 transition-all active:scale-95 hover:opacity-90"
              >
                <SendHorizontal size={22} fill="white" /> Apply Now
              </button>
              <button className="w-16 h-16 border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-300 hover:text-[#9810FA] hover:border-[#9810FA] transition-all">
                <Heart size={26} />
              </button>
              <button 
                onClick={() => navigate('/')}
                className="w-16 h-16 border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-300 hover:text-[#9810FA] hover:border-[#9810FA] transition-all"
              >
                <MessageSquare size={26} />
              </button>
            </div>
          </div>

          {/* 1. Job Description */}
          <div className="bg-white p-10 rounded-[40px] border border-white shadow-sm">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-3 mb-6 uppercase tracking-widest">
              <BookOpen size={24} className="text-[#9810FA]"/> Job Description
            </h3>
            <p className="text-slate-500 leading-[1.8] font-bold text-base">
              We are seeking an experienced Mathematics teacher to join our award-winning academic team. The ideal candidate will have a passion for teaching and inspiring students to excel in mathematics. You will be responsible for developing engaging lesson plans, fostering a positive learning environment, and helping students achieve their academic goals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3 mb-6">
              <BookOpen size={28} className="text-purple-700"/> Job Description
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              We are seeking an experienced Mathematics teacher to join our award-winning academic team. The ideal candidate will have a passion for teaching and inspiring students to excel in mathematics. You will be responsible for developing engaging lesson plans, fostering a positive learning environment, and helping students achieve their academic goals.
            </p>
          </div>

          {/* 3. Responsibilities */}
           <div className="bg-white p-10 rounded-[40px] border border-white shadow-sm">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-3 mb-8 uppercase tracking-widest">
          <Target size={24} className="text-[#9810FA]"/> Responsibilities
             </h3>
             <div className="grid gap-5 font-bold text-slate-600">
            {[
            "Develop and implement comprehensive lesson plans",
            "Assess student progress and provide constructive feedback",
           "Create a positive and inclusive classroom environment",
           "Collaborate with colleagues and participate in department meetings",
            "Communicate regularly with parents and guardians",
           "Participate in professional development activities"
      ].map((text, i) => (
             <div key={i} className="flex items-start gap-4">
              <CheckCircle2 size={22} className="text-[#00C07F] shrink-0 mt-0.5" />
               <span className="text-[15px]">{text}</span>
               </div>
          ))}
          </div>
          </div>
            
          {/* 4. Requirements */}
          <div className="bg-white p-10 rounded-[40px] border border-white shadow-sm">
                      <h3 className="text-lg font-black text-slate-900 flex items-center gap-3 mb-8 uppercase tracking-widest">
                        <Award size={24} className="text-[#9810FA]"/> Requirements
                      </h3>
                      <div className="grid gap-5 font-bold text-slate-600">
                        {[
                          "Bachelor's degree in Mathematics or related field",
                          "5+ years teaching experience",
                          "Strong classroom management skills",
                          "Experience with AP curriculum",
                          "Excellent communication and interpersonal skills",
                          "Ability to differentiate instruction for diverse learners"
                        ].map((text, i) => (
                          <div key={i} className="flex items-start gap-4">
                          <CheckCircle2 size={22} className="text-[#9810FA] shrink-0 mt-0.5" />
                            <span className="text-[15px]">{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

          {/* 5. Benefits & Perks */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3 mb-8">
              <Star size={28} className="text-purple-700"/> Benefits & Perks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Competitive salary package",
                "Comprehensive health insurance",
                "401(k) retirement plan with matching",
                "Professional development opportunities",
                "Paid time off and holidays",
                "Tuition reimbursement for advanced degrees",
                "Collaborative and supportive work environment"
              ].map((perk, i) => (
                <div key={i} className="bg-[#FAF5FF] p-5 rounded-2xl flex items-center gap-3 border border-[#F3E8FF] hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-purple-600 shadow-sm">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-slate-700 font-black text-sm">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. About School Section */}
          <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
            <div className="flex items-center gap-4">
               <div className="p-3 bg-purple-100 rounded-2xl text-purple-700">
                <School size={32} />
               </div>
               <h3 className="text-3xl font-black text-slate-900">About Boston Latin Academy</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg font-medium italic">
              Boston Latin Academy is a prestigious institution with over 100 years of academic excellence. We pride ourselves on providing a rigorous and supportive learning environment that prepares students for success in college and beyond. Our dedicated faculty and staff work together to inspire students to reach their full potential.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { val: '1878', label: 'Founded', color: 'bg-purple-50 text-purple-700' },
                { val: '85', label: 'Teachers', color: 'bg-blue-50 text-blue-700' },
                { val: '98%', label: 'Graduation', color: 'bg-green-50 text-green-700' },
                { val: '100%', label: 'College', color: 'bg-orange-50 text-orange-700' }
              ].map((stat, i) => (
                <div key={i} className={`${stat.color} p-6 rounded-[28px] text-center border border-white shadow-sm hover:scale-105 transition-transform`}>
                  <p className="text-3xl font-black mb-1">{stat.val}</p>
                  <p className="text-xs font-black uppercase tracking-widest opacity-70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24">
          
          {/*Ready to Apply */}
          <div className="bg-gradient-to-br from-[#9810FA] to-[#155DFC] p-8 rounded-[32px] text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-black mb-4">Ready to Apply?</h2>
              <p className="text-sm opacity-90 mb-8 font-bold leading-relaxed">
                You're a 98% match for this position. Your profile is perfect for this role!
              </p>
              <div className="space-y-3">
                <button 
                  onClick={() => navigate('/ApplyJob')}
                  className="w-full bg-white text-[#9810FA] rounded-2xl h-14 font-black text-lg shadow-xl flex items-center justify-center hover:bg-slate-50 transition-all active:scale-95"
                >
                  Apply Now
                </button>
                <button 
                  onClick={() => navigate('/')}
                  className="w-full h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center gap-3 text-white font-black hover:bg-white/20 transition-all"
                >
                   <MessageSquare size={20} /> Message School
                </button>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* School Overview */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-8 border-b border-slate-50 pb-4">School Overview</h3>
            <div className="space-y-6">
              {[
                { label: 'Students', value: '1200', icon: <Users size={20}/> },
                { label: 'Founded', value: '1878', icon: <CalendarDays size={20}/> },
                { label: 'Graduation', value: '98%', icon: <GraduationCap size={20}/> }
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between font-black">
                  <div className="flex items-center gap-3 text-purple-600">
                    <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <span className="text-slate-500 text-sm">{stat.label}</span>
                  </div>
                  <span className="text-slate-900">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

      </main>
    </div>
  );
};

export default TeacherJobDetails;