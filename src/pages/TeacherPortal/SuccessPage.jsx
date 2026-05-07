import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/TeacherPortal');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-12 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white text-center flex flex-col items-center animate-in fade-in zoom-in duration-500">

        <div className="w-24 h-24 bg-[#00C07F] rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-green-100">
          <CheckCircle2 size={48} strokeWidth={3} />
        </div>

        <h1 className="text-3xl font-black text-[#1E293B] mb-4 tracking-tight">
          Application Submitted!
        </h1>

        <p className="text-slate-400 font-bold leading-relaxed mb-10 px-4 text-[15px]">
          Your application has been successfully submitted to <span className="text-slate-600">Boston Latin Academy</span>. They will review your profile and get back to you soon.
        </p>

        <div className="flex flex-col items-center gap-3">
          <span
            className="text-[#9810FA] font-black text-sm tracking-wide cursor-pointer hover:underline"
            onClick={() => navigate('/TeacherDashboard')}
          >
            Redirecting to dashboard...
          </span>


          <div className="w-32 h-1 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#9810FA] animate-[loading_5s_linear]"
              style={{ width: '100%', transformOrigin: 'left' }}>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default SuccessPage;