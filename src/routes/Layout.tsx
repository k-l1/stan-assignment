import { Outlet } from "react-router-dom";
import { navigationRoutes } from "../../static/navigationRoutes";
import { Navbar } from "../components/Navbar";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Navbar routes={navigationRoutes} />
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};
