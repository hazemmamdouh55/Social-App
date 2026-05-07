import React, { useEffect } from "react";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Calendar,
  Star,
  Users,
  GraduationCap,
  BookOpen,
  Target,
  Heart,
  CheckCircle2,
  Award,
  Mail,
  Phone,
  Globe,
  Edit,
  CheckCircle,
} from "lucide-react";


function SchoolProfile() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm shrink-0">
              <Building2 className="w-12 h-12 text-purple-600" />
            </div>
            <div className="text-white space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">Boston Latin Academy</h1>
                <div className="bg-white/20 p-1 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white fill-white/20" />
                </div>
              </div>
              <p className="text-purple-100 text-lg">
                Excellence in Education Since 1878
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-purple-100 mt-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Boston, MA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  <span>Public High School</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>Founded 1878</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                  <Star className="w-4 h-4 fill-current text-yellow-400/50" />
                </div>
                <span className="text-sm font-medium">4.8 (124 reviews)</span>
              </div>
            </div>
          </div>

          <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-purple-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors shrink-0">
            <Edit className="w-4 h-4" />
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm border border-slate-100">
            <div className="bg-purple-100 p-3 rounded-xl mb-3">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">1200</h3>
            <p className="text-slate-500 text-sm">Students</p>
          </div>
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm border border-slate-100">
            <div className="bg-blue-100 p-3 rounded-xl mb-3">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">85</h3>
            <p className="text-slate-500 text-sm">Teachers</p>
          </div>
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm border border-slate-100">
            <div className="bg-pink-100 p-3 rounded-xl mb-3">
              <BookOpen className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">22</h3>
            <p className="text-slate-500 text-sm">Class Number</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-bold text-slate-800">
                  About Our School
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Boston Latin Academy is a prestigious institution with over 100
                years of academic excellence. We are committed to providing a
                rigorous and supportive learning environment that prepares
                students for success in college and beyond. Our dedicated
                faculty and staff work together to inspire students to reach
                their full potential.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-bold text-slate-800">
                  Our Mission
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To provide a challenging and supportive educational experience
                that empowers all students to become critical thinkers,
                effective communicators, and responsible global citizens.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-bold text-slate-800">
                  Core Values
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Academic Excellence",
                  "Character Development",
                  "Community Engagement",
                  "Innovation & Creativity",
                  "Diversity & Inclusion",
                  "Lifelong Learning",
                ].map((value, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/80 hover:bg-slate-50 rounded-xl p-4 flex items-center gap-3 border border-slate-100 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    <span className="text-slate-700 font-medium text-sm">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-bold text-slate-800">
                  Academic Programs
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Advanced Placement (AP)",
                    desc: "20+ AP courses across all subjects",
                  },
                  {
                    title: "STEM Program",
                    desc: "Specialized science and technology curriculum",
                  },
                  {
                    title: "Arts & Music",
                    desc: "Award-winning arts and music programs",
                  },
                  { title: "Athletics", desc: "15 varsity sports teams" },
                  {
                    title: "Community Service",
                    desc: "Required service learning program",
                  },
                  {
                    title: "College Counseling",
                    desc: "Comprehensive college guidance",
                  },
                ].map((prog, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-100 rounded-xl p-5 hover:border-purple-200 transition-colors"
                  >
                    <h3 className="font-semibold text-slate-800 mb-1">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-bold text-slate-800">
                  Achievements & Recognition
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  "Top 10 Public School in Massachusetts",
                  "National Blue Ribbon School",
                  "100% College Acceptance Rate",
                  "State Championship Athletics",
                  "Distinguished STEM Program",
                ].map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-600 text-sm">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email</p>
                    <a
                      href="/"
                      className="text-sm font-medium text-purple-700 hover:underline"
                    >
                      info@bostonlatinacademy.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                    <p className="text-sm font-medium text-slate-800">
                      (617) 555-0123
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Page</p>
                    <a
                      href="/"
                      className="text-sm font-medium text-purple-700 hover:underline"
                    >
                      www.bostonlatinacademy.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Address</p>
                    <p className="text-sm font-medium text-slate-800 leading-relaxed">
                      205 Townsend Street, Boston, MA 02121
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Facilities
              </h2>
              <div className="space-y-4">
                {[
                  "Modern Science Labs",
                  "Digital Learning Center",
                  "Athletic Complex",
                  "Performing Arts Theater",
                  "Library & Media Center",
                  "Cafeteria & Student Center",
                ].map((facility, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-slate-600 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SchoolProfile;
