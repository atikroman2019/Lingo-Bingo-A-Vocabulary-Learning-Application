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
  signOut 
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  // ✅ REGISTER FUNCTION
  const register = async (name, email, photoURL, password) => {
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, {
        displayName: name,
        photoURL: photoURL,
      });
      setUser(res.user);
      return res;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ✅ LOGIN FUNCTION
  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUser(res.user);
      return res;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ✅ GOOGLE LOGIN
  const googleLogin = async () => {
    try {
      setLoading(true);
      const res = await signInWithPopup(auth, provider);
      setUser(res.user);
      return res;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ✅ LOGOUT
  const logOut = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ KEEP USER LOGGED IN
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = { user, register, login, googleLogin, logOut, loading };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
