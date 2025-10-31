import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!user) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <h2 className="text-xl text-gray-600">No user logged in</h2>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-3xl text-center font-bold">Welcome! {user.displayName}</h2>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-100 to-white px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
                <img
                    src={user.photoURL || "https://i.ibb.co/2d3hXJp/default-avatar.png"}
                    alt="User Avatar"
                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Name:  {user.displayName || "Unnamed User"}
                </h2>
                <p className="text-gray-600 mb-4">Email: {user.email}</p>

                <button
                    onClick={() => navigate("/update-profile")}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition font-semibold"
                >
                    Update Information
                </button>
            </div>
        </div>
        </div>
        
    );
};

export default Profile;
