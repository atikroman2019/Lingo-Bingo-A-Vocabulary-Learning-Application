import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!user) return;

        try {
            setLoading(true);
            await updateProfile(user, { displayName: name, photoURL: photoURL });
            setLoading(false);
            navigate("/my-profile");
        } catch (error) {
            setLoading(false);
            alert("Failed to update profile: " + error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-50 to-white px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
                    Update Your Information
                </h2>

                <form onSubmit={handleUpdate} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
                        <input
                            type="text"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            placeholder="Enter your photo URL"
                            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition"
                    >
                        {loading ? "Updating..." : "Update Information"}
                    </button>
                </form>

                <div className="text-center mt-6">
                    <button
                        onClick={() => navigate("/my-profile")}
                        className="text-purple-500 hover:underline"
                    >
                        ← Back to Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
