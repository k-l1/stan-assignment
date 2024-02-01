import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../../public/logo.svg";

// TODO Tightly coupled to react-router
export const Navbar = ({
  routes,
}: {
  routes: { name: string; path: string }[];
}) => {
  return (
    <header className={styles.navbar}>
      <Logo width="150" height="100" />
      <nav className={styles.links}>
        {routes.map((route) => (
          <NavLink
            to={route.path}
            className={({ isActive, isPending }) =>
              isPending ? styles.pending : isActive ? styles.active: ""
            }
          >
            {route.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
