import { Star, MapPin, GraduationCap, Briefcase, Heart, MessageSquare, Eye } from "lucide-react";

const tagColors = [
    "bg-pink-100 text-pink-600 border-pink-200",
    "bg-purple-100 text-purple-600 border-purple-200",
    "bg-blue-100 text-blue-600 border-blue-200",
    "bg-green-100 text-green-600 border-green-200",
    "bg-orange-100 text-orange-600 border-orange-200",
    "bg-cyan-100 text-cyan-600 border-cyan-200",
];

function getTagColor(index) {
    return tagColors[index % tagColors.length];
}

export default function TeacherCard({ post: teacher, onViewProfile, onMessage }) {
    const {
        name,
        subject,
        matchRate,
        rating,
        location,
        experience,
        tags = [],
        image,
        education,
        isVerified = true,
    } = teacher;

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
            
            {/* Mobile: Vertical layout / md+: Horizontal layout */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-5">

                {/* Image + Badges */}
                <div className="relative flex-shrink-0">
                    <img
                        src={image}
                        alt={name}
                        className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl object-cover"
                    />

                    {/* Match Rate Badge */}
                    <div className="absolute -top-2 -right-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-md shadow-purple-200">
                        <span className="text-white text-[10px] sm:text-[11px] font-black">{matchRate}%</span>
                    </div>

                    {/* Verified Badge */}
                    {isVerified && (
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-purple-600 flex items-center gap-1 shadow-sm whitespace-nowrap">
                            <span className="text-white text-[9px] font-bold">✓ Verified</span>
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 pt-1 w-full text-center sm:text-left">
                    <h3 className="text-base font-extrabold text-slate-800 leading-tight">{name}</h3>
                    <p className="text-sm text-purple-500 font-semibold mt-0.5">{subject}</p>

                    {/* Stats Row */}
                    <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-2 flex-wrap">
                        <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                            <Star size={12} className="text-amber-400 fill-amber-400" />
                            {rating}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                            <MapPin size={12} className="text-slate-400" />
                            {location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                            <Briefcase size={12} className="text-slate-400" />
                            {experience} exp
                        </span>
                    </div>

                    {/* Education */}
                    {education && (
                        <div className="flex items-center justify-center sm:justify-start gap-1 mt-1.5">
                            <GraduationCap size={12} className="text-slate-400" />
                            <span className="text-xs text-slate-400">{education}</span>
                        </div>
                    )}

                    {/* Tags */}
                    {tags.length > 0 && (
                        <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mt-2.5">
                            {tags.map((tag, i) => (
                                <span
                                    key={tag}
                                    className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${getTagColor(i)}`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col flex-row gap-2 flex-shrink-0 w-full sm:w-auto justify-center sm:justify-start">
                    <button
                        onClick={() => onViewProfile?.(teacher)}
                        className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all outline-none active:scale-95 flex-1 sm:flex-none"
                        style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
                    >
                        <Eye size={13} /> View Profile
                    </button>
                    <button
                        onClick={() => onMessage?.(teacher)}
                        className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-purple-600 border border-purple-200 bg-white hover:bg-purple-50 transition-all outline-none active:scale-95 flex-1 sm:flex-none"
                    >
                        <MessageSquare size={13} /> Message
                    </button>
                </div>

            </div>
        </div>
    );
}