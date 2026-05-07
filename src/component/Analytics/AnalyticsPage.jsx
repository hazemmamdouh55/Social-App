import { useEffect, useRef } from "react";
import { TrendingUp } from "lucide-react";
import { NavLink } from "react-router";

export default function AnalyticsPage({ onBack }) {
    const barRef = useRef(null);
    const donutRef = useRef(null);
    const radarRef = useRef(null);

    useEffect(() => {
        const loadChart = () => {
            return new Promise((resolve) => {
                if (window.Chart) return resolve();
                const script = document.createElement("script");
                script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
                script.onload = resolve;
                document.head.appendChild(script);
            });
        };

        loadChart().then(() => {
            const Chart = window.Chart;

            if (barRef.current) {
                if (barRef.current._chart) barRef.current._chart.destroy();
                barRef.current._chart = new Chart(barRef.current, {
                    type: "bar",
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                        datasets: [{
                            data: [60, 45, 70, 55, 80, 90, 110, 130],
                            backgroundColor: ["#a5b4fc", "#a5b4fc", "#a5b4fc", "#a5b4fc", "#a5b4fc", "#6366f1", "#6366f1", "#6366f1"],
                            borderRadius: 8,
                            borderSkipped: false,
                        }],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: {
                            x: { grid: { display: false }, ticks: { color: "#94a3b8", font: { size: 11 } } },
                            y: { grid: { color: "#f1f5f9" }, ticks: { color: "#94a3b8", font: { size: 11 }, stepSize: 30 }, beginAtZero: true },
                        },
                    },
                });
            }

            if (donutRef.current) {
                if (donutRef.current._chart) donutRef.current._chart.destroy();
                donutRef.current._chart = new Chart(donutRef.current, {
                    type: "doughnut",
                    data: {
                        datasets: [{
                            data: [87, 13],
                            backgroundColor: ["#6366f1", "#f0f2f8"],
                            borderWidth: 0,
                        }],
                    },
                    options: {
                        responsive: false,
                        cutout: "75%",
                        plugins: { legend: { display: false }, tooltip: { enabled: false } },
                    },
                    plugins: [{
                        id: "centerText",
                        afterDraw(chart) {
                            const { ctx, chartArea: { left, top, right, bottom } } = chart;
                            const cx = (left + right) / 2;
                            const cy = (top + bottom) / 2;
                            ctx.save();
                            ctx.font = "bold 20px sans-serif";
                            ctx.fillStyle = "#1e293b";
                            ctx.textAlign = "center";
                            ctx.textBaseline = "middle";
                            ctx.fillText("87%", cx, cy);
                            ctx.restore();
                        },
                    }],
                });
            }

            if (radarRef.current) {
                if (radarRef.current._chart) radarRef.current._chart.destroy();
                radarRef.current._chart = new Chart(radarRef.current, {
                    type: "radar",
                    data: {
                        labels: ["Empathy", "Adapt.", "Integrity", "Leadership", "Creativity"],
                        datasets: [{
                            data: [85, 70, 90, 60, 75],
                            backgroundColor: "rgba(99,102,241,0.15)",
                            borderColor: "#6366f1",
                            borderWidth: 2,
                            pointBackgroundColor: "#6366f1",
                            pointRadius: 3,
                        }],
                    },
                    options: {
                        responsive: false,
                        plugins: { legend: { display: false } },
                        scales: {
                            r: {
                                min: 0,
                                max: 100,
                                ticks: { display: false },
                                grid: { color: "#e2e8f0" },
                                pointLabels: { font: { size: 9 }, color: "#94a3b8" },
                            },
                        },
                    },
                });
            }
        });

        return () => {
            [barRef, donutRef, radarRef].forEach((ref) => {
                if (ref.current?._chart) ref.current._chart.destroy();
            });
        };
    }, []);

    return (
        <main className="p-8 bg-[#f0f2f8] min-h-screen">
            <div className="max-w-4xl mx-auto">

                <NavLink
                    to="/"
                    className="group flex items-center gap-1 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-indigo-600 transition-all mb-4 outline-none w-fit"
                >
                    <span className="group-hover:-translate-x-1 transition-transform inline-block">
                        ←
                    </span>
                    Back to Home
                </NavLink>

                <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Analytics & Insights</h1>
                <p className="text-slate-400 text-sm mt-1 mb-6 flex items-center gap-2 font-medium">
                    <TrendingUp size={14} className="text-purple-400" />
                    Track your recruitment performance and staff diversity
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-4">

                    <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)" }}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(255,255,255,0.2)" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.75)" }}>Total Applicants</div>
                        <div className="text-3xl font-black text-white">596</div>
                        <div className="text-xs mt-1 font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>↑ 12% this month</div>
                    </div>

                    <div className="bg-white rounded-2xl p-5">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center mb-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                                <rect x="2" y="3" width="20" height="14" rx="2" />
                                <path d="M8 21h8M12 17v4" />
                            </svg>
                        </div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Active Positions</div>
                        <div className="text-3xl font-black text-indigo-500">12</div>
                        <div className="text-xs mt-1 text-slate-400">5 closing soon</div>
                    </div>

                    <div className="bg-white rounded-2xl p-5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center mb-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Avg. Time to Hire</div>
                        <div className="text-3xl font-black text-emerald-500">
                            24 <span className="text-sm font-medium text-slate-400">days</span>
                        </div>
                        <div className="text-xs mt-1 text-slate-400">≈ -3 days vs last month</div>
                    </div>

                </div>

                {/* Mid Row */}
                <div className="grid grid-cols-2 gap-4 mb-4">

                    <div className="bg-white rounded-2xl p-5">
                        <div className="text-sm font-bold text-slate-800 mb-1">Personality Diversity</div>
                        <div className="text-xs text-slate-400 mb-4">Current teaching staff personality trait distribution</div>
                        <div className="flex items-center gap-4">
                            <canvas ref={radarRef} width={130} height={130} />
                            <div className="flex flex-col gap-2">
                                {[
                                    { color: "#6366f1", label: "Empathy" },
                                    { color: "#f59e0b", label: "Adaptability" },
                                    { color: "#10b981", label: "Integrity" },
                                    { color: "#f472b6", label: "Leadership" },
                                    { color: "#60a5fa", label: "Creativity" },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                        <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: item.color }} />
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5">
                        <div className="text-sm font-bold text-slate-800 mb-1">Overall Recruitment Efficiency</div>
                        <div className="text-xs text-slate-400 mb-4">Performance score based on multiple metrics</div>
                        <div className="flex justify-center mb-4">
                            <canvas ref={donutRef} width={120} height={120} />
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div>
                                <div className="text-base font-black text-indigo-500">92%</div>
                                <div className="text-[10px] text-slate-400 font-medium">Match Quality</div>
                            </div>
                            <div>
                                <div className="text-base font-black text-emerald-500">85%</div>
                                <div className="text-[10px] text-slate-400 font-medium">Speed</div>
                            </div>
                            <div>
                                <div className="text-base font-black text-amber-500">84%</div>
                                <div className="text-[10px] text-slate-400 font-medium">Retention</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bar Chart */}
                <div className="bg-white rounded-2xl p-5">
                    <div className="text-sm font-bold text-slate-800 mb-1">Applicant Volume Over Time</div>
                    <div className="text-xs text-slate-400 mb-3">Monthly applicant trends for the past 8 months</div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500 inline-block" />
                        <span className="text-xs text-slate-500 font-medium">Applicants</span>
                    </div>
                    <div className="relative w-full" style={{ height: 200 }}>
                        <canvas ref={barRef} />
                    </div>
                </div>

            </div>
        </main>
    );
}
