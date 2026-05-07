import React from 'react';
import {
    Plus,
    Calendar,
    Users,
    Clock,
    Briefcase,
    Eye,
    Edit3,
    Trash2,
    ChevronLeft,
    Bell
} from 'lucide-react';
import { NavLink } from 'react-router';

const jobPostsData = [
    {
        id: 1,
        title: "Arabic Teacher",
        subject: "Arabic Language",
        description: "Seeking an experienced Arabic language teacher for grades 6-8",
        postedDate: "3 days ago",
        applicants: 24,
        experience: "3+ years",
        type: "Full Time",
        status: "Active",
        traits: [
            { name: "Patient", color: "bg-green-50 text-green-600 border-green-100" },
            { name: "Creative", color: "bg-purple-50 text-purple-600 border-purple-100" },
            { name: "Cultural Awareness", color: "bg-blue-50 text-blue-600 border-blue-100" }
        ]
    },
    {
        id: 2,
        title: "Math Coordinator",
        subject: "Mathematics",
        description: "Lead our mathematics department and coordinate curriculum development",
        postedDate: "1 week ago",
        applicants: 18,
        experience: "5+ years",
        type: "Full Time",
        status: "Active",
        traits: [
            { name: "Leadership", color: "bg-blue-50 text-blue-600 border-blue-100" },
            { name: "Organized", color: "bg-purple-50 text-purple-600 border-purple-100" },
            { name: "Analytical", color: "bg-indigo-50 text-indigo-600 border-indigo-100" }
        ]
    },
    {
        id: 3,
        title: "Science Teacher",
        subject: "Science",
        description: "Passionate science educator for middle school STEM program",
        postedDate: "2 weeks ago",
        applicants: 31,
        experience: "2+ years",
        type: "Full Time",
        status: "Active",
        traits: [
            { name: "Enthusiastic", color: "bg-amber-50 text-amber-600 border-amber-100" },
            { name: "Innovative", color: "bg-purple-50 text-purple-600 border-purple-100" },
            { name: "Hands-on", color: "bg-orange-50 text-orange-600 border-orange-100" }
        ]
    },
    {
        id: 4,
        title: "English Literature Teacher",
        subject: "English Language",
        description: "Looking for a literature enthusiast to inspire high school students",
        postedDate: "1 month ago",
        applicants: 12,
        experience: "4+ years",
        type: "Part Time",
        status: "Expired",
        traits: [
            { name: "Engaging", color: "bg-rose-50 text-rose-600 border-rose-100" },
            { name: "Well-Read", color: "bg-blue-50 text-blue-600 border-blue-100" },
            { name: "Supportive", color: "bg-emerald-50 text-emerald-600 border-emerald-100" }
        ]
    }
];

export default function JobPosts({ onNavigateToCreate }) {
    return (
        <div className="bg-[#f8fafc] min-h-screen p-6 md:p-10">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <NavLink
                            to="/"
                            className="flex items-center gap-1 text-gray-500 text-sm font-medium hover:text-indigo-600 transition-all mb-4 w-fit"
                        >
                            <ChevronLeft size={16} /> Back to Home
                        </NavLink>
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Job Postings</h1>
                        <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
                            <span className="w-4 h-4 bg-purple-100 rounded flex items-center justify-center">
                                <Briefcase size={10} className="text-purple-600" />
                            </span>
                            Manage your active job positions and applicants
                        </p>
                    </div>
                    <button className="p-2 text-gray-400 hover:bg-white hover:shadow-sm rounded-full transition-all">
                        <Bell size={22} />
                    </button>
                </div>

                {/* Add New Button */}
                <button
                    onClick={onNavigateToCreate} // هنا هيشتغل دلوقتي لأننا عرفناه فوق
                    className="bg-[#6B4EFF] hover:bg-[#5a3fe0] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-purple-100 transition-all mb-8"
                >
                    <Plus size={18} strokeWidth={3} /> Post a New Job
                </button>

                {/* Jobs List */}
                <div className="space-y-4">
                    {jobPostsData.map((job) => (
                        <div key={job.id} className="bg-white rounded-[20px] border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                                    <p className="text-purple-600 font-bold text-sm mt-0.5">{job.subject}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${job.status === "Active"
                                    ? "bg-green-50 text-green-600"
                                    : "bg-gray-100 text-gray-500"
                                    }`}>
                                    {job.status}
                                </span>
                            </div>

                            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                                {job.description}
                            </p>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 mt-4 text-gray-400">
                                <div className="flex items-center gap-1.5 text-xs font-medium">
                                    <Calendar size={14} className="text-purple-400" />
                                    Posted {job.postedDate}
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-medium">
                                    <Users size={14} className="text-purple-400" />
                                    {job.applicants} applicants
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-medium">
                                    <Clock size={14} className="text-purple-400" />
                                    {job.experience}
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-medium">
                                    <Briefcase size={14} className="text-purple-400" />
                                    {job.type}
                                </div>
                            </div>

                            {/* Personality Traits */}
                            <div className="mt-5">
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Ideal Personality Traits We're Looking For:</p>
                                <div className="flex flex-wrap gap-2">
                                    {job.traits.map((trait, idx) => (
                                        <span key={idx} className={`px-3 py-1 rounded-full text-[11px] font-bold border ${trait.color}`}>
                                            {trait.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-end gap-2 mt-2">
                                <button className="flex items-center gap-2 bg-[#6B4EFF] hover:bg-[#5a3fe0] text-white px-5 py-2 rounded-xl text-xs font-bold transition-all">
                                    <Eye size={14} /> View Post
                                </button>
                                <button className="p-2.5 text-purple-600 bg-white border border-purple-100 hover:bg-purple-50 rounded-xl transition-all">
                                    <Edit3 size={16} />
                                </button>
                                <button className="p-2.5 text-rose-500 bg-white border border-rose-100 hover:bg-rose-50 rounded-xl transition-all">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}