import React, { useEffect, useState } from 'react'
import Validmessage from '../../../component/shared/validationMessage/validmessage';
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { Alert } from "@heroui/react";
import { Link, useNavigate } from 'react-router';
import { Users, Building2, Eye, EyeOff } from 'lucide-react';
import { Loginschema } from '../../../schema/login.schema'
import { Authcontext } from '../../../context/authcontext';
import { useContext } from 'react';

const Singin_API = 'https://route-posts.routemisr.com/users/signin'

export default function Login() {

  let timout_ID;
  const { SaveUserToken } = useContext(Authcontext)
  const [errorMessage, seterrorMessage] = useState("")
  const [isSuccess, setisSuccess] = useState("")
  const [activeTab, setActiveTab] = useState("teacher")
  const [showPassword, setShowPassword] = useState(false)
  const Navigate = useNavigate()
  const { handleSubmit, register, formState: { errors, touchedFields, isSubmitting } } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(Loginschema)
  });

  async function submitForm(data) {
    try {
      const response = await axios.request({ method: "POST", url: Singin_API, data })
      if (response.error) throw new Error(response.error);
      setisSuccess("Logged in successfully")
      SaveUserToken(response.data.data.token)

      localStorage.setItem("userRole", activeTab)

      timout_ID = setTimeout(() => {
        if (activeTab === "teacher") {
          Navigate('/TeacherSurvey')
        } else {
          Navigate('/')
        }
      }, 1000);

    } catch (error) {
      seterrorMessage(error.response.data.errors)
    }
  }

  useEffect(() => {
    return () => clearTimeout(timout_ID);
  }, [timout_ID]);

  return (
    <div className="bg-[#faf5ff] flex items-center justify-center p-6 min-h-[calc(100vh-136px)]">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">

        {/* Left - Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 bg-white">

          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 bg-[#6d4cff] rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12 3L4 7v5c0 5.25 3.4 10.15 8 11.35C16.6 22.15 20 17.25 20 12V7l-8-4z" />
              </svg>
            </div>
            <span className="text-[#6d4cff] font-bold text-lg">Tabasheer</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-1">Welcome Back! 👋</h1>
          <p className="text-gray-500 text-sm mb-8">Continue your journey with us</p>

          {/* Teacher / School Toggle */}
          <div className="flex bg-gray-100 rounded-2xl p-1 mb-8">
            <button
              onClick={() => setActiveTab("teacher")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === "teacher" ? "bg-[#6d4cff] text-white shadow" : "text-gray-500 hover:text-gray-700"
                }`}
            >
              <Users className="w-4 h-4" /> Teacher
            </button>
            <button
              onClick={() => setActiveTab("school")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === "school" ? "bg-[#6d4cff] text-white shadow" : "text-gray-500 hover:text-gray-700"
                }`}
            >
              <Building2 className="w-4 h-4" /> School
            </button>
          </div>

          <div className="space-y-4">
            {errorMessage && <Alert hideIconWrapper color="danger" description={errorMessage} title="Please try again" variant="bordered" />}
            {isSuccess && <Alert hideIconWrapper color="success" description={isSuccess} title="Welcome back" variant="bordered" />}

            <form onSubmit={handleSubmit(submitForm)} className="space-y-5">

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#6d4cff] focus:ring-1 focus:ring-[#6d4cff] transition"
                  {...register("email")}
                />
                <Validmessage field={errors.email} isTouched={touchedFields.email} />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#6d4cff] focus:ring-1 focus:ring-[#6d4cff] transition"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <Validmessage field={errors.password} isTouched={touchedFields.password} />
              </div>

              {/* Remember / Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Remember me
                </label>
                <Link to="#" className="text-sm text-[#6d4cff] font-medium hover:underline">Forgot Password?</Link>
              </div>

              {/* ✅ Submit Button - Fixed */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#6d4cff] hover:bg-[#5b3fe0] text-white font-medium py-3.5 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                ) : (
                  <>
                    Sign In as {activeTab === "teacher" ? "Teacher" : "School"}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>

            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 py-4">
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Or continue with</span>
              <div className="flex-1 h-px bg-gray-100"></div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <button type="button" className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>
              <button type="button" className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2" />
                </svg>
                LinkedIn
              </button>
            </div>

            <div className="text-center mt-4">
              <span className="text-gray-500 text-sm">Don't have an account? </span>
              <Link to="/register" className="text-[#6d4cff] text-sm font-semibold hover:underline">Sign up for free →</Link>
            </div>
          </div>
        </div>

        {/* Right - Banner */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#6d4cff] to-[#9b59ff] flex-col items-center justify-center px-16 text-white">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-8">
            <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

          {activeTab === "teacher" ? (
            <>
              <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
                Your Dream Teaching<br />Job Awaits
              </h2>
              <p className="text-white/70 text-center text-sm mb-10 leading-relaxed">
                AI-powered matching connects you with schools<br />that value your unique teaching style
              </p>
              <div className="grid grid-cols-3 gap-4 w-full mb-10">
                {[
                  { icon: "👥", num: "1,200+", label: "Teachers" },
                  { icon: "💼", num: "500+", label: "Jobs" },
                  { icon: "🏆", num: "95%", label: "Success" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/15 rounded-2xl p-4 text-center">
                    <div className="text-2xl mb-1">{s.icon}</div>
                    <div className="text-lg font-bold">{s.num}</div>
                    <div className="text-white/60 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
              <ul className="space-y-3 w-full">
                {["Personality-based matching algorithm", "Verified teaching opportunities", "Direct communication with schools"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="w-2 h-2 bg-white rounded-full shrink-0"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
                Find Your Perfect<br />Teacher Match
              </h2>
              <p className="text-white/70 text-center text-sm mb-10 leading-relaxed">
                AI-powered matching helps you find teachers<br />that fit your school's culture and needs
              </p>
              <div className="grid grid-cols-3 gap-4 w-full mb-10">
                {[
                  { icon: "🏫", num: "300+", label: "Schools" },
                  { icon: "🎓", num: "1,200+", label: "Teachers" },
                  { icon: "⭐", num: "98%", label: "Satisfied" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/15 rounded-2xl p-4 text-center">
                    <div className="text-2xl mb-1">{s.icon}</div>
                    <div className="text-lg font-bold">{s.num}</div>
                    <div className="text-white/60 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
              <ul className="space-y-3 w-full">
                {["Smart filtering by subject and experience", "Verified teacher profiles", "Streamlined hiring process"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="w-2 h-2 bg-white rounded-full shrink-0"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

      </div>
    </div>
  )
}