import { Outlet } from "react-router-dom";
import NavBarr from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

const AppLayout = () => {
  return (
    <div>
      <NavBarr />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default AppLayout;
