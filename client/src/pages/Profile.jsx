import React, { useState, useEffect } from "react";
import api from "../api/axios";
import { toast } from "react-hot-toast";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pRes = await api.get("/user/profile");
        const mRes = await api.get("/media/user");
        setProfile(pRes.data);
        setMedia(mRes.data);
      } catch (err) {
        toast.error("Failed to fetch profile");
      }
    };
    fetchData();
  }, []);

  if (!profile) return <div className="text-center py-10">Loading...</div>;

  // Generate placeholder avatar with initials if none
  const placeholderAvatar = `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
    profile.name
  )}.svg`;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Profile Header */}
      <div className="flex items-center space-x-6 mb-8">
        <img
          src={profile.avatarUrl || placeholderAvatar}
          alt="avatar"
          className="w-28 h-28 rounded-full object-cover border-2 border-blue-400"
        />
        <div>
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="text-gray-600">{profile.email}</p>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mb-4">Your Posts</h2>

      {/* 1:1 Square Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {media.length === 0 ? (
          <p className="text-gray-500">You haven’t shared anything yet.</p>
        ) : (
          media.map((item) => (
            <div
              key={item._id}
              className="relative pt-[100%] bg-gray-100 rounded-2xl overflow-hidden shadow-md"
            >
              {item.resource_type === "image" ? (
                <img
                  src={item.url}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.url}
                  controls
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
