import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <>
    <Header></Header>
      <Navbar></Navbar>

      {/* Page content */}
      <main>
        <Outlet />
      </main>
      <Footer></Footer>

      {/* ToastContainer always mounted */}
      
    </>
  );
};

export default MainLayout;
