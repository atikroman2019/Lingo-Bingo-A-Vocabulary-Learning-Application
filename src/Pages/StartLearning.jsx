import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const StartLearning = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // handle View More click
    const handleViewMore = () => {
        if (user) {
            navigate("/tutorials");
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="w-11/12 mx-auto py-16">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
                Let’s Learn
            </h1>

            {/* Lessons Section */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-16">
                {Array.from({ length: 10 }, (_, i) => (
                    <Link
                        key={i}
                        to={`/lesson/${i + 1}`}
                        className="bg-indigo-200 rounded-xl shadow-md hover:shadow-lg transition p-6 flex items-center justify-center text-xl font-semibold text-gray-700 hover:bg-blue-50 cursor-pointer"
                    >
                        Lesson {i + 1}
                    </Link>
                ))}
            </div>

            {/* Tutorial Section */}
            <section className="bg-gray-100 py-12 rounded-2xl text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Learn the Alphabet
                </h2>

                <div className="w-full flex justify-center">
                    <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] aspect-video rounded-xl overflow-hidden shadow-lg">
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
                    className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                    View More Tutorials
                </button>
            </section>
        </div>
    );
};

export default StartLearning;
