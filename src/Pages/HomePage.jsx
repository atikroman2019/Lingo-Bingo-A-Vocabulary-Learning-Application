import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick"; // make sure to install react-slick and slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full">
      {/* Carousel Section */}
      <div className="carousel w-full" data-aos="fade-up">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-gray-100 text-center" data-aos="fade-right">
        <h2 className="text-3xl font-bold mb-4">About Our Website</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Our mission is to help users learn new vocabulary efficiently.
          With interactive lessons, quizzes, and tutorials, anyone can improve their language skills at their own pace.
        </p>
      </section>

      {/* Success Section */}
      <section className="py-16 text-center bg-white" data-aos="fade-left">
        <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div data-aos="zoom-in" data-aos-delay="100">
            <h3 className="text-4xl font-bold text-blue-500">1K+</h3>
            <p>Users</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <h3 className="text-4xl font-bold text-green-500">500+</h3>
            <p>Lessons</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <h3 className="text-4xl font-bold text-red-500">10K+</h3>
            <p>Vocabulary Words</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400">
            <h3 className="text-4xl font-bold text-yellow-500">200+</h3>
            <p>Tutorials</p>
          </div>
        </div>
      </section>

      {/* Extra Section 1 */}
      <section className="py-16 bg-blue-50 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Interactive Learning</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Practice vocabulary with fun quizzes and games. Track your progress and reach milestones as you advance in your language learning journey.
        </p>
      </section>

      {/* Extra Section 2 */}
      <section className="py-16 bg-green-50 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Connect with fellow learners, participate in discussions, and share tips to improve together. Learning is more fun when done together!
        </p>
        <button
          className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          data-aos="flip-left"
        >
          Join Now
        </button>
      </section>
    </div>
  );
};

export default HomePage;
