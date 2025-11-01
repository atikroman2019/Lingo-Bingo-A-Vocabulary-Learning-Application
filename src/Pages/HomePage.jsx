import { useEffect, useCallback } from "react";
import AOS from "aos";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import bannerBg from "../assets/coolbackgrounds-particles-stellar.png";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

    // ✅ Initialize particles
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="w-full">
      {/* 🌟 HERO SECTION */}
      <section
        className="relative text-white min-h-[90vh] flex flex-col md:flex-row items-center justify-between overflow-hidden px-6 md:px-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
       {/* ✨ Animated & Interactive Particles */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0"
          options={{
            background: { color: { value: "transparent" } },
            fullScreen: { enable: false },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: ["grab", "repulse"] },
                onClick: { enable: true, mode: "bubble" },
                resize: true,
              },
              modes: {
                grab: { distance: 140, links: { opacity: 0.6 } },
                repulse: { distance: 100, duration: 0.6 },
                bubble: { distance: 200, size: 8, duration: 1, opacity: 1 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                outModes: { default: "bounce" },
              },
              number: {
                value: 90,
                density: { enable: true, area: 800 },
              },
              opacity: {
                value: 0.7,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.3,
                  sync: false,
                },
              },
              shape: { type: "circle" },
              size: {
                value: { min: 1, max: 4 },
                animation: { enable: true, speed: 2, minimumValue: 0.5 },
              },
              shadow: {
                enable: true,
                color: "#ffffff",
                blur: 5,
              },
              glow: {
                enable: true,
                color: "#9b5de5",
                blur: 5,
              },
            },
            detectRetina: true,
          }}
        />


        {/* ✅ HERO CONTENT */}
        <div data-aos="fade-right" className="relative z-10 max-w-xl space-y-6 mt-12 md:mt-0">
          <h1 className="text-5xl text-red-500 md:text-6xl font-extrabold leading-tight">
            Master New Words. <br />
            <span className="text-purple-300">Speak With Confidence.</span>
          </h1>
          <p className="text-lg opacity-90">
            Boost your vocabulary effortlessly with interactive lessons, fun quizzes,
            and real pronunciation practice. Start your journey to fluency today.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/start-learning">
              <button className="bg-purple-500 hover:bg-white/10 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg transition">
                🚀 Start Learning
              </button>
            </Link>
            <Link to="/tutorials">
              <button className="border bg-red-400 border-white/70 hover:bg-white/10 px-8 py-3 rounded-full font-medium transition">
                🎥 Watch Tutorials
              </button>
            </Link>
          </div>
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
      <section
        className="py-20 bg-gradient-to-r from-green-400 to-emerald-600 text-white text-center"
        data-aos="fade-up"
      >
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
