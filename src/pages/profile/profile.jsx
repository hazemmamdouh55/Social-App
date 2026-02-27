import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getprofile, getuserprofile } from "../../servises/profile";
import { FaEdit } from "react-icons/fa";
import Postlisting from "../../component/posts/Postlisting";
import { Authcontext } from "../../context/Authcontext";
import { useParams } from "react-router";
import CreatPost from "../../component/CreatPost/CreatPost";

export default function Profile() {
  const { userId } = useContext(Authcontext)
  const currentId = useParams();

  const { data: profile, isLoading, isError, error } = useQuery({
    queryKey: ["profile-posts", userId],
    queryFn: () => {
      if (userId === currentId.userId) {
        return getprofile();
      } else {
        return getuserprofile(currentId.userId);
      }
    },
    enabled: !!userId,
    staleTime: 0,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return <>

    <div className="min-h-screen  bg-[#1A1A2E] text-[#FFD700] font-sans">

      {/* Header */}
      <div className="bg-gradient-to-r from-[#D4AF37] to-[#C68642] p-8 relative rounded-b-3xl shadow-[0_0_25px_#FFD700]">
        <div className="max-w-4xl mx-auto flex items-center gap-6">
          <img
            src={profile?.photo}
            alt={profile?.name}
            className="w-28 h-28 rounded-full border-4 border-[#FFD700] object-cover shadow-[0_0_15px_#FFD700]"
          />
          <div>
            <h1 className="text-3xl font-bold">{profile?.name}</h1>
            <p className="text-yellow-200">@{profile?.username}</p>
            <p className="mt-2 text-sm text-yellow-100/80">"{profile?.email}"</p>
          </div>
        </div>
        <button className="absolute right-8 top-8 bg-[#FFD700] text-[#1A1A2E] px-4 py-2 rounded-lg shadow hover:bg-[#FFEA85] flex items-center gap-2">
          <FaEdit /> Edit Profile
        </button>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto mt-6 bg-[#1B1B2F]/80 border-2 border-[#FFD700] rounded-3xl shadow-[0_0_20px_#FFD700] backdrop-blur-[15px] p-6 flex justify-around">
        <div className="text-center">
          <p className="text-xl font-bold">{profile?.postsCount || 0}</p>
          <span className="text-sm text-yellow-200">Posts</span>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">{profile?.followersCount}</p>
          <span className="text-sm text-yellow-200">Followers</span>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">{profile?.followingCount}</p>
          <span className="text-sm text-yellow-200">Following</span>
        </div>
      </div>
    {userId === currentId.userId &&<CreatPost></CreatPost>}
      {/* Posts Section */}
      <Postlisting isHome={false} />
    </div>
  </>;
}