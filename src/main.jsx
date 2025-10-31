import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useLocation,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layout & Pages
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import StartLearning from "./Pages/StartLearning";
import Tutorial from "./Pages/Tutorial";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import UpdateProfile from "./Pages/UpdateProfile";

// Context
import AuthProvider, { AuthContext } from "./Context/AuthProvider";
import Lesson from "./Pages/Lesson";
import ErrorPage from "./Pages/ErrorPage";


// ----- Private Route Component -----
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 🔄 While Firebase is checking authentication status
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600 animate-pulse">Checking Authentication...</p>
      </div>
    );
  }

  // 🚫 If not logged in, redirect to login and remember intended route
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ If logged in, show the page
  return children;
};


// ----- Router Setup -----
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/start-learning", element: <StartLearning /> },
      { path: "/tutorials", element: <Tutorial /> },
      { path: "/about-us", element: <About /> },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/lesson/:lesson_no",
        element: (
          <PrivateRoute>
            <Lesson />
          </PrivateRoute>
        ),

      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoute>
            <Tutorial />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);


// ----- Render -----
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={2000} />
    </AuthProvider>
  </StrictMode>
);
