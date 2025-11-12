import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const StartLearning = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // ✅ Handle "View More" Button
  const handleViewMore = () => {
    if (user) {
      navigate("/tutorials");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-11/12 mx-auto py-16">
      {/* 🌟 Page Title */}
      <h1 className="text-5xl font-extrabold text-center mb-12 text-purple-700">
        Let’s Learn
      </h1>

      {/* 📘 Lessons Section */}
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-20">
        {Array.from({ length: 10 }, (_, i) => (
          <Link
            key={i}
            to={`/lesson/${i + 1}`}
            className="group bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 flex flex-col items-center justify-center text-xl font-semibold text-gray-700 hover:-translate-y-1 border border-transparent hover:border-purple-400"
          >
            <div className="text-5xl mb-3 group-hover:scale-110 transition">📘</div>
            <p className="group-hover:text-purple-600 transition">
              Lesson {i + 1}
            </p>
          </Link>
        ))}
      </div>

      {/* 🎥 Tutorial Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-100 py-12 rounded-3xl text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">
          Learn the Alphabet
        </h2>

        <div className="w-full flex justify-center mb-8">
          <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-purple-300">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/kDdg2M1_EuE"
              title="Alphabet Learning Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <button
          onClick={handleViewMore}
          className="mt-4 px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition font-semibold shadow-md hover:shadow-lg"
        >
          View More Tutorials
        </button>
      </section>
    </div>
  );
};

export default StartLearning;
