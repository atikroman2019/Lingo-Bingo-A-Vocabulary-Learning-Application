import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // 🌍 Direct image URLs (you can replace these with your preferred ones)
  const banners = [
    "https://i.ibb.co.com/WptX3kxX/hong-feng-m0e10o-IC2-PM-unsplash.jpg",
    "https://i.ibb.co.com/KcqStJDN/lin-mei-NYy-Cqd-BOKwc-unsplash.jpg",
    "https://i.ibb.co.com/HTZCcKzF/premium-photo-1682092403674-e343b20751be.jpg",
    "https://i.ibb.co.com/nsxVJptg/seiya-maeda-f-GCOdmssb-XU-unsplash.jpg",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
  ];

  return (
    <div className="w-full">
      {/* 🌟 HERO SECTION WITH SLIDER */}
      <section className="relative text-white min-h-[90vh] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="mySwiper h-[90vh]"
        >
          {banners.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="h-[90vh] bg-cover bg-center flex flex-col items-center justify-center text-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="bg-black/50 p-8 rounded-2xl max-w-2xl mx-auto space-y-6">
                  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-purple-300">
                    Master New Words <br /> <span className="text-red-500">Speak With Confidence</span>
                  </h1>
                  <p className="text-lg text-gray-200">
                    Learn vocabulary, pronunciation, and more — the fun way.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/start-learning">
                      <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition">
                        🚀 Start Learning
                      </button>
                    </Link>
                    <Link to="/tutorials">
                      <button className="border bg-red-500 border-white/70 hover:bg-white/10 px-8 py-3 rounded-full font-medium transition">
                        🎥 Watch Tutorials
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 💡 ABOUT SECTION */}
      <section className="py-20 bg-gray-50 mt-16 text-center" data-aos="fade-up">
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
        className="py-20 mt-16 bg-gradient-to-r from-green-400 to-emerald-600 text-white text-center"
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
