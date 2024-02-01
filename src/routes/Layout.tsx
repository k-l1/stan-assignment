import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import { Navbar } from "../components/Navbar";
import { navigationRoutes } from "../../static/navigationRoutes";

export const Layout = () => {
  return (
    <div className="Layout">
      <Navbar routes={navigationRoutes} />
      <Outlet />
    </div>
  );
};
