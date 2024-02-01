import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { navigationRoutes } from "../../static/navigationRoutes";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Navbar routes={navigationRoutes} />
      <Outlet />
    </div>
  );
};
