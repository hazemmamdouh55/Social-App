import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-400 pt-14 pb-8 px-6 md:px-10 border-t border-white/5">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#6366f1] to-[#a855f7] flex items-center justify-center shadow-lg">
              <GraduationCap className="text-white" size={22} />
            </div>
            <h2 className="text-white text-lg font-bold tracking-tight">
              Ninga Teacher
            </h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Smart hiring platform connecting schools with top teaching talent through AI-powered matching.
          </p>

          <div className="flex gap-2">
            {["f", "in", "tw", "yt"].map((s) => (
              <button
                key={s}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-xs flex items-center justify-center transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">
            Navigation
          </h3>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="text-sm hover:text-white transition">Home</Link></li>
            <li><Link to="/browse-jobs" className="text-sm hover:text-white transition">Browse Jobs</Link></li>
            <li><Link to="/TeacherPortal" className="text-sm hover:text-white transition">Teacher Portal</Link></li>
            <li><Link to="/SchoolDashpord" className="text-sm hover:text-white transition">School Portal</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">
            Categories
          </h3>
          <ul className="flex flex-col gap-2">
            <li><Link to="/jobs/math" className="text-sm hover:text-white transition">Mathematics</Link></li>
            <li><Link to="/jobs/science" className="text-sm hover:text-white transition">Science</Link></li>
            <li><Link to="/jobs/english" className="text-sm hover:text-white transition">English</Link></li>
            <li><Link to="/jobs/online" className="text-sm hover:text-white transition">Online Teaching</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">
            Support
          </h3>
          <ul className="flex flex-col gap-2">
            <li><Link to="/help" className="text-sm hover:text-white transition">Help Center</Link></li>
            <li><Link to="/contact" className="text-sm hover:text-white transition">Contact</Link></li>
            <li><Link to="/privacy" className="text-sm hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-sm hover:text-white transition">Terms & Conditions</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-gray-500">
          © 2026 Ninga Teacher. All rights reserved.
        </p>

        <div className="flex gap-5">
          <Link to="/privacy" className="text-xs text-gray-500 hover:text-white transition">Privacy</Link>
          <Link to="/terms" className="text-xs text-gray-500 hover:text-white transition">Terms</Link>
          <Link to="/sitemap" className="text-xs text-gray-500 hover:text-white transition">Sitemap</Link>
        </div>
      </div>

    </footer>
  )
}