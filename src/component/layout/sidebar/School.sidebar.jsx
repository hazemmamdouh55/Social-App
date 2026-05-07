import {
    LayoutDashboard,
    Users,
    BarChart3,
    Settings,
    GraduationCap,
    Eye,
    User,
    Settings2
} from "lucide-react";
import { NavLink } from "react-router";

export default function Sidebar({ matchesCount = 0, onNavigate, activePage }) {
    // ... داخل مكون Sidebar
    const menuItems = [
        { id: "dashboard", icon: Users, label: "Matches", count: matchesCount },
        // غيرنا الـ id هنا ليكون jobPosts عشان يفتح القائمة الأول
        { id: "jobPosts", icon: LayoutDashboard, label: "Job Postings" },
        { id: "analytics", icon: BarChart3, label: "Analytics" },
        { id: "applicants", icon: User, label: "Applicants" },
        { id: "settings", icon: Settings2, label: "Settings" },
    ];


    return (
        <>
            <div className="hidden md:flex w-64 min-h-screen bg-[#111827] text-white flex-col p-4 border-r border-white/5 shadow-2xl shrink-0">
                <div className="flex items-center gap-3 mb-10 px-2 mt-2">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#6366f1] to-[#a855f7] flex items-center justify-center shadow-lg">
                        <GraduationCap className="text-white" size={24} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold tracking-tight text-white leading-none">Ninga Teacher</h1>
                        <span className="text-[10px] text-gray-500 font-medium mt-1 uppercase tracking-widest">School Portal</span>
                    </div>
                </div>

                <nav className="flex-1 space-y-1">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-200 ${activePage === item.id
                                ? "bg-gradient-to-r from-[#4f46e5] to-[#9333ea] shadow-lg text-white"
                                : "hover:bg-white/5 text-gray-400 hover:text-white"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon size={20} strokeWidth={activePage === item.id ? 2.5 : 2} />
                                <span className={`text-sm ${activePage === item.id ? "font-bold" : "font-medium"}`}>
                                    {item.label}
                                </span>
                            </div>
                            {item.count !== undefined && item.count > 0 && (
                                <span className="bg-[#ef4444] text-[10px] font-black px-2 py-0.5 rounded-full text-white min-w-5 text-center">
                                    {item.count}
                                </span>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="mt-auto pt-6 space-y-1 border-t border-white/5">
                    <div className="bg-[#1f2937] p-4 rounded-3xl flex items-center gap-3 mb-4 border border-white/5">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#818cf8] to-[#6366f1] flex items-center justify-center font-bold text-white text-[10px] shadow-md border border-white/10">
                            WA
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[13px] font-bold text-white leading-tight">Westwood Academy</p>
                            <p className="text-[10px] text-gray-500 font-medium mt-0.5">Boston, MA</p>
                        </div>
                    </div>

                    <NavLink
                        to="/SchoolProfile"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-xl w-full transition-all text-sm font-semibold ${isActive
                                ? "text-white bg-white/10"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`
                        }
                    >
                        <Eye size={18} />
                        <span>View Profile</span>
                    </NavLink>

                    <button
                        onClick={() => onNavigate("settings")}
                        className={`flex items-center gap-3 p-3 rounded-xl w-full transition-all text-sm font-semibold ${activePage === "settings"
                            ? "bg-white/10 text-white"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                    >
                        <Settings size={18} />
                        <span>Account Settings</span>
                    </button>
                </div>
            </div>

            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#111827] border-t border-white/10 shadow-2xl">
                <div className="flex items-center justify-around px-2 py-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className="relative flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all"
                        >
                            {activePage === item.id && (
                                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#9333ea]" />
                            )}

                            <item.icon
                                size={20}
                                strokeWidth={activePage === item.id ? 2.5 : 1.8}
                                className={activePage === item.id ? "text-[#818cf8]" : "text-gray-500"}
                            />
                            <span className={`text-[10px] font-semibold ${activePage === item.id ? "text-[#818cf8]" : "text-gray-500"}`}>
                                {item.label}
                            </span>

                            {item.count !== undefined && item.count > 0 && (
                                <span className="absolute top-1 right-1 bg-[#ef4444] text-[9px] font-black w-4 h-4 rounded-full text-white flex items-center justify-center">
                                    {item.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="md:hidden h-16" />
        </>
    );
}