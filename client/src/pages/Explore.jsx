import React, { useEffect, useState } from "react";
import axios from "../api/axios";

const Explore = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await axios.get("/media/explore");
        console.log("Media Response:", res.data);
        setMedia(res.data); // ✅ it's already an array
      } catch (err) {
        console.error("Failed to fetch media", err);
        setMedia([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {media.map((item) => (
          <div key={item._id} className="rounded-2xl overflow-hidden shadow-md">
            {item.resource_type === "image" ? (
              <img
                src={item.url}
                alt="uploaded"
                className="w-full h-48 object-cover rounded-2xl"
              />
            ) : (
              <video
                src={item.url}
                controls
                className="w-full h-48 object-cover rounded-2xl"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
