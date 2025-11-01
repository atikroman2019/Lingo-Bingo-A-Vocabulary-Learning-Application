import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* 🌟 HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div data-aos="fade-right" className="max-w-xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Master New Words. <br />
            <span className="text-yellow-300">Speak With Confidence.</span>
          </h1>
          <p className="text-lg opacity-90">
            Boost your vocabulary effortlessly with interactive lessons, fun quizzes, 
            and real pronunciation practice. Start your journey to fluency today.
          </p>
          <div className="flex flex-wrap gap-4">
          <Link to="/start-learning">  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg transition">
              🚀 Start Learning
            </button></Link>
            <Link to="/tutorials">
            <button className="border border-white/70 hover:bg-white/10 px-8 py-3 rounded-full font-medium transition">
              🎥 Watch Tutorials
            </button>
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className="mt-10 md:mt-0">
          <img
            src="https://i.ibb.co.com/Ndn5F9f1/stock-vector-engaging-in-language-learning-through-a-variety-of-digital-tools-this-includes-interact.jpg"
            alt="Learning illustration"
            className="w-[380px] md:w-[480px] drop-shadow-2xl"
          />
        </div>
      </section>

      {/* 💡 ABOUT SECTION */}
      <section className="py-20 bg-gray-50 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-indigo-600">About Lingo Bingo</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          Lingo Bingo helps you grow your vocabulary naturally. 
          With interactive lessons, pronunciation features, and gamified challenges, 
          learning a new language becomes exciting and effective.
        </p>
      </section>

      {/* 🏆 ACHIEVEMENTS */}
      <section className="py-20 bg-white text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-12 text-indigo-600">Our Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {[
            { num: "10K+", label: "Users", color: "text-yellow-500" },
            { num: "500+", label: "Lessons", color: "text-green-500" },
            { num: "15K+", label: "Words", color: "text-blue-500" },
            { num: "300+", label: "Tutorials", color: "text-pink-500" },
          ].map((item, idx) => (
            <div key={idx} className="space-y-2" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <h3 className={`text-5xl font-extrabold ${item.color}`}>{item.num}</h3>
              <p className="text-gray-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⚙️ FEATURES SECTION */}
      <section className="py-20 bg-indigo-50" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-10 text-center text-indigo-700">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Interactive Lessons",
              desc: "Learn with engaging exercises, visuals, and real examples that keep you hooked.",
              icon: "📘",
            },
            {
              title: "Real Pronunciation",
              desc: "Listen and speak words correctly with built-in speech practice tools.",
              icon: "🎤",
            },
            {
              title: "Progress Tracking",
              desc: "Monitor your growth and celebrate milestones as you master new lessons.",
              icon: "📈",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-indigo-600">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 COMMUNITY SECTION */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-emerald-600 text-white text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">Join Our Learning Community</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
          Connect with other learners around the world. Share experiences, discuss challenges, and grow together.
        </p>
        <button className="bg-white text-green-600 px-10 py-3 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
          Join Now
        </button>
      </section>
    </div>
  );
};

export default HomePage;
