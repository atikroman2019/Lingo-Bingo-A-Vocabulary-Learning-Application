import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Lesson = () => {
  const { lesson_no } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [lessonVocab, setLessonVocab] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);

  // Fetch JSON from public folder
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch("/japanese.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) => item.lesson_no === parseInt(lesson_no)
        );
        setLessonVocab(filtered);
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, [lesson_no, user, navigate]);

  // 🔊 Speak the word aloud
  const speakWord = (word) => {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser does not support speech synthesis.");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP"; // For Japanese voice
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "border-green-500 bg-green-50";
      case "medium":
        return "border-yellow-500 bg-yellow-50";
      case "hard":
        return "border-red-500 bg-red-50";
      default:
        return "border-gray-400 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8 text-center">
        Lesson {lesson_no} Vocabulary
      </h1>

      {/* Vocabulary Cards */}
      {lessonVocab.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {lessonVocab.map((vocab, index) => (
            <div
              key={index}
              className={`p-6 border-l-4 ${getDifficultyColor(
                vocab.difficulty
              )} rounded-xl shadow-md hover:shadow-lg transition cursor-pointer`}
              onClick={() => speakWord(vocab.word)} // 👈 Speak on click
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {vocab.word}
                </h2>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering speak
                    speakWord(vocab.word);
                  }}
                  className="text-indigo-500 hover:text-indigo-700 text-sm font-medium"
                >
                  🔊 Speak
                </button>
              </div>
              <p className="italic text-gray-600">{vocab.part_of_speech}</p>
              <p className="mt-2 text-gray-700">
                <span className="font-medium">Meaning:</span> {vocab.meaning}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Pronunciation:</span>{" "}
                {vocab.pronunciation}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering speak
                  setSelectedWord(vocab);
                }}
                className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition"
              >
                When to Say
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center mt-10">
          No vocabularies found for this lesson.
        </p>
      )}

      {/* Back Button */}
      <button
        onClick={() => navigate("/start-learning")}
        className="mt-10 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition"
      >
        Back to Lessons
      </button>

      {/* Modal */}
      {selectedWord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setSelectedWord(null)}
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold text-indigo-600 mb-3">
              {selectedWord.word}
            </h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Meaning:</span>{" "}
              {selectedWord.meaning}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">When to Say:</span>{" "}
              {selectedWord.when_to_say}
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Example:</span>{" "}
              {selectedWord.example}
            </p>
            <button
              onClick={() => speakWord(selectedWord.word)}
              className="mb-3 w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold py-2 rounded-lg transition"
            >
              🔊 Hear Word
            </button>
            <button
              onClick={() => setSelectedWord(null)}
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson;
