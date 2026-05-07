import { useState, useRef, useEffect } from "react"
import { Link, NavLink, useNavigate } from "react-router"
import { Bell, User, LogOut, ChevronDown, GraduationCap } from "lucide-react"
import LogoutModal from "../../Logout card/LogoutModal"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)

  // ✅ useState بدل قراءة مباشرة
  const [token, setToken] = useState(localStorage.getItem("userToken"))
  const [userName, setUserName] = useState(localStorage.getItem("userName"))
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"))

  const navigate = useNavigate()
  const dropdownRef = useRef(null)

  // ✅ بيسمع للتغييرات في localStorage
  useEffect(() => {
    function syncStorage() {
      setToken(localStorage.getItem("userToken"))
      setUserName(localStorage.getItem("userName"))
      setUserRole(localStorage.getItem("userRole"))
    }

    window.addEventListener("storage", syncStorage)

    // ✅ polling خفيف عشان يلتقط التغيير في نفس الـ tab
    const interval = setInterval(syncStorage, 500)

    return () => {
      window.removeEventListener("storage", syncStorage)
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="bg-[#111827] px-10 h-[68px] flex items-center justify-between relative">
      <Link to="/" className="flex items-center gap-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-[#6366f1] to-[#a855f7] flex items-center justify-center shadow-lg">
            <GraduationCap className="text-white" size={24} />
          </div>
          <span className="font-bold text-[#6d4cff] text-xl tracking-tight">Ninga Teacher</span>
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {!token && (
          <>
            <NavLink to="/welcome" className={({ isActive }) => isActive ? "text-[#6d4cff] font-medium text-sm" : "text-gray-600 text-sm hover:text-[#6d4cff]"}>
              How it Works
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#6d4cff] font-medium text-sm" : "text-gray-600 text-sm hover:text-[#6d4cff]"}>
              What we do
            </NavLink>
          </>
        )}

        {token && (
          <div className="flex items-center gap-6">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#6d4cff] font-semibold text-sm" : "text-white text-sm hover:text-[#6d4cff] transition-colors"}>
              Home
            </NavLink>

            {userRole === "school" && (
              <NavLink to="/SchoolDashpord" className={({ isActive }) => isActive ? "text-[#6d4cff] font-semibold text-sm" : "text-white text-sm hover:text-[#6d4cff] transition-colors"}>
                School Portal
              </NavLink>
            )}

            {userRole === "teacher" && (
              <NavLink to="/TeacherPortal" className={({ isActive }) => isActive ? "text-[#6d4cff] font-semibold text-sm" : "text-white text-sm hover:text-[#6d4cff] transition-colors"}>
                Teacher Portal
              </NavLink>
            )}
            {userRole === "teacher" && (
              <NavLink to="/browse-jobs" className={({ isActive }) => isActive ? "text-[#6d4cff] font-semibold text-sm" : "text-white text-sm hover:text-[#6d4cff] transition-colors"}>
                BrwoseJobs
              </NavLink>
            )}
          </div>
        )}
      </div>

      <div className="hidden md:flex items-center gap-3">
        {token ? (
          <>
            <button onClick={() => navigate("/notifications")} className="relative w-9 h-9 flex items-center justify-center rounded-xl hover:bg-[#6d4cff] transition-colors">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-[#6d4cff] transition-colors">
                <div className="w-8 h-8 bg-[#6d4cff] rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-white">{userName || "User"}</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-[52px] bg-white border border-gray-100 rounded-xl shadow-sm w-44 py-1 z-50">
                  <Link
                    to={userRole === "teacher" ? "/profile" : "/SchoolProfile"}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#6d4cff] transition-colors"
                  >
                    <User className="w-4 h-4" /> Profile
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button onClick={() => setIsLogoutOpen(true)} className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="text-[#6d4cff] font-medium text-sm px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">Sign In</Link>
            <Link to="/register" className="bg-[#6d4cff] text-white font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-[#5b3fe0] transition-colors">Get Started</Link>
          </>
        )}
      </div>

      <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="w-5 h-0.5 bg-gray-600 rounded"></span>
        <span className="w-5 h-0.5 bg-gray-600 rounded"></span>
        <span className="w-5 h-0.5 bg-gray-600 rounded"></span>
      </button>

      {menuOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-white border-t border-gray-100 flex flex-col px-6 py-4 gap-4 md:hidden z-50">
          {!token && (
            <>
              <NavLink to="/" className="text-sm text-gray-600">Home</NavLink>
              <NavLink to="/how-it-works" className="text-sm text-gray-600">How it Works</NavLink>
            </>
          )}
          <NavLink to="/" className="text-sm text-gray-600">Home</NavLink>


          {userRole === "school" && (
            <NavLink to="/SchoolDashpord" className="text-sm text-gray-600">School Portal</NavLink>
          )}
          {userRole === "teacher" && (
            <NavLink to="/TeacherPortal" className="text-sm text-gray-600">Teacher Portal</NavLink>
          )}
          {userRole === "teacher" && (
            <NavLink to="/browse-jobs" className="text-sm text-gray-600">
              BrwoseJobs
            </NavLink>
          )}
          <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
            {token ? (
              <>
                <button onClick={() => { navigate("/Notifications"); setMenuOpen(false) }} className="text-sm text-gray-600 text-left flex items-center gap-2">
                  <Bell className="w-4 h-4" /> Notifications
                </button>
                <Link
                  to={userRole === "teacher" ? "/profile" : "/SchoolProfile"}
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#6d4cff] transition-colors"
                >
                  <User className="w-4 h-4" /> Profile
                </Link>
                <button onClick={() => setIsLogoutOpen(true)} className="text-sm text-red-500 text-left flex items-center gap-2">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-[#6d4cff] font-medium text-sm">Sign In</Link>
                <Link to="/register" className="bg-[#6d4cff] text-white font-medium text-sm px-5 py-2.5 rounded-xl text-center">Get Started</Link>
              </>
            )}
          </div>
        </div>
      )}

      <LogoutModal isOpen={isLogoutOpen} onClose={() => setIsLogoutOpen(false)} />
    </nav>
  )
}