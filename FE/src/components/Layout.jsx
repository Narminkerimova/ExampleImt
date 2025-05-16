import Navbar from "./Navbar/index";
import Footer from "./Footer/index";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
