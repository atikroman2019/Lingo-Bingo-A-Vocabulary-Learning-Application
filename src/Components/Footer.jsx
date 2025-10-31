const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="w-11/12 mx-auto text-center space-y-3">
        <p>📞 Contact: support@lingolearn.com | +880 1234 567890</p>

        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-pink-400">Instagram</a>
          <a href="#" className="hover:text-sky-400">Twitter</a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} LingoLearn — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
