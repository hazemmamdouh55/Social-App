import React from "react";
import {
  Bell,
  Info,
  Star,
  Calendar,
  CheckCircle2,
  Search,
  ChevronDown,
  MapPin,
  Award,
  Clock,
  Eye,
  MessageSquare,
  Check,
  X,
} from "lucide-react";

const applicantsData = [
  {
    id: 1,
    name: "Dr. Sarah Thompson",
    role: "Senior English Teacher",
    avatar: "https://i.pravatar.cc/150?img=47",
    status: "New",
    statusColor: "bg-blue-100 text-blue-700",
    match: "98% Match",
    location: "London, UK",
    experience: "12y exp",
    rating: "9.8/10",
    appliedDate: "10/04/2026",
    education: "PhD in English Literature, Oxford",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    role: "Mathematics Teacher",
    avatar: "https://i.pravatar.cc/150?img=11",
    status: "Reviewed",
    statusColor: "bg-purple-100 text-purple-700",
    match: "95% Match",
    location: "Manchester, UK",
    experience: "10y exp",
    rating: "9.6/10",
    appliedDate: "11/04/2026",
    education: "MSc Mathematics, Cambridge",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Science Teacher",
    avatar: "https://i.pravatar.cc/150?img=32",
    status: "Shortlisted",
    statusColor: "bg-amber-100 text-amber-700",
    match: "92% Match",
    location: "Bristol, UK",
    experience: "8y exp",
    rating: "9.4/10",
    appliedDate: "12/04/2026",
    education: "BSc Physics, Imperial College",
  },
  {
    id: 4,
    name: "Michael O'Connor",
    role: "History Teacher",
    avatar: "https://i.pravatar.cc/150?img=12",
    status: "Interview",
    statusColor: "bg-indigo-100 text-indigo-700",
    match: "89% Match",
    location: "Dublin, IE",
    experience: "15y exp",
    rating: "9.7/10",
    appliedDate: "13/04/2026",
    education: "MA History, Trinity College",
  },
  {
    id: 5,
    name: "Maria Garcia",
    role: "Spanish Teacher",
    avatar: "https://i.pravatar.cc/150?img=5",
    status: "New",
    statusColor: "bg-blue-100 text-blue-700",
    match: "96% Match",
    location: "Madrid, ES",
    experience: "6y exp",
    rating: "9.5/10",
    appliedDate: "14/04/2026",
    education: "BA Education, Complutense",
  },
  {
    id: 6,
    name: "David Kim",
    role: "Computer Science Teacher",
    avatar: "https://i.pravatar.cc/150?img=33",
    status: "Accepted",
    statusColor: "bg-emerald-100 text-emerald-700",
    match: "99% Match",
    location: "Seoul, KR",
    experience: "9y exp",
    rating: "9.9/10",
    appliedDate: "15/04/2026",
    education: "MSc Computer Science, KAIST",
  },
  {
    id: 7,
    name: "Jessica Taylor",
    role: "Physical Education Teacher",
    avatar: "https://i.pravatar.cc/150?img=44",
    status: "Reviewed",
    statusColor: "bg-purple-100 text-purple-700",
    match: "85% Match",
    location: "Sydney, AU",
    experience: "5y exp",
    rating: "9.0/10",
    appliedDate: "16/04/2026",
    education: "BSc Sports Science, Univ of Sydney",
  },
];

const Applicants = () => {
  const stats = {
    new: applicantsData.filter((a) => a.status === "New").length,
    shortlisted: applicantsData.filter((a) => a.status === "Shortlisted")
      .length,
    interview: applicantsData.filter((a) => a.status === "Interview").length,
    accepted: applicantsData.filter((a) => a.status === "Accepted").length,
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      <div className="bg-white border-b border-slate-200 shadow-sm px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Applicants Management
              </h1>
              <p className="text-slate-500 text-sm sm:text-base mt-1">
                Review and manage job applications
              </p>
            </div>
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1.5 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-blue-700">New</span>
                <Info className="w-5 h-5 text-blue-500" />
              </div>
              <span className="text-2xl font-bold text-slate-800">
                {stats.new}
              </span>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-amber-700">
                  Shortlisted
                </span>
                <Star className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-2xl font-bold text-slate-800">
                {stats.shortlisted}
              </span>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-indigo-700">
                  Interview
                </span>
                <Calendar className="w-5 h-5 text-indigo-500" />
              </div>
              <span className="text-2xl font-bold text-slate-800">
                {stats.interview}
              </span>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-emerald-700">
                  Accepted
                </span>
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="text-2xl font-bold text-slate-800">
                {stats.accepted}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-6">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search applicants by name, subject, or position..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-700"
            />
          </div>
          <div className="relative w-full md:w-64 shrink-0">
            <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-600">
              <option value="">All Statuses</option>
              <option value="new">New</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="interview">Interview</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          </div>
        </div>

        <div className="space-y-4">
          {applicantsData.map((applicant) => (
            <div
              key={applicant.id}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-5"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <img
                  src={applicant.avatar}
                  alt={applicant.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shrink-0 border border-slate-100 shadow-sm"
                />

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                        {applicant.name}
                      </h3>
                      <p className="text-purple-600 font-semibold text-sm mt-0.5">
                        {applicant.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded-full ${applicant.statusColor}`}
                      >
                        {applicant.status}
                      </span>
                      <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                        {applicant.match}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 mt-4">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-purple-500" />{" "}
                      {applicant.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-purple-500" />{" "}
                      {applicant.experience}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />{" "}
                      {applicant.rating}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-purple-500" /> Applied{" "}
                      {applicant.appliedDate}
                    </span>
                  </div>

                  <div className="mt-4 text-sm text-slate-600 bg-slate-50 inline-block px-3 py-1.5 rounded-lg border border-slate-100">
                    <span className="font-semibold text-slate-800">
                      Education:
                    </span>{" "}
                    {applicant.education}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-5 mt-2 border-t border-slate-100">
                <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
                  <Eye className="w-4 h-4" /> View Details
                </button>
                <button className="flex items-center gap-1.5 px-4 py-2 bg-white border-2 border-purple-200 text-purple-700 text-sm font-semibold rounded-xl hover:bg-purple-50 transition-colors">
                  <MessageSquare className="w-4 h-4" /> Message
                </button>
                <button className="px-5 py-2 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-600 transition-colors shadow-sm">
                  Shortlist
                </button>
                <button className="px-5 py-2 bg-indigo-500 text-white text-sm font-semibold rounded-xl hover:bg-indigo-600 transition-colors shadow-sm">
                  Interview
                </button>
                <button className="flex items-center gap-1.5 px-5 py-2 bg-emerald-500 text-white text-sm font-semibold rounded-xl hover:bg-emerald-600 transition-colors shadow-sm ml-auto">
                  <Check className="w-4 h-4" /> Accept
                </button>
                <button className="flex items-center gap-1.5 px-5 py-2 bg-red-500 text-white text-sm font-semibold rounded-xl hover:bg-red-600 transition-colors shadow-sm">
                  <X className="w-4 h-4" /> Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applicants;
