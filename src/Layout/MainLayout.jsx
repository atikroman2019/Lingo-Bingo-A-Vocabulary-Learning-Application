import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = ({ user, logOut }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header user={user} logOut={logOut} />
      <Navbar user={user} />

      <main className="flex-grow w-11/12 mx-auto py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
