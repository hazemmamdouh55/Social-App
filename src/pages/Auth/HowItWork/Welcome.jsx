import React from 'react'
import { Link } from 'react-router'
import { Zap, Database, CheckCircle, User, ClipboardList, Star, Users, MessageSquare } from 'lucide-react'

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#fdf2f8]">

      {/* How Tabasheer Works */}
      <section className="py-16 px-4 text-center">
        <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
          <Star className="w-3 h-3" /> Simple & Effective Process
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Tabasheer Works</h1>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
          Our AI-powered platform connects exceptional teachers with leading schools through data-driven personality matching and competency assessments.
        </p>
      </section>

      {/* For Teachers */}
      <section className="py-10 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            <User className="w-3 h-3" /> For Teachers
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Your Journey to the Perfect School</h2>
          <p className="text-gray-500 text-sm">Find teaching positions that truly match your personality and skills</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { icon: <User className="w-4 h-4 text-purple-600" />, bg: "bg-purple-100", title: "Create Your Account", desc: "Sign up as a teacher and build your identity with Tabasheer in minutes.", num: 1 },
            { icon: <ClipboardList className="w-4 h-4 text-blue-600" />, bg: "bg-blue-100", title: "Complete Assessment", desc: "Take our comprehensive personality and competency assessment to showcase your unique strengths.", num: 2 },
            { icon: <Star className="w-4 h-4 text-purple-600" />, bg: "bg-purple-100", title: "Get Matched", desc: "Our AI-powered system matches you with schools that align with your personality and skills.", num: 3 },
            { icon: <CheckCircle className="w-4 h-4 text-green-600" />, bg: "bg-green-100", title: "Apply to Jobs", desc: "Browse curated school listings, review job descriptions, and find positions that fit you perfectly.", num: 4 },
            { icon: <Users className="w-4 h-4 text-blue-600" />, bg: "bg-blue-100", title: "Connect & Interview", desc: "Schedule interviews, connect with schools, find the news, and find your dream teaching position.", num: 5 },
          ].map((step) => (
            <div key={step.num} className="bg-white rounded-2xl p-5 border border-gray-100 relative">
              <span className="absolute top-4 right-4 text-xs font-bold text-gray-300">{step.num}</span>
              <div className={`w-8 h-8 ${step.bg} rounded-lg flex items-center justify-center mb-3`}>
                {step.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/register" className="inline-flex items-center gap-2 bg-[#6d4cff] text-white text-sm font-medium px-6 py-2.5 rounded-xl hover:bg-[#5b3fe0] transition-colors">
            Start as a Teacher →
          </Link>
        </div>
      </section>

      {/* For Schools */}
      <section className="py-10 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-600 text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            <Users className="w-3 h-3" /> For Schools
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Find Teachers Who Fit Your Culture</h2>
          <p className="text-gray-500 text-sm">Hire educators who align with your school's values and vision</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { icon: <User className="w-4 h-4 text-purple-600" />, bg: "bg-purple-100", title: "Register Your School", desc: "Create your school profile and tell us about your school's values and culture.", num: 1 },
            { icon: <ClipboardList className="w-4 h-4 text-blue-600" />, bg: "bg-blue-100", title: "Define Job Requirements", desc: "Post job openings and specify the ideal personality traits and competencies you're looking for.", num: 2 },
            { icon: <Star className="w-4 h-4 text-purple-400" />, bg: "bg-purple-50", title: "Browse Matched Candidates", desc: "Browse pre-screened teachers matched to your school's culture and requirements.", num: 3 },
            { icon: <MessageSquare className="w-4 h-4 text-green-600" />, bg: "bg-green-100", title: "Interview Top Matches", desc: "Connect with candidates who have been pre-screened and are aligned with your school's culture and values.", num: 4 },
            { icon: <Users className="w-4 h-4 text-blue-600" />, bg: "bg-blue-100", title: "Hire with Confidence", desc: "Make informed hiring decisions backed by personality and competency insights.", num: 5 },
          ].map((step) => (
            <div key={step.num} className="bg-white rounded-2xl p-5 border border-gray-100 relative">
              <span className="absolute top-4 right-4 text-xs font-bold text-gray-300">{step.num}</span>
              <div className={`w-8 h-8 ${step.bg} rounded-lg flex items-center justify-center mb-3`}>
                {step.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/register" className="inline-flex items-center gap-2 bg-[#6d4cff] text-white text-sm font-medium px-6 py-2.5 rounded-xl hover:bg-[#5b3fe0] transition-colors">
            Start as a School →
          </Link>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Why Choose Tabasheer?</h2>
          <p className="text-gray-500 text-sm">The smart way to match teachers with schools</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: <Zap className="w-5 h-5 text-amber-600" />, bg: "bg-amber-100", title: "AI-Powered Matching", desc: "Our advanced algorithm ensures the best fit between teachers and schools based on personality and skills." },
            { icon: <Database className="w-5 h-5 text-purple-600" />, bg: "bg-purple-100", title: "Data-Driven Decisions", desc: "Make informed hiring decisions backed by comprehensive assessments and compatibility scores." },
            { icon: <CheckCircle className="w-5 h-5 text-green-600" />, bg: "bg-green-100", title: "Proven Success", desc: "95% placement success rate with teachers and schools satisfied with their matches." },
          ].map((card) => (
            <div key={card.title} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <div className={`w-10 h-10 ${card.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                {card.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}