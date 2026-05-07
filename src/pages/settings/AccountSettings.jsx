 import React, { useState, useRef } from "react";
import { 
  User, Lock, Bell, Shield, Mail, Phone, Globe, Save, 
  Camera, GraduationCap, LogOut, ChevronRight, AlertCircle,
  Settings as SettingsIcon, CheckCircle2, Loader2, Eye, EyeOff, ChevronDown, Trash2 
} from "lucide-react";

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState("Account");
  
   
  const [profileImg, setProfileImg] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImg(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileImg(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

   
  const [privacy, setPrivacy] = useState({ showEmail: true, showPhone: false });
  const [notifs, setNotifs] = useState({ email: true, push: false, messages: true, updates: true });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSave = async (e) => {
    if(e) e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const Toggle = ({ enabled, onClick }) => (
    <button type="button" onClick={onClick} className={`w-12 h-6 rounded-full transition-all relative shadow-inner ${enabled ? 'bg-[#6366f1]' : 'bg-gray-300'}`}>
      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all ${enabled ? 'left-7' : 'left-1'}`} />
    </button>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFB] w-full pb-20 font-sans relative text-left">
      
      {/* Confirm Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-4xl p-8 max-w-md w-full mx-4 shadow-2xl animate-in zoom-in-95">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-6"><AlertCircle size={32} /></div>
            <h3 className="text-2xl font-black text-slate-800 mb-2">Delete Account?</h3>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed">Are you sure? This action cannot be undone. All your data will be permanently deleted.</p>
            <div className="flex gap-4">
              <button onClick={() => setShowDeleteModal(false)} className="flex-1 py-4 bg-slate-100 text-slate-600 font-black rounded-2xl hover:bg-slate-200 transition-all">Cancel</button>
              <button onClick={() => {alert("Account Deleted"); setShowDeleteModal(false);}} className="flex-1 py-4 bg-red-600 text-white font-black rounded-2xl hover:bg-red-700 shadow-lg shadow-red-100 transition-all">Yes, Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-24 right-10 z-100 bg-emerald-500 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right-10 duration-300">
          <CheckCircle2 size={20} />
          <span className="font-bold text-sm">Settings updated successfully!</span>
        </div>
      )}

     
      

      <div className="max-w-6xl mx-auto p-6 md:p-12">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div className="flex items-center gap-5">
            <div className="text-[#a855f7]"><SettingsIcon size={48} strokeWidth={1.5} /></div>
            <div>
              <h1 className="text-4xl font-black text-slate-800 tracking-tight leading-none">Settings</h1>
              <p className="text-slate-400 text-sm mt-1 font-medium font-sans">Manage your account settings and preferences</p>
            </div>
          </div>
          <button onClick={() => window.location.reload()} className="px-8 py-3.5 border-2 border-[#a855f7] text-[#a855f7] font-bold rounded-[18px] text-[15px] bg-white hover:bg-[#a855f7]/5 transition-all shadow-sm">Back to Dashboard</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-4xl p-4 shadow-xl shadow-slate-200/40 border border-gray-50">
              {[ { id: "Account", icon: User, label: "Account" }, { id: "Security", icon: Lock, label: "Security" }, { id: "Notifications", icon: Bell, label: "Notifications" }, { id: "Privacy", icon: Shield, label: "Privacy" } ].map((item) => (
                <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full flex items-center justify-between p-4 rounded-2xl mb-1 transition-all font-bold text-[15px] ${activeTab === item.id ? "bg-[#f5f3ff] text-[#9333ea]" : "text-gray-400 hover:bg-gray-50"}`}>
                  <div className="flex items-center gap-3"><item.icon size={18} strokeWidth={activeTab === item.id ? 2.5 : 2} /> {item.label}</div>
                  {activeTab === item.id && <ChevronRight size={14} />}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            
            {/* 1. Account Tab */}
            {activeTab === "Account" && (
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-slate-200/40 border border-gray-50 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-4 mb-10 border-b border-gray-50 pb-6"><User className="text-[#9333ea]" size={28} /><h2 className="text-2xl font-black text-slate-800 tracking-tight leading-none">Account Settings</h2></div>
                <div className="flex flex-col md:flex-row items-center gap-8 mb-12 pb-10 border-b border-gray-50">
                   <div className="relative group">
                    <div className="w-24 h-24 bg-[#eeefff] rounded-full flex items-center justify-center text-2xl font-black text-[#6366f1] border-4 border-white shadow-sm overflow-hidden font-sans">
                      {profileImg ? <img src={profileImg} className="w-full h-full object-cover" /> : "WA"}
                    </div>
                    <button type="button" onClick={() => fileInputRef.current.click()} className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md border border-gray-100 text-[#9333ea] hover:scale-110 transition-transform"><Camera size={16} /></button>
                    <input type="file" ref={fileInputRef} className="hidden" onChange={handleImageChange} accept="image/*" />
                   </div>
                   <div className="text-center md:text-left flex-1 font-sans">
                     <h3 className="text-xl font-black text-slate-800 tracking-tight">Profile Picture</h3>
                     <p className="text-sm text-slate-400 mt-1 font-medium">Upload your school logo or admin photo.</p>
                     <div className="flex gap-4 mt-5 justify-center md:justify-start">
                       <button type="button" onClick={() => fileInputRef.current.click()} className="px-5 py-2.5 bg-[#f5f3ff] text-[#9333ea] text-[13px] font-black rounded-xl hover:bg-purple-100 transition-all">Change photo</button>
                       <button type="button" onClick={handleRemoveImage} className="px-5 py-2.5 text-[#ef4444] text-[13px] font-black rounded-xl hover:bg-red-50 transition-all">Remove</button>
                     </div>
                   </div>
                </div>
                <form onSubmit={handleSave} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3"><label className="text-sm font-black text-slate-700 ml-1">Email Address</label><input type="email" placeholder="school@example.com" className="w-full h-16 pl-6 bg-white border-2 border-gray-100 rounded-[22px] outline-none focus:border-purple-400 font-medium text-slate-600 transition-all" /></div>
                    <div className="space-y-3"><label className="text-sm font-black text-slate-700 ml-1">Phone Number</label><input type="text" placeholder="+1 (555) 123-4567" className="w-full h-16 pl-6 bg-white border-2 border-gray-100 rounded-[22px] outline-none focus:border-purple-400 font-medium text-slate-600 transition-all" /></div>
                    <div className="space-y-3 md:col-span-2"><label className="text-sm font-black text-slate-700 ml-1">Language</label><div className="relative group"><Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={20} /><select className="w-full h-16 pl-14 pr-10 bg-white border-2 border-gray-100 rounded-[22px] outline-none appearance-none font-medium text-slate-600 cursor-pointer focus:border-purple-400"><option>English (US)</option><option>Arabic (EG)</option></select><ChevronDown size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" /></div></div>
                  </div>
                  <button type="submit" disabled={isLoading} className="w-full h-16 mt-6 bg-linear-to-r from-[#6366f1] to-[#9333ea] text-white font-black text-lg rounded-[22px] flex items-center justify-center gap-3 shadow-xl active:scale-[0.98] transition-all hover:opacity-90">{isLoading ? <Loader2 className="animate-spin" /> : <Save size={24} />} Save Changes</button>
                </form>
              </div>
            )}

             
            {activeTab === "Security" && (
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-slate-200/40 border border-gray-50 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-4 mb-10 border-b border-gray-50 pb-6 font-bold text-2xl text-slate-800 tracking-tight leading-none"><Lock className="text-[#9333ea]" size={28} /> Security Settings</div>
                <form onSubmit={handleSave} className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 ml-1">Current Password</label>
                    <div className="relative group">
                      <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-purple-500 transition-colors" size={20} />
                      <input type={showPassword ? "text" : "password"} placeholder="Enter current password" className="w-full h-16 pl-14 pr-12 bg-white border-2 border-gray-100 rounded-[22px] outline-none focus:border-purple-400 transition-all font-medium text-slate-600 shadow-sm" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400">{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
                    </div>
                  </div>
                  <div className="space-y-3"><label className="text-sm font-black text-slate-700 ml-1">New Password</label><input type="password" placeholder="Enter new password" className="w-full h-16 px-8 bg-white border-2 border-gray-100 rounded-[22px] outline-none focus:border-purple-400 font-medium text-slate-600 shadow-sm" /></div>
                  <div className="space-y-3"><label className="text-sm font-black text-slate-700 ml-1">Confirm New Password</label><input type="password" placeholder="Confirm new password" className="w-full h-16 px-8 bg-white border-2 border-gray-100 rounded-[22px] outline-none focus:border-purple-400 font-medium text-slate-600 shadow-sm" /></div>
                  <button type="submit" disabled={isLoading} className="w-full h-16 mt-6 bg-linear-to-r from-[#9333ea] to-[#2563eb] text-white font-black text-lg rounded-[22px] flex items-center justify-center gap-3 shadow-xl active:scale-[0.98] transition-all hover:opacity-90">{isLoading ? <Loader2 className="animate-spin" /> : <Lock size={22} />} Change Password</button>
                </form>
              </div>
            )}

            {/* 3. Notifications Tab */}
            {activeTab === "Notifications" && (
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-slate-200/40 border border-gray-50 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-4 mb-10"><Bell className="text-[#9333ea]" size={28} /><h2 className="text-2xl font-black text-slate-800 tracking-tight leading-none font-sans">Notification Preferences</h2></div>
                <div className="space-y-4">
                  {[ { id: 'email', title: 'Email Notifications', desc: 'Receive notifications via email' }, { id: 'push', title: 'Push Notifications', desc: 'Receive push alerts on device' }, { id: 'messages', title: 'Message Notifications', desc: 'Get notified when you receive new messages' }, { id: 'updates', title: 'Application Updates', desc: 'Notifications about your job matching' } ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-6 bg-[#F8FAFC] rounded-3xl border border-gray-100 hover:bg-gray-100/50 transition-all group">
                      <div className="font-sans">
                        <h4 className="text-[15px] font-black text-slate-800 tracking-tight group-hover:text-[#6366f1] transition-colors">{item.title}</h4>
                        <p className="text-sm text-gray-400 font-medium mt-1">{item.desc}</p>
                      </div>
                      <Toggle enabled={notifs[item.id]} onClick={() => setNotifs({...notifs, [item.id]: !notifs[item.id]})} />
                    </div>
                  ))}
                </div>
                <button onClick={handleSave} className="w-full h-16 mt-10 bg-[#9333ea] text-white font-black text-lg rounded-[22px] shadow-xl hover:opacity-90 active:scale-[0.98] transition-all">Save Preferences</button>
              </div>
            )}

            
            {activeTab === "Privacy" && (
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-slate-200/40 border border-gray-50 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-4 mb-10 border-b border-gray-50 pb-6 font-bold text-2xl text-slate-800 tracking-tight leading-none font-sans"><Shield className="text-[#9333ea]" size={28} /> Privacy Settings</div>
                <div className="space-y-8">
                  <div className="space-y-3"><label className="text-sm font-black text-slate-700 ml-1 font-sans">Profile Visibility</label><div className="relative"><Shield className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={20} /><select className="w-full h-16 pl-14 bg-white border-2 border-gray-100 rounded-[22px] outline-none font-medium text-slate-600 shadow-sm focus:border-purple-400 appearance-none cursor-pointer font-sans"><option>Public Profile</option><option>Private Profile</option></select><ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} /></div></div>
                  
                  <div className="space-y-4">
                    <div className="p-6 bg-[#F8FAFC] rounded-3xl flex items-center justify-between border border-gray-50 hover:bg-gray-100/50 transition-all group font-sans">
                      <div className="flex items-center gap-5">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-gray-400 group-hover:text-[#6366f1] transition-colors"><Mail size={20} /></div>
                        <div><h4 className="font-black text-slate-800 tracking-tight">Show Email Address</h4><p className="text-sm text-gray-400 font-medium font-sans">Display email on public profile</p></div>
                      </div>
                      <Toggle enabled={privacy.showEmail} onClick={() => setPrivacy({...privacy, showEmail: !privacy.showEmail})} />
                    </div>
                    <div className="p-6 bg-[#F8FAFC] rounded-3xl flex items-center justify-between border border-gray-50 hover:bg-gray-100/50 transition-all group font-sans">
                      <div className="flex items-center gap-5">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-gray-400 group-hover:text-[#6366f1] transition-colors"><Phone size={20} /></div>
                        <div><h4 className="font-black text-slate-800 tracking-tight">Show Phone Number</h4><p className="text-sm text-gray-400 font-medium font-sans">Display phone on public profile</p></div>
                      </div>
                      <Toggle enabled={privacy.showPhone} onClick={() => setPrivacy({...privacy, showPhone: !privacy.showPhone})} />
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-100 font-sans">
                    <div className="flex items-center gap-3 mb-6 text-[#ef4444] font-black"><AlertCircle size={22} /> Danger Zone</div>
                    <div className="p-8 bg-red-50/50 rounded-4xl border border-red-100">
                       <h4 className="font-black text-slate-800 mb-2 leading-none font-sans">Delete Account</h4>
                       <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed font-sans">Once you delete your account, there is no going back. All your data, applications, and
messages will be permanently deleted.</p>
                       <button onClick={() => setShowDeleteModal(true)} className="px-8 py-4 bg-[#ef4444] text-white font-black rounded-2xl hover:bg-red-700 transition-all shadow-lg shadow-red-100 font-sans">Delete My Account</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}