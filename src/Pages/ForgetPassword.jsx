import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const ForgetPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const location = useLocation();

    const [email, setEmail] = useState("");

    // ✅ If email is passed from login page, pre-fill it
    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const emailFromLogin = query.get("email");
        if (emailFromLogin) setEmail(emailFromLogin);
    }, [location]);

    const handleReset = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(email);
            toast.success("Password reset email sent! Redirecting to Gmail...");
            setTimeout(() => {
                window.open("https://mail.google.com", "_blank");
            }, 1500);
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
                    Reset Password
                </h2>

                <form onSubmit={handleReset} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                        Reset Password
                    </button>
                </form>

                <p className="text-center text-gray-600 text-sm mt-6">
                    Remember your password?{" "}
                    <a
                        href="/login"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        Go back to Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ForgetPassword;
