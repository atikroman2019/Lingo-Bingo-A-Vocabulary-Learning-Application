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
import { toast } from "react-toastify";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

const register = (name, email, photoURL, password) => {
  setLoading(true);

  return createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      return updateProfile(res.user, { displayName: name, photoURL })
        .then(() => {
          setUser(res.user);
          return res;
        });
    })
    .catch((error) => {
      toast.error(handleFirebaseError(error));
      throw error;
    })
    .finally(() => {
      setLoading(false);
    });
};

const login = (email, password) => {
  setLoading(true);

  return signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      setUser(res.user);
     
      return res;
    })
    .catch((error) => {
      toast.error('Invalid Email or Password');
      throw error;
    })
    .finally(() => {
      setLoading(false);
    });
};


  const googleLogin = async () => {
    setLoading(true);
    try {
      const res = await signInWithPopup(auth, provider);
      setUser(res.user);
      return res;
    } catch (error) {
      toast.error(handleFirebaseError(error));
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error(handleFirebaseError(error));
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    if (!email) {
      toast.error("Please enter your email address.");
      throw new Error("Missing email");
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
      return true;
    } catch (error) {
      toast.error(handleFirebaseError(error));
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleFirebaseError = (error) => {
    const code = error.code || "";
    if (code.includes("auth/invalid-email")) return "Invalid email format.";
    if (code.includes("auth/user-not-found")) return "User not found.";
    if (code.includes("auth/wrong-password")) return "Wrong password.";
    if (code.includes("auth/email-already-in-use")) return "Email already registered.";
    if (code.includes("auth/too-many-requests")) return "Too many attempts. Try again later.";
    return "Something went wrong. Please try again.";
  };

  const value = { user, register, login, googleLogin, logOut, resetPassword, loading };

  return (
    <AuthContext.Provider value={value}>
      {children}
      {loading && (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <p className="text-gray-600 animate-pulse text-lg">Checking authentication...</p>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
