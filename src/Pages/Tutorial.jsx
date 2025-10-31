import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const tutorialVideos = [
  "https://www.youtube.com/embed/5MgBikgcWnY",
  "https://www.youtube.com/embed/ltrMfT4Qz5Y",
  "https://www.youtube.com/embed/2V1wtxj-5gY",
  "https://www.youtube.com/embed/xC6kY0yq5d0",
  "https://www.youtube.com/embed/8YcD2rP_3xU",
  "https://www.youtube.com/embed/3GmD2DQZ6oQ",
  "https://www.youtube.com/embed/Kb6cH6zPZ3Y",
  "https://www.youtube.com/embed/tQ7UzHxeo1Y",
];

const Tutorial = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-yellow-50 to-white">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-600 mb-12">
        Tutorial Videos
      </h1>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {tutorialVideos.map((video, index) => (
          <div key={index} className="w-full rounded-lg overflow-hidden shadow-lg">
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={video}
                title={`Tutorial Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* Learn Vocabularies Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => navigate("/start-learning")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg transition"
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
