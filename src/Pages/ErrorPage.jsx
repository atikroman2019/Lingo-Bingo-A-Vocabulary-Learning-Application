import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-center px-6">
            {/* 404 Title */}
            <h1 className="text-8xl font-extrabold text-purple-600 mb-4">404</h1>

            {/* Subtitle */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                Page Not Found
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>

            {/* Back to Home Button */}
            <Link
                to="/"
                className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition duration-300"
            >
                Back to Home
            </Link>

            {/* Decorative Element */}
            <div className="mt-10 text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} Vocabulary Learning App</p>
            </div>
        </div>
    );
};

export default ErrorPage;
