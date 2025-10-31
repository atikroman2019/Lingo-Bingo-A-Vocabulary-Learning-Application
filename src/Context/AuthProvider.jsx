// AuthProvider.jsx
import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  getAuth,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // ✅ Register new user
  const register = async (name, email, photoURL, password) => {
    setLoading(true);
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(res.user, {
      displayName: name,
      photoURL: photoURL,
    });
    setUser(res.user);
    setLoading(false);
    return res;
  };

  // ✅ Email/Password Login
  const login = async (email, password) => {
    setLoading(true);
    const res = await signInWithEmailAndPassword(auth, email, password);
    setUser(res.user);
    setLoading(false);
    return res;
  };

  // ✅ Google Login
  const googleLogin = async () => {
    setLoading(true);
    const res = await signInWithPopup(auth, provider);
    setUser(res.user);
    setLoading(false);
    return res;
  };

  // ✅ Logout
  const logOut = async () => {
    setLoading(true);
    await signOut(auth);
    setUser(null);
    setLoading(false);
  };
  // ✅ RESET PASSWORD
  const resetPassword = async (email) => {
    if (!email) throw new Error("Please enter your email address.");
    await sendPasswordResetEmail(auth, email);
    return true;
  };


  // ✅ Keep user logged in (and avoid redirecting on reload)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Wait until Firebase finishes restoring the session
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup listener
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    register,
    login,
    googleLogin,
    logOut,
    resetPassword,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* Prevent children rendering until Firebase confirms auth state */}
      {!loading && children}
      {loading && (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-500 animate-pulse">Checking authentication...</p>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
