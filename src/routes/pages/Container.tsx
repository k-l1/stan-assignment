import { Outlet } from "react-router-dom";
import styles from "../Layout.module.css";

export const Container = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};
