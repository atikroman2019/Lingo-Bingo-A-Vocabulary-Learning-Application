import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const tutorialVideos = [
  "https://www.youtube.com/embed/5MgBikgcWnY",
  "https://www.youtube.com/embed/VpOmEBuuEI8?si=nvNmMmkXv0rUNhlu",
  "https://www.youtube.com/embed/2fx37sug4Oo?si=dX8RysoUUAly4sid",
  "https://www.youtube.com/embed/PMfPDItcY6M?si=hvGArHRbeE3kY1ZQ",
  "https://www.youtube.com/embed/tupRbmVM9Wc?si=muxa-epcC8ThGjtm",
  "https://www.youtube.com/embed/EbzkesbQFlU?si=tqnWPZTTtu3HZSQ4",
  "https://www.youtube.com/embed/4jvzk0PDPVk?si=Lx2s3w2X4Das6InB",
  "https://www.youtube.com/embed/tvUmVk4Qe8Y?si=s4kCSixdQKmn4MZe",
];

const Tutorial = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
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
