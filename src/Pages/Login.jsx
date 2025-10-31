import { useContext, useState } from "react";
import { AuthContext } from '../Context/AuthProvider';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            toast.success("Login Successful!");
            navigate("/");
        } catch (err) {
            toast.error(err.message);
        }
    };
    const handleGoogle = async () => {
        try {
            await googleLogin();
            toast.success("Login with Google Successful!");
            navigate("/");
        } catch (err) {
            toast.error(err.message);
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-3 cursor-pointer text-gray-500"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div>
                        <button className="text-red-500 mb-4 hover:underline">Forgot Password?</button> <br />
                        <div className="flex gap-3 text-sm">
                            <p>Don't Have an account?</p>  <Link className="text-purple-500 hover:underline" to="/register"><span className="font-semibold">Register</span></Link>

                        </div>


                    </div>
                    <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition">Login</button>
                </form>
                <hr className="my-4" />
                <button
                    onClick={handleGoogle}
                    className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
                >
                    Login with Google
                </button>
            </div>
        </div>

    );
};

export default Login;