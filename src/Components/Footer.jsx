import { FaFacebookF, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoPng from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-11/12 mx-auto bg-black text-gray-200 pt-10 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
          <div className="flex items-center gap-2">
            <img src={logoPng} alt="Logo" className="w-10 h-10" />
            <h2 className="text-2xl font-bold text-white">LingoBingo</h2>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Learn new words, improve your vocabulary, and have fun with
            interactive lessons at LingoBingo — your everyday learning companion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
          <h3 className="text-lg font-semibold text-white border-b border-purple-400 pb-2">
            Quick Links
          </h3>
          <Link
            to="/"
            className="hover:text-purple-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/tutorials"
            className="hover:text-purple-300 transition-colors duration-300"
          >
            Tutorials
          </Link>
          <Link
            to="/about-us"
            className="hover:text-purple-300 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            to="/start-learning"
            className="hover:text-purple-300 transition-colors duration-300"
          >
            Start Learning
          </Link>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
          <h3 className="text-lg font-semibold text-white border-b border-purple-400 pb-2">
            Contact Us
          </h3>
          <p>📧 support@lingobingo.com</p>
          <p>📞 +880 1234 567890</p>

          <div className="flex gap-4 pt-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaGlobe className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-purple-500 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()}{" "}
        <span className="text-purple-300 font-semibold">LingoBingo</span> — All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
